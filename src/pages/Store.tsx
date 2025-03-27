import React, { useState } from 'react';
import Hero from '@/components/Hero';
import ProductCard from '@/components/ProductCard';
import { Filter, SlidersHorizontal } from 'lucide-react';
import { Link } from 'react-router-dom';

const Store: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [showFilters, setShowFilters] = useState(false);

  // Sample product data
  const products = [
    {
      id: 'p1',
      title: 'Premium Eco Notebook - Dotted',
      price: 299,
      imageSrc: 'https://images.unsplash.com/photo-1573223416881-88e3073d1671?auto=format&fit=crop&q=80',
      category: 'Stationery',
      isNew: true,
    },
    {
      id: 'p2',
      title: 'Handmade Journal - Classic Brown',
      price: 599,
      imageSrc: 'https://images.unsplash.com/photo-1589722532875-4c5b16cd032d?auto=format&fit=crop&q=80',
      category: 'Diaries',
    },
    {
      id: 'p3',
      title: 'Textured Drawing Pages - 180 GSM',
      price: 399,
      imageSrc: 'https://images.unsplash.com/photo-1613896640137-bb5b31496315?auto=format&fit=crop&q=80',
      category: 'Artisanal',
      isNew: true,
    },
    {
      id: 'p4',
      title: 'Corporate Branding Kit - 100 Sheets',
      price: 1299,
      imageSrc: 'https://images.unsplash.com/photo-1551592398-c320012bc1c6?auto=format&fit=crop&q=80',
      category: 'Custom',
    },
    {
      id: 'p5',
      title: 'Eco-friendly Gift Box Set',
      price: 799,
      imageSrc: 'https://images.unsplash.com/photo-1577401239170-897942555fb3?auto=format&fit=crop&q=80',
      category: 'Stationery',
    },
    {
      id: 'p6',
      title: 'Leather-bound Diary with Handmade Paper',
      price: 899,
      imageSrc: 'https://images.unsplash.com/photo-1588411393236-d2524cca2184?auto=format&fit=crop&q=80',
      category: 'Diaries',
    },
    {
      id: 'p7',
      title: 'Watercolor Paper Pad - 300 GSM',
      price: 499,
      imageSrc: 'https://images.unsplash.com/photo-1606729913303-aca13b7f1793?auto=format&fit=crop&q=80',
      category: 'Artisanal',
    },
    {
      id: 'p8',
      title: 'Premium Business Cards - 100 Pack',
      price: 699,
      imageSrc: 'https://images.unsplash.com/photo-1606729913303-aca13b7f1793?auto=format&fit=crop&q=80',
      category: 'Custom',
      isNew: true,
    },
  ];

  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'Stationery', name: 'Stationery' },
    { id: 'Diaries', name: 'Premium Diaries' },
    { id: 'Artisanal', name: 'Artisanal Pages' },
    { id: 'Custom', name: 'Print with Us' },
  ];

  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(product => product.category === activeCategory);

  return (
    <div className="min-h-screen">
      <Hero 
        title="Eco-Friendly Paper Products"
        subtitle="Discover our collection of high-quality, sustainable paper products made from organic waste."
        cta=""
        link=""
        backgroundType="image"
        backgroundSrc="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&q=80"
      />

      <section id="products" className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
            <div>
              <h2 className="text-3xl font-serif font-semibold mb-2">Our Products</h2>
              <p className="text-gray-600">Sustainable paper solutions for every need</p>
            </div>

            <div className="mt-4 md:mt-0 flex">
              <button 
                onClick={() => setShowFilters(!showFilters)}
                className="ml-3 p-2 border border-gray-300 rounded-md hover:bg-gray-100 transition-colors md:hidden"
                aria-label="Toggle filters"
              >
                <Filter size={20} />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar Filters */}
            <div className={`lg:block ${showFilters ? 'block' : 'hidden'}`}>
              <div className="bg-white rounded-lg shadow-sm p-6 sticky top-24">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-medium text-lg">Categories</h3>
                  <SlidersHorizontal size={18} className="text-gray-500" />
                </div>

                <div className="space-y-2">
                  {categories.map(category => (
                    <button
                      key={category.id}
                      onClick={() => setActiveCategory(category.id)}
                      className={`block w-full text-left px-3 py-2 rounded-md transition-colors ${
                        activeCategory === category.id
                          ? 'bg-kaagazz-gold text-white'
                          : 'hover:bg-gray-100'
                      }`}
                    >
                      {category.name}
                    </button>
                  ))}
                </div>
                
                {activeCategory === 'Custom' && (
                  <div className="mt-6 p-4 bg-kaagazz-cream rounded-lg">
                    <h3 className="font-medium text-lg mb-2">Custom Printing</h3>
                    <p className="text-gray-700 mb-4">We offer high-quality custom printing on our eco-friendly paper. Perfect for business stationery, marketing materials, and special events.</p>
                    <Link to="/contact" className="bg-kaagazz-gold text-white py-2 px-4 rounded-md inline-block hover:bg-amber-600 transition-colors">
                      Contact Us
                    </Link>
                  </div>
                )}
              </div>
            </div>

            {/* Product Grid */}
            <div className="lg:col-span-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map(product => (
                  <ProductCard
                    key={product.id}
                    id={product.id}
                    title={product.title}
                    price={product.price}
                    imageSrc={product.imageSrc}
                    category={product.category}
                    isNew={product.isNew}
                  />
                ))}
              </div>

              {/* Pagination */}
              <div className="mt-12 flex justify-center">
                <nav className="inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                  <a
                    href="#"
                    className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                  >
                    <span className="sr-only">Previous</span>
                    <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    aria-current="page"
                    className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-kaagazz-gold text-sm font-medium text-white"
                  >
                    1
                  </a>
                  <a
                    href="#"
                    className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
                  >
                    2
                  </a>
                  <a
                    href="#"
                    className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
                  >
                    3
                  </a>
                  <span className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700">
                    ...
                  </span>
                  <a
                    href="#"
                    className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
                  >
                    8
                  </a>
                  <a
                    href="#"
                    className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                  >
                    <span className="sr-only">Next</span>
                    <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                  </a>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Store;
