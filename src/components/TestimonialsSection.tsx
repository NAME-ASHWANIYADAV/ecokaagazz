import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  imageSrc?: string;
}

interface TestimonialsSectionProps {
  testimonials: Testimonial[];
}

const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ testimonials }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

  const goToNext = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  const goToPrev = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  useEffect(() => {
    autoPlayRef.current = setInterval(goToNext, 6000);
    
    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [testimonials.length]);

  const resetAutoPlay = () => {
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
      autoPlayRef.current = setInterval(goToNext, 6000);
    }
  };

  const handlePrev = () => {
    goToPrev();
    resetAutoPlay();
  };

  const handleNext = () => {
    goToNext();
    resetAutoPlay();
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          sectionRef.current?.classList.add('revealed');
        }
      },
      { threshold: 0.3 }
    );

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
    <section className="py-16 bg-kaagazz-cream">
      <div 
        ref={sectionRef} 
        className="container mx-auto px-4 reveal-animation"
      >
        <div className="relative max-w-4xl mx-auto bg-white rounded-lg shadow-medium px-6 py-12 md:px-16 md:py-16">
          <div className="absolute top-8 left-8 text-kaagazz-gold opacity-30">
            <Quote size={64} />
          </div>

          <div className="relative z-10">
            <div 
              className={`transition-opacity duration-500 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}
              key={currentIndex}
            >
              <p className="text-xl md:text-2xl italic text-gray-700 mb-8 relative z-10">
                "{testimonials[currentIndex].quote}"
              </p>
              
              <div className="flex items-center">
                {testimonials[currentIndex].imageSrc && (
                  <div className="mr-4">
                    <img 
                      src={testimonials[currentIndex].imageSrc} 
                      alt={testimonials[currentIndex].author}
                      className="w-14 h-14 rounded-full object-cover"
                    />
                  </div>
                )}
                <div>
                  <div className="font-medium text-gray-900">
                    {testimonials[currentIndex].author}
                  </div>
                  <div className="text-kaagazz-gold">
                    {testimonials[currentIndex].role}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute bottom-6 right-6 flex space-x-2">
            <button 
              onClick={handlePrev}
              className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-kaagazz-gold hover:text-white transition-colors"
              aria-label="Previous testimonial"
              disabled={isAnimating}
            >
              <ChevronLeft size={20} />
            </button>
            <button 
              onClick={handleNext}
              className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-kaagazz-gold hover:text-white transition-colors"
              aria-label="Next testimonial"
              disabled={isAnimating}
            >
              <ChevronRight size={20} />
            </button>
          </div>

          <div className="absolute bottom-6 left-6 flex space-x-1">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  if (!isAnimating && index !== currentIndex) {
                    setIsAnimating(true);
                    setCurrentIndex(index);
                    setTimeout(() => setIsAnimating(false), 500);
                    resetAutoPlay();
                  }
                }}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex 
                    ? 'bg-kaagazz-gold w-6' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;