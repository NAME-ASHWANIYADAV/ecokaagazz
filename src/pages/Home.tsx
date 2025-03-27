import React from 'react';
import Hero from '@/components/Hero';
import ProcessSteps from '@/components/ProcessSteps';
import FeatureSection from '@/components/FeatureSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import CallToAction from '@/components/CallToAction';
import { Leaf, Recycle, Users, Award, ArrowRight, Clock, BookOpen, Sprout } from 'lucide-react';
import { Link } from 'react-router-dom';
import StatsBar from '@/components/StatsBar';
import { Card, CardContent } from '@/components/ui/card';
const recycle = "/recycle.png";

const Home: React.FC = () => {
  // Hero carousel images - updated with the correct paths
  const heroImages = [
    "/carousel1.png",
    "/carousel2.png",
    "/carousel3.png"
  ];

  console.log("Hero images in Home:", heroImages);

  // Process steps data
  const processSteps = [
    {
      icon: 'icon-collect',
      title: 'Collection',
      description: 'Gathering organic waste (fruit peels) from markets and food processing units.',
    },
    {
      icon: 'icon-process',
      title: 'Processing',
      description: 'Converting peels into high-quality paper through our innovative technology.',
    },
    {
      icon: 'icon-craft',
      title: 'Crafting',
      description: 'Manufacturing premium sustainable stationery and paper products.',
    },
    {
      icon: 'icon-deliver',
      title: 'Delivery',
      description: 'Bringing eco-friendly products to conscious consumers worldwide.',
    },
  ];

  // Features data
  const features = [
    {
      icon: <Leaf className="w-10 h-10" />,
      title: 'Eco-Friendly',
      description: '100% organic and biodegradable products made from fruit and vegetable peels.',
    },
    {
      icon: <Award className="w-10 h-10" />,
      title: 'Premium Quality',
      description: 'Odorless, satin-finish paper suitable for writing, printing, and packaging.',
    },
    {
      icon: <Users className="w-10 h-10" />,
      title: 'Social Impact',
      description: 'Creating employment for women and marginalized communities.',
    },
    {
      icon: <Recycle className="w-10 h-10" />,
      title: 'Zero Waste',
      description: 'Our production cycle ensures minimal environmental impact and waste generation.',
    },
  ];

  // Stats data
  const stats = [
    {
      value: 50,
      label: 'Trees Saved',
      suffix: 'K+',
    },
    {
      value: 200,
      label: 'Tons of Waste Recycled',
      suffix: 'T+',
    },
    {
      value: 100,
      label: 'Local Jobs Created',
      suffix: '+',
    },
    {
      value: 150,
      label: 'Business Partners',
      suffix: '+',
    },
  ];

  // Journey milestones data
  const journeyMilestones = [
    {
      year: 2019,
      title: "The Inception",
      description: "Kaagazz was born from a simple question: What if paper didn't need trees? Our founder began experimenting with fruit peel waste.",
      icon: <Sprout />
    },
    {
      year: 2020,
      title: "First Breakthrough",
      description: "After months of research, we developed our first viable prototype of paper made entirely from organic fruit waste.",
      icon: <BookOpen />
    },
    {
      year: 2021,
      title: "Community Partnerships",
      description: "We established connections with local markets and fruit processing units to create sustainable waste collection channels.",
      icon: <Users />
    },
    {
      year: 2022,
      title: "Production Scaling",
      description: "With increased support, we expanded operations and refined our process to improve quality and efficiency.",
      icon: <Recycle />
    },
    {
      year: 2023,
      title: "Today & Beyond",
      description: "Kaagazz continues to innovate while expanding our product range and impact on communities and the environment.",
      icon: <Clock />
    }
  ];

  // Testimonials data - reduced to just one for the initial phase
  const testimonials = [
    {
      quote: "The concept of making paper from fruit peels is revolutionary. I'm excited to see how Kaagazz grows and transforms the industry.",
      author: "Priya Sharma",
      role: "Environmental Advocate",
    }
  ];

  return (
    <div className="min-h-screen">
      <Hero 
        title="Transforming Waste into Art"
        subtitle="Premium sustainable paper products made from organic fruit peels, supporting communities and saving trees."
        cta="Learn More"
        link="/about"
        backgroundType="carousel"
        backgroundSrc=""
        carouselImages={heroImages}
      />

      {/* What is Kaagazz Section */}
      <section className="py-20 bg-kaagazz-cream">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-4">What is Kaagazz?</h2>
            <div className="w-24 h-1 bg-kaagazz-gold mx-auto mb-8"></div>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Kaagazz is a revolutionary eco-friendly paper brand that transforms fruit and vegetable waste into premium, sustainable paper products. More than just a company, we're a movement toward a world where waste becomes a resource.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <Card className="bg-white rounded-lg overflow-hidden shadow-medium border border-gray-100 hover:shadow-gold transition-all duration-300">
              <div className="h-48 bg-kaagazz-dark-brown flex items-center justify-center text-white">
                <Leaf className="w-20 h-20 opacity-80" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-medium mb-3">Eco-Innovation</h3>
                <p className="text-gray-600">
                  We've pioneered a unique process that converts organic waste into beautiful, functional paper without cutting a single tree.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white rounded-lg overflow-hidden shadow-medium border border-gray-100 hover:shadow-gold transition-all duration-300">
              <div className="h-48 bg-kaagazz-gold flex items-center justify-center text-white">
                <Users className="w-20 h-20 opacity-80" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-medium mb-3">Community-Driven</h3>
                <p className="text-gray-600">
                  Every Kaagazz product represents a collaboration with local communities, providing sustainable livelihoods and economic opportunities.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white rounded-lg overflow-hidden shadow-medium border border-gray-100 hover:shadow-gold transition-all duration-300">
              <div className="h-48 bg-kaagazz-deep-green flex items-center justify-center text-white">
                <Award className="w-20 h-20 opacity-80" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-medium mb-3">Premium Quality</h3>
                <p className="text-gray-600">
                  Our papers feature a distinctive texture and natural durability that makes them perfect for stationery, packaging, and artistic applications.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 section-spacing">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative content-spacing">
                <span className="text-sm uppercase tracking-widest text-kaagazz-gold font-medium">Our Mission</span>
                <h2 className="text-3xl md:text-4xl font-serif font-semibold mt-6 mb-8">From Peel to Paper: A Sustainable Revolution</h2>
                <p className="text-gray-700 mb-6">
                  Kaagazz is transforming the paper industry by creating high-quality, eco-friendly paper from everyday fruit peel organic waste, offering odorless, satin-finish products designed for artists and sustainable businesses.
                </p>
                <div className="mt-10">
                  <Link 
                    to="/about"
                    className="inline-flex items-center bg-kaagazz-dark-brown hover:bg-gray-800 text-white py-3 px-6 rounded-md font-medium transition-all duration-300 group"
                  >
                    Learn Our Story
                    <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative header-image-spacing">
                <img 
                  src="recycle.png" 
                  alt="Kaagazz paper production" 
                  className="rounded-lg shadow-medium w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Journey Through Time Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-4">Our Journey Through Time</h2>
            <div className="w-24 h-1 bg-kaagazz-gold mx-auto mb-8"></div>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              From a humble experiment to a sustainable revolution, follow the path of how Kaagazz has grown and evolved over the years.
            </p>
          </div>

          <div className="relative">
            {/* Timeline connector */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-kaagazz-gold opacity-30 top-0"></div>

            {/* Timeline entries */}
            {journeyMilestones.map((milestone, index) => (
              <div key={index} className={`flex flex-col md:flex-row items-center mb-16 last:mb-0 relative ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                <div className="md:w-1/2 flex justify-center md:justify-end md:pr-12 mb-6 md:mb-0">
                  <div className={`border-2 rounded-lg p-6 shadow-medium transition-all duration-300 hover:shadow-gold bg-white max-w-md ${index % 2 === 0 ? 'md:text-right md:mr-10' : 'md:text-left md:ml-10'}`}>
                    <span className="text-kaagazz-gold font-bold text-xl">{milestone.year}</span>
                    <h3 className="text-xl font-medium mb-2 mt-2">{milestone.title}</h3>
                    <p className="text-gray-600">{milestone.description}</p>
                  </div>
                </div>
                
                {/* Center icon */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-kaagazz-gold flex items-center justify-center text-white shadow-gold z-10">
                  {milestone.icon}
                </div>
                
                <div className="md:w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Do We Do Section */}
      <section className="py-20 bg-kaagazz-cream">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-4">What Do We Do?</h2>
            <div className="w-24 h-1 bg-kaagazz-gold mx-auto mb-8"></div>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              At Kaagazz, we transform waste into wonder through our innovative approach to papermaking and sustainable product creation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="howitworks.png" 
                alt="Paper making process" 
                className="rounded-lg shadow-medium w-full h-96 object-cover"
              />
            </div>
            <div>
              <ul className="space-y-6">
                <li className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-kaagazz-gold rounded-full flex items-center justify-center text-white">
                    <span className="font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-2">Waste Collection</h3>
                    <p className="text-gray-600">We partner with fruit vendors and food processing units to collect organic waste that would otherwise end up in landfills.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-kaagazz-gold rounded-full flex items-center justify-center text-white">
                    <span className="font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-2">Sustainable Papermaking</h3>
                    <p className="text-gray-600">Through our proprietary process, we transform organic waste into premium paper fibers without using harmful chemicals.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-kaagazz-gold rounded-full flex items-center justify-center text-white">
                    <span className="font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-2">Product Creation</h3>
                    <p className="text-gray-600">We craft a diverse range of stationery, packaging, and decorative items that showcase the unique texture and quality of our paper.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-kaagazz-gold rounded-full flex items-center justify-center text-white">
                    <span className="font-bold">4</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-2">Community Empowerment</h3>
                    <p className="text-gray-600">We provide employment and training to local communities, particularly women, creating sustainable livelihood opportunities.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <ProcessSteps 
        title="How Kaagazz Works"
        subtitle="Our innovative process transforms organic waste into premium paper products through a sustainable production cycle."
        steps={processSteps}
      />

      <StatsBar stats={stats} />

      <FeatureSection 
        title="Why Choose Kaagazz"
        subtitle="Our products offer unique benefits that make them stand out in both quality and impact."
        features={features}
      />

      <TestimonialsSection testimonials={testimonials} />

      <section className="py-20 section-spacing">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-6">Our Products</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              We're developing a range of premium eco-friendly paper products. Coming soon!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="rounded-lg overflow-hidden shadow-medium group hover:shadow-gold transition-all duration-300">
              <div className="block">
                <div className="aspect-square relative overflow-hidden">
                  <img 
                    src="stationary.png" 
                    alt="Stationery" 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                    <h3 className="text-xl text-white font-medium">Stationery</h3>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-lg overflow-hidden shadow-medium group hover:shadow-gold transition-all duration-300">
              <div className="block">
                <div className="aspect-square relative overflow-hidden">
                  <img 
                    src="diary.png" 
                    alt="Premium Diaries" 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                    <h3 className="text-xl text-white font-medium">Premium Diaries</h3>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-lg overflow-hidden shadow-medium group hover:shadow-gold transition-all duration-300">
              <div className="block">
                <div className="aspect-square relative overflow-hidden">
                  <img 
                    src="artisanal.png" 
                    alt="Artisanal Papers" 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                    <h3 className="text-xl text-white font-medium">Artisanal Papers</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CallToAction 
        title="Join the Kaagazz Revolution"
        description="Be part of our sustainable movement transforming waste into beautiful paper products."
        buttonText="Get Involved"
        buttonLink="/contact"
        backgroundImage="https://images.unsplash.com/photo-1611735341450-74d61e660ad2?auto=format&fit=crop&q=80"
      />
    </div>
  );
};

export default Home;