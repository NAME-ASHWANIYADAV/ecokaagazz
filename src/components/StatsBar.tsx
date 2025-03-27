import React, { useEffect, useRef, useState } from 'react';

interface Stat {
  value: number;
  label: string;
  prefix?: string;
  suffix?: string;
}

interface StatsBarProps {
  stats: Stat[];
}

const StatsBar: React.FC<StatsBarProps> = ({ stats }) => {
  const [isVisible, setIsVisible] = useState(false);
  const statsSectionRef = useRef<HTMLDivElement>(null);
  const [animatedValues, setAnimatedValues] = useState<number[]>(stats.map(() => 0));

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (statsSectionRef.current) {
      observer.observe(statsSectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      stats.forEach((stat, index) => {
        const duration = 2000; // animation duration in ms
        const steps = 60; // number of steps in the animation
        const increment = stat.value / steps;
        let currentValue = 0;
        let currentStep = 0;

        const interval = setInterval(() => {
          currentStep++;
          currentValue = Math.min(currentValue + increment, stat.value);
          
          setAnimatedValues(prev => {
            const newValues = [...prev];
            newValues[index] = Math.round(currentValue);
            return newValues;
          });

          if (currentStep >= steps) {
            clearInterval(interval);
          }
        }, duration / steps);

        return () => clearInterval(interval);
      });
    }
  }, [isVisible, stats]);

  return (
    <div ref={statsSectionRef} className="bg-kaagazz-dark-brown py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-kaagazz-gold mb-2">
                {stat.prefix}{Math.round(animatedValues[index]).toLocaleString()}{stat.suffix}
              </div>
              <div className="text-lg text-white font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatsBar;