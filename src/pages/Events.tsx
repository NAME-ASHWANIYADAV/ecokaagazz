import React from 'react';
import Hero from '@/components/Hero';
import { Calendar, MapPin, Clock, Users, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Events: React.FC = () => {
  // Sample upcoming events data
  const upcomingEvents = [
    {
      id: 'e1',
      title: 'Eco-Paper Making Workshop',
      date: 'June 12, 2023',
      time: '10:00 AM - 1:00 PM',
      location: 'Delhi Technological University, Delhi',
      description: 'Learn how to make your own sustainable paper from organic waste in this hands-on workshop. Our experts will guide you through the entire process from preparing raw materials to creating your finished paper product.',
      image: 'https://images.unsplash.com/photo-1526726538690-5cbf956ae2fd?auto=format&fit=crop&q=80',
      tags: ['Workshop', 'Hands-on', 'Beginner-Friendly'],
      capacity: 25,
    },
    {
      id: 'e2',
      title: 'Sustainable Art Exhibition',
      date: 'July 5-10, 2023',
      time: '10:00 AM - 6:00 PM',
      location: 'India Habitat Centre, Delhi',
      description: 'Featuring artworks created on Kaagazz paper by renowned artists from across India. Come witness the versatility and beauty of sustainable paper art. Special artist talks scheduled throughout the exhibition period.',
      image: 'https://images.unsplash.com/photo-1558443336-dbb3b9c2806b?auto=format&fit=crop&q=80',
      tags: ['Exhibition', 'Art', 'Free Entry'],
      capacity: 100,
    },
    {
      id: 'e3',
      title: 'Corporate Sustainability Drive',
      date: 'Ongoing Program',
      time: 'By Appointment',
      location: 'Your Office Location',
      description: 'Partner with us to transform your office waste into sustainable paper products for your business. Our team will visit your premises, assess your waste generation, and propose a customized solution for your organization.',
      image: 'https://images.unsplash.com/photo-1551836022-deb4988cc6c0?auto=format&fit=crop&q=80',
      tags: ['Corporate', 'Sustainability', 'Customized'],
      capacity: 'Unlimited',
    },
    {
      id: 'e4',
      title: 'World Environment Day Special Workshop',
      date: 'June 5, 2023',
      time: '11:00 AM - 4:00 PM',
      location: 'Select Citywalk Mall, Delhi',
      description: 'Join us for a special workshop on World Environment Day. Learn about sustainable practices, participate in paper-making demonstrations, and take home your own handmade paper creation. Fun activities for children and adults alike.',
      image: 'https://images.unsplash.com/photo-1567427018141-0584cfcbf1b8?auto=format&fit=crop&q=80',
      tags: ['Special Event', 'Family-Friendly', 'Free Entry'],
      capacity: 50,
    },
    {
      id: 'e5',
      title: 'Artisanal Paper-Making Masterclass',
      date: 'August 15, 2023',
      time: '10:00 AM - 5:00 PM',
      location: 'Delhi Technological University, Delhi',
      description: 'An advanced workshop for those interested in perfecting their paper-making skills. Learn techniques for creating textured papers, embedded elements, and colorful designs. Suitable for artists, designers, and craft enthusiasts.',
      image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80',
      tags: ['Masterclass', 'Advanced', 'Artistic'],
      capacity: 15,
    },
  ];

  return (
    <div className="min-h-screen">
      <Hero 
        title="Upcoming Events"
        subtitle="Join us at our workshops, exhibitions, and community initiatives to learn about sustainable paper-making and eco-friendly practices."
        cta=""
        link=""
        backgroundType="image"
        backgroundSrc="https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80"
      />

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-12">
            {upcomingEvents.map((event) => (
              <div key={event.id} className="bg-white rounded-lg shadow-medium overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-3">
                  <div className="md:col-span-1">
                    <div className="h-full">
                      <img 
                        src={event.image} 
                        alt={event.title} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="md:col-span-2 p-6 md:p-8">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {event.tags.map((tag, index) => (
                        <span 
                          key={index} 
                          className="bg-kaagazz-cream text-kaagazz-dark-brown text-xs font-medium px-3 py-1 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h2 className="text-2xl font-serif font-semibold mb-3">{event.title}</h2>
                    <p className="text-gray-700 mb-6">{event.description}</p>
                    
                    <div className="space-y-3 mb-6">
                      <div className="flex items-start">
                        <Calendar size={18} className="text-kaagazz-gold mr-3 mt-1 flex-shrink-0" />
                        <div>
                          <h3 className="font-medium text-gray-900">Date</h3>
                          <p className="text-gray-600">{event.date}</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <Clock size={18} className="text-kaagazz-gold mr-3 mt-1 flex-shrink-0" />
                        <div>
                          <h3 className="font-medium text-gray-900">Time</h3>
                          <p className="text-gray-600">{event.time}</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <MapPin size={18} className="text-kaagazz-gold mr-3 mt-1 flex-shrink-0" />
                        <div>
                          <h3 className="font-medium text-gray-900">Location</h3>
                          <p className="text-gray-600">{event.location}</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <Users size={18} className="text-kaagazz-gold mr-3 mt-1 flex-shrink-0" />
                        <div>
                          <h3 className="font-medium text-gray-900">Capacity</h3>
                          <p className="text-gray-600">{event.capacity} participants</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row gap-4">
                      <button className="bg-kaagazz-gold hover:bg-amber-600 text-white py-2 px-6 rounded-md font-medium transition-all duration-300 flex items-center justify-center">
                        Register Now
                      </button>
                      <Link 
                        to="/contact" 
                        className="border border-kaagazz-dark-brown text-kaagazz-dark-brown hover:bg-kaagazz-dark-brown hover:text-white py-2 px-6 rounded-md font-medium transition-all duration-300 flex items-center justify-center"
                      >
                        Contact for Details
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;
