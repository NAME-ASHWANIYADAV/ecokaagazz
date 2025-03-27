import React from 'react';
import Hero from '@/components/Hero';
import CallToAction from '@/components/CallToAction';

const About: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Hero 
        title="About Kaagazz"
        subtitle="Learn about our journey and mission to transform the paper industry."
        cta=""
        link=""
        backgroundType="image"
        backgroundSrc="https://images.unsplash.com/photo-1629132498811-3181fc59f1c9?auto=format&fit=crop&q=80"
      />

      <section id="story" className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-sm uppercase tracking-widest text-kaagazz-gold font-medium">Our Story</span>
              <h2 className="text-3xl md:text-4xl font-serif font-semibold mt-2 mb-8">Transforming Lives and Landscapes</h2>
              <p className="text-gray-700 mb-6">
                Kaagazz was born from a vision to revolutionize the paper industry by creating high-quality products that do not harm our forests. Our founders identified the untapped potential in organic waste and developed an innovative process to transform fruit peels into premium paper.
              </p>
              <p className="text-gray-700 mb-6">
                What makes Kaagazz truly special is our commitment to social impact. We provide employment opportunities to marginalized communities, particularly women and beggars, by training them to collect organic waste from markets and food processing units. This not only provides them with a dignified livelihood but also helps in waste management.
              </p>
              <p className="text-gray-700 mb-6">
                These workers learn to sort, clean, and prepare the raw materials for our paper production process. Through skill development and fair wages, we help them move from poverty to self-sufficiency, creating a positive ripple effect in their families and communities.
              </p>
              <p className="text-gray-700">
                Our mission extends beyond paper production. We aim to establish operations in villages across India, creating sustainable jobs, promoting waste reduction, and saving trees in the process. Each sheet of Kaagazz paper represents a step towards environmental sustainability and social equality.
              </p>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1540103711724-ebf833bde8d1?auto=format&fit=crop&q=80" 
                alt="Kaagazz journey" 
                className="rounded-lg shadow-medium mt-6"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-kaagazz-cream">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-sm uppercase tracking-widest text-kaagazz-gold font-medium">Meet Our Team</span>
            <h2 className="text-3xl md:text-4xl font-serif font-semibold mt-2 mb-8">Our Founders</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-medium overflow-hidden">
              <div className="p-6">
                <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
                  <img 
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80" 
                    alt="Srishti Singh" 
                    className="w-24 h-24 object-cover rounded-full"
                  />
                  <div>
                    <h3 className="text-xl font-medium text-kaagazz-dark-brown mb-1">SRISHTI SINGH</h3>
                    <p className="text-kaagazz-gold mb-2">
                      B.Tech. (Electrical Engineering)
                    </p>
                    <p className="text-gray-600">
                      Graduate from Delhi Technological University
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-medium overflow-hidden">
              <div className="p-6">
                <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
                  <img 
                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80" 
                    alt="Hemant Singh" 
                    className="w-24 h-24 object-cover rounded-full"
                  />
                  <div>
                    <h3 className="text-xl font-medium text-kaagazz-dark-brown mb-1">HEMANT SINGH</h3>
                    <p className="text-kaagazz-gold mb-2">
                      B.Tech. (Civil Engineering)
                    </p>
                    <p className="text-gray-600">
                      Graduate from Delhi Technological University
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-sm uppercase tracking-widest text-kaagazz-gold font-medium">Our Mission</span>
            <h2 className="text-3xl md:text-4xl font-serif font-semibold mt-2 mb-8">Vision & Mission</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-earth text-white rounded-lg p-8 shadow-medium">
              <h3 className="text-2xl font-medium mb-6 flex items-center">
                <span className="mr-3">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="11" stroke="currentColor" strokeWidth="2"/>
                    <path d="M7 12L10 15L17 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
                Company Vision
              </h3>
              <p className="text-gray-100 leading-relaxed">
                To lead the paper industry in sustainability and social responsibility, transforming waste into opportunity while creating a positive environmental impact.
              </p>
            </div>

            <div className="bg-gradient-gold text-kaagazz-dark-brown rounded-lg p-8 shadow-medium">
              <h3 className="text-2xl font-medium mb-6 flex items-center">
                <span className="mr-3">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M12 5V19" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M12 5L16 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M12 5L8 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </span>
                Company Mission
              </h3>
              <p className="text-kaagazz-dark-brown leading-relaxed">
                To produce eco-friendly paper using sustainable materials, while empowering communities through equitable job opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CallToAction 
        title="Join Our Journey"
        description="Be part of our mission to transform the paper industry."
        buttonText="Contact Us"
        buttonLink="/contact"
        backgroundImage="https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&q=80"
      />
    </div>
  );
};

export default About;