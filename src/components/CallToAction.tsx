import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface CallToActionProps {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  backgroundImage?: string;
}

const CallToAction: React.FC<CallToActionProps> = ({
  title,
  description,
  buttonText,
  buttonLink,
  backgroundImage,
}) => {
  return (
    <section 
      className="py-16 relative overflow-hidden"
      style={
        backgroundImage 
          ? { backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }
          : { background: 'linear-gradient(135deg, #4A3C31 0%, #2C5545 100%)' }
      }
    >
      {backgroundImage && (
        <div className="absolute inset-0 bg-kaagazz-dark-brown/70"></div>
      )}
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-white mb-6">
            {title}
          </h2>
          <p className="text-lg text-gray-100 mb-8">
            {description}
          </p>
          <Link
            to={buttonLink}
            className="inline-flex items-center bg-kaagazz-gold hover:bg-amber-600 text-white py-3 px-6 rounded-md font-medium transition-all duration-300 group"
          >
            {buttonText}
            <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
