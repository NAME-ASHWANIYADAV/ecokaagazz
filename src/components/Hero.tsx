
import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import { CarouselAuto } from "@/components/ui/carousel-auto";

interface HeroProps {
  title: string;
  subtitle: string;
  cta: string;
  link: string;
  backgroundType: 'image' | 'video' | 'carousel';
  backgroundSrc: string;
  carouselImages?: string[];
}

const Hero: React.FC<HeroProps> = ({ 
  title, 
  subtitle, 
  cta, 
  link, 
  backgroundType, 
  backgroundSrc,
  carouselImages = [] 
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.error("Video autoplay was prevented:", error);
      });
    }

    // Parallax scroll effect
    const handleScroll = () => {
      if (heroRef.current) {
        const scrollPosition = window.scrollY;
        if (scrollPosition < window.innerHeight) {
          const yValue = scrollPosition * 0.3;
          heroRef.current.style.transform = `translateY(${yValue}px)`;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  console.log("Background type:", backgroundType);
  console.log("Carousel images:", carouselImages);

  return (
    <div className="relative h-screen overflow-hidden">
      <div ref={heroRef} className="absolute inset-0 -z-10">
        {backgroundType === 'video' ? (
          <video 
            ref={videoRef}
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay 
            muted 
            loop 
            playsInline
            poster="/placeholder.svg" // Fallback image
          >
            <source src={backgroundSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : backgroundType === 'carousel' && carouselImages && carouselImages.length > 0 ? (
          <div className="absolute inset-0 w-full h-full">
            <CarouselAuto 
              className="w-full h-full" 
              autoPlay={true}
              interval={5000}
            >
              <CarouselContent className="h-full">
                {carouselImages.map((image, index) => (
                  <CarouselItem key={index} className="h-full w-full">
                    <img 
                      src={image} 
                      alt={`Slide ${index + 1}`} 
                      className="w-full h-full object-cover"
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
            </CarouselAuto>
          </div>
        ) : (
          <div 
            className="absolute inset-0 w-full h-full bg-center bg-cover"
            style={{ backgroundImage: `url(${backgroundSrc})` }}
          ></div>
        )}
        <div className="absolute inset-0 bg-gradient-to-r from-kaagazz-dark-brown/80 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 h-full flex items-center">
        <div className="max-w-2xl text-white animate-fade-in-slow space-y-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-semibold leading-tight mb-10">
            {title}
          </h1>
          <p className="text-lg md:text-xl text-gray-100 mb-12">
            {subtitle}
          </p>
          {link && cta && (
            <Link 
              to={link}
              className="inline-flex items-center bg-kaagazz-gold hover:bg-amber-600 text-white py-3 px-6 rounded-md font-medium transition-all duration-300 group"
            >
              {cta}
              <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Hero;