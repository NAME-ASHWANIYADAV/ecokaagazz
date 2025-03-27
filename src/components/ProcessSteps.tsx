import React, { useEffect, useRef } from 'react';

interface Step {
  icon: string;
  title: string;
  description: string;
}

interface ProcessStepsProps {
  title: string;
  subtitle: string;
  steps: Step[];
}

const ProcessSteps: React.FC<ProcessStepsProps> = ({ title, subtitle, steps }) => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.3,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const stepElements = document.querySelectorAll('.step-item');
          stepElements.forEach((el, index) => {
            setTimeout(() => {
              el.classList.add('revealed');
            }, 300 * index);
          });
        }
      });
    }, options);

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-16 bg-kaagazz-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-4">{title}</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">{subtitle}</p>
        </div>

        <div className="relative">
          {/* Connecting Line */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-kaagazz-gold transform -translate-y-1/2 z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div 
                key={index} 
                className="step-item reveal-animation bg-white rounded-lg p-6 shadow-medium border border-gray-100 relative z-10 transition-all"
              >
                <div className="bg-kaagazz-gold w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-gold">
                  <span className="text-white text-xl font-bold">{index + 1}</span>
                </div>
                <h3 className="text-xl font-medium text-center mb-4">{step.title}</h3>
                <p className="text-gray-600 text-center">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSteps;