import React, { useEffect, useRef } from 'react';

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface FeatureSectionProps {
  title: string;
  subtitle: string;
  features: Feature[];
  backgroundClass?: string;
}

const FeatureSection: React.FC<FeatureSectionProps> = ({ 
  title, 
  subtitle, 
  features,
  backgroundClass = "bg-white" 
}) => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.2,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const featureElements = document.querySelectorAll('.feature-item');
          featureElements.forEach((el, index) => {
            setTimeout(() => {
              el.classList.add('revealed');
            }, 200 * index);
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
    <section ref={sectionRef} className={`py-16 ${backgroundClass}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-4">{title}</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">{subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="feature-item reveal-animation rounded-lg p-6 transition-all duration-300 hover:shadow-medium flex flex-col items-center"
            >
              <div className="text-kaagazz-gold mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-medium text-center mb-4">{feature.title}</h3>
              <p className="text-gray-600 text-center">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;