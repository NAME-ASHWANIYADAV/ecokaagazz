import React from 'react';
import Hero from '@/components/Hero';
import CallToAction from '@/components/CallToAction';
import { Leaf, Recycle, Droplets, Wind } from 'lucide-react';
import { Link } from 'react-router-dom';

const Sustainability: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Hero 
        title="Our Commitment to Sustainability"
        subtitle="Discover how Kaagazz is revolutionizing the paper industry with eco-friendly practices and social responsibility."
        cta="Learn More"
        link="/about"
        backgroundType="image"
        backgroundSrc="sustainable.png"
      />

      <section id="commitment" className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-sm uppercase tracking-widest text-kaagazz-gold font-medium">Our Approach</span>
              <h2 className="text-3xl md:text-4xl font-serif font-semibold mt-2 mb-6">Sustainable from Start to Finish</h2>
              <p className="text-gray-700 mb-4">
                At Kaagazz, sustainability isn't just a business practice—it's the foundation of everything we do. Our innovative approach transforms organic waste into premium paper products, addressing multiple environmental challenges while creating social impact.
              </p>
              <p className="text-gray-700 mb-6">
                From sourcing raw materials to the final product, every stage of our process is designed to minimize environmental impact and maximize social benefit.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div className="flex items-start">
                  <Leaf className="text-kaagazz-gold mr-3 mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h3 className="font-medium text-gray-900 mb-1">Zero Deforestation</h3>
                    <p className="text-gray-600 text-sm">Our paper is made from fruit peels, not trees.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Recycle className="text-kaagazz-gold mr-3 mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h3 className="font-medium text-gray-900 mb-1">Waste Reduction</h3>
                    <p className="text-gray-600 text-sm">Converting organic waste into valuable products.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Droplets className="text-kaagazz-gold mr-3 mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h3 className="font-medium text-gray-900 mb-1">Low Water Usage</h3>
                    <p className="text-gray-600 text-sm">Our process uses significantly less water than traditional paper production.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Wind className="text-kaagazz-gold mr-3 mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h3 className="font-medium text-gray-900 mb-1">Reduced Emissions</h3>
                    <p className="text-gray-600 text-sm">Lower carbon footprint compared to conventional paper manufacturing.</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img 
                src="3r.png" 
                alt="Kaagazz sustainable process" 
                className="rounded-lg shadow-medium"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-kaagazz-cream">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-sm uppercase tracking-widest text-kaagazz-gold font-medium">Our Model</span>
            <h2 className="text-3xl md:text-4xl font-serif font-semibold mt-2 mb-6">Circular Economy Approach</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Our business model is built on the principles of circular economy, turning waste into resources and creating sustainable value chains.
            </p>
          </div>

          <div className="relative">
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-kaagazz-gold transform -translate-y-1/2 z-0"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
              <div className="bg-white rounded-lg p-6 shadow-medium text-center">
                <div className="w-16 h-16 rounded-full bg-kaagazz-gold text-white flex items-center justify-center mx-auto mb-4 text-xl font-bold">1</div>
                <h3 className="text-xl font-medium mb-2">Collect</h3>
                <p className="text-gray-600">Gathering organic waste from markets and food processing units</p>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-medium text-center">
                <div className="w-16 h-16 rounded-full bg-kaagazz-gold text-white flex items-center justify-center mx-auto mb-4 text-xl font-bold">2</div>
                <h3 className="text-xl font-medium mb-2">Transform</h3>
                <p className="text-gray-600">Converting waste into high-quality paper through our proprietary process</p>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-medium text-center">
                <div className="w-16 h-16 rounded-full bg-kaagazz-gold text-white flex items-center justify-center mx-auto mb-4 text-xl font-bold">3</div>
                <h3 className="text-xl font-medium mb-2">Create</h3>
                <p className="text-gray-600">Manufacturing premium paper products while creating employment</p>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-medium text-center">
                <div className="w-16 h-16 rounded-full bg-kaagazz-gold text-white flex items-center justify-center mx-auto mb-4 text-xl font-bold">4</div>
                <h3 className="text-xl font-medium mb-2">Regenerate</h3>
                <p className="text-gray-600">Products biodegrade naturally, returning to the earth without harm</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <span className="text-sm uppercase tracking-widest text-kaagazz-gold font-medium">Corporate Sustainability</span>
              <h2 className="text-3xl md:text-4xl font-serif font-semibold mt-2 mb-6">Partner for a Sustainable Future</h2>
              <p className="text-gray-700 mb-4">
                We collaborate with forward-thinking businesses to implement sustainable paper solutions and achieve corporate sustainability goals.
              </p>
              <div className="space-y-4 mb-6">
                <div className="border-l-4 border-kaagazz-gold pl-4">
                  <h3 className="font-medium text-gray-900 mb-1">Office Supplies</h3>
                  <p className="text-gray-600">Replace conventional paper with eco-friendly alternatives for your daily operations.</p>
                </div>
                <div className="border-l-4 border-kaagazz-gold pl-4">
                  <h3 className="font-medium text-gray-900 mb-1">Corporate Gifts</h3>
                  <p className="text-gray-600">Impress clients and partners with sustainable, premium quality paper products.</p>
                </div>
                <div className="border-l-4 border-kaagazz-gold pl-4">
                  <h3 className="font-medium text-gray-900 mb-1">CSR Initiatives</h3>
                  <p className="text-gray-600">Support community upliftment through our social impact programs.</p>
                </div>
              </div>
              <Link to="/contact" className="bg-kaagazz-gold hover:bg-amber-600 text-white py-3 px-6 rounded-md font-medium transition-all duration-300">
                Become a Corporate Partner
              </Link>
            </div>
            <div className="order-1 lg:order-2">
              <img 
                src="sustainablepartner.png" 
                alt="Corporate partnership" 
                className="rounded-lg shadow-medium"
              />
            </div>
          </div>
        </div>
      </section>

      <CallToAction 
        title="Be Part of the Solution"
        description="Join us in creating a sustainable future for the paper industry. Together, we can make a difference."
        buttonText="Get Involved"
        buttonLink="/contact"
        backgroundImage="https://images.unsplash.com/photo-1517554558809-9b4971b38f39?auto=format&fit=crop&q=80"
      />
    </div>
  );
};

export default Sustainability;
