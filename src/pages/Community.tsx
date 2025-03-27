import React from 'react';
import Hero from '@/components/Hero';
import CallToAction from '@/components/CallToAction';
import { Calendar, Users, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

const Community: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Hero 
        title="Join the Kaagazz Movement"
        subtitle="Be part of our community that's revolutionizing the paper industry while creating positive social and environmental impact."
        cta="Get Involved"
        link="/contact"
        backgroundType="image"
        backgroundSrc="community.png"
      />

      <section id="get-involved" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-sm uppercase tracking-widest text-kaagazz-gold font-medium">Community</span>
            <h2 className="text-3xl md:text-4xl font-serif font-semibold mt-2 mb-6">Be Part of the Change</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              There are many ways to get involved with Kaagazz and help us create a sustainable future for the paper industry.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-medium p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-gold">
              <Calendar className="text-kaagazz-gold mb-6" size={48} />
              <h3 className="text-xl font-medium mb-4">Attend Events</h3>
              <p className="text-gray-600 mb-6">
                Join our workshops, exhibitions, and community events to learn about sustainable paper-making and connect with like-minded individuals.
              </p>
              <a href="#events" className="text-kaagazz-gold font-medium hover:underline">Upcoming Events →</a>
            </div>

            <div className="bg-white rounded-lg shadow-medium p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-gold">
              <Users className="text-kaagazz-gold mb-6" size={48} />
              <h3 className="text-xl font-medium mb-4">Partner with Us</h3>
              <p className="text-gray-600 mb-6">
                Whether you're a business, artist, educator, or institution, there are various ways to collaborate with Kaagazz for mutual growth.
              </p>
              <a href="#partnerships" className="text-kaagazz-gold font-medium hover:underline">Explore Partnerships →</a>
            </div>

            <div className="bg-white rounded-lg shadow-medium p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-gold">
              <Award className="text-kaagazz-gold mb-6" size={48} />
              <h3 className="text-xl font-medium mb-4">Volunteer & Contribute</h3>
              <p className="text-gray-600 mb-6">
                Share your skills, time, and resources to help us expand our reach and impact more communities across India.
              </p>
              <a href="#volunteer" className="text-kaagazz-gold font-medium hover:underline">Volunteer Opportunities →</a>
            </div>
          </div>
        </div>
      </section>

      <section id="events" className="py-16 bg-kaagazz-cream">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-sm uppercase tracking-widest text-kaagazz-gold font-medium">Events & Initiatives</span>
            <h2 className="text-3xl md:text-4xl font-serif font-semibold mt-2 mb-6">Latest Events</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-medium overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-gold">
              <div className="relative">
                <img 
                  src="paperworkshop.png" 
                  alt="Paper-making Workshop" 
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 left-4 bg-kaagazz-gold text-white text-sm font-bold px-3 py-1 rounded-full">
                  Upcoming
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <Calendar size={16} className="mr-2" />
                  <span>June 12, 2023 | 10:00 AM</span>
                </div>
                <h3 className="text-xl font-medium mb-3">Eco-Paper Making Workshop</h3>
                <p className="text-gray-600 mb-4">
                  Learn how to make your own sustainable paper from organic waste in this hands-on workshop.
                </p>
                <button className="text-kaagazz-gold font-medium hover:underline">Register Now →</button>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-medium overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-gold">
              <div className="relative">
                <img 
                  src="exhibition.png" 
                  alt="Art Exhibition" 
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 left-4 bg-kaagazz-gold text-white text-sm font-bold px-3 py-1 rounded-full">
                  Upcoming
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <Calendar size={16} className="mr-2" />
                  <span>July 5-10, 2023</span>
                </div>
                <h3 className="text-xl font-medium mb-3">Sustainable Art Exhibition</h3>
                <p className="text-gray-600 mb-4">
                  Featuring artworks created on Kaagazz paper by renowned artists from across India.
                </p>
                <button className="text-kaagazz-gold font-medium hover:underline">Learn More →</button>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-medium overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-gold">
              <div className="relative">
                <img 
                  src="corpo.png" 
                  alt="Corporate Sustainability Drive" 
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 left-4 bg-kaagazz-gold text-white text-sm font-bold px-3 py-1 rounded-full">
                  Upcoming
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <Calendar size={16} className="mr-2" />
                  <span>Ongoing Program</span>
                </div>
                <h3 className="text-xl font-medium mb-3">Corporate Sustainability Drive</h3>
                <p className="text-gray-600 mb-4">
                  Partner with us to transform your office waste into sustainable paper products for your business.
                </p>
                <button className="text-kaagazz-gold font-medium hover:underline">Partner With Us →</button>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link to="/events" className="bg-kaagazz-dark-brown hover:bg-gray-800 text-white py-3 px-6 rounded-md font-medium transition-all duration-300">
              View All Events
            </Link>
          </div>
        </div>
      </section>

      <section id="partnerships" className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-sm uppercase tracking-widest text-kaagazz-gold font-medium">Collaborations</span>
              <h2 className="text-3xl md:text-4xl font-serif font-semibold mt-2 mb-6">Partner with Kaagazz</h2>
              <p className="text-gray-700 mb-4">
                Join hands with us to create a sustainable ecosystem for paper production and consumption. We work with various stakeholders to maximize our impact.
              </p>
              <ul className="space-y-4 mb-6">
                <li className="flex items-start">
                  <span className="text-kaagazz-gold mr-2">●</span>
                  <span><strong>Corporate Partners:</strong> Implement sustainable paper solutions in your office and supply chain.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-kaagazz-gold mr-2">●</span>
                  <span><strong>Educational Institutions:</strong> Introduce students to sustainable practices and eco-friendly materials.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-kaagazz-gold mr-2">●</span>
                  <span><strong>Artists & Designers:</strong> Create with our premium eco-friendly paper and showcase your work on our platform.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-kaagazz-gold mr-2">●</span>
                  <span><strong>NGOs & Community Organizations:</strong> Collaborate on social initiatives for greater impact.</span>
                </li>
              </ul>
              <Link to="/contact" className="bg-kaagazz-gold hover:bg-amber-600 text-white py-3 px-6 rounded-md font-medium transition-all duration-300">
                Become a Partner
              </Link>
            </div>
            <div>
              <img 
                src="partner.png" 
                alt="Kaagazz partnerships" 
                className="rounded-lg shadow-medium"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="volunteer" className="py-16 bg-kaagazz-deep-green text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-sm uppercase tracking-widest text-kaagazz-gold font-medium">Get Involved</span>
            <h2 className="text-3xl md:text-4xl font-serif font-semibold mt-2 mb-6">Volunteer with Us</h2>
            <p className="text-lg text-gray-100 max-w-3xl mx-auto">
              Share your time, skills, and passion to help us grow our mission and impact.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <h3 className="text-xl font-medium mb-4 text-kaagazz-gold">Workshop Facilitators</h3>
              <p className="text-gray-100 mb-4">
                Help conduct workshops on sustainable paper-making and environmental awareness.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <h3 className="text-xl font-medium mb-4 text-kaagazz-gold">Community Outreach</h3>
              <p className="text-gray-100 mb-4">
                Assist in building connections with villages and urban communities for expansion.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <h3 className="text-xl font-medium mb-4 text-kaagazz-gold">Skilled Professionals</h3>
              <p className="text-gray-100 mb-4">
                Contribute your expertise in design, marketing, technology, or business development.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <h3 className="text-xl font-medium mb-4 text-kaagazz-gold">Event Volunteers</h3>
              <p className="text-gray-100 mb-4">
                Join our team to organize and manage sustainability events and exhibitions.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link to="/contact" className="bg-kaagazz-gold hover:bg-amber-600 text-kaagazz-dark-brown py-3 px-6 rounded-md font-medium transition-all duration-300">
              Apply as Volunteer
            </Link>
          </div>
        </div>
      </section>

      <CallToAction 
        title="Join Our Growing Community"
        description="Together, we can transform the paper industry and create positive impact for generations to come."
        buttonText="Contact Us"
        buttonLink="/contact"
        backgroundImage="https://images.unsplash.com/photo-1577401239170-897942555fb3?auto=format&fit=crop&q=80"
      />
    </div>
  );
};

export default Community;
