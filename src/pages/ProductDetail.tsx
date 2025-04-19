
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ShoppingCart, Heart } from 'lucide-react';
import { useCart } from '@/contexts/CardContext';
import { toast } from 'sonner';

// This would normally come from an API, but for demo purposes we're hardcoding the products
const productsData = [
  {
    id: 'p1',
    title: 'Stapled Notepads',
    price: 100,
    imageSrc: '/Stapled np3.png',
    category: 'Stationery',
    isNew: true,
    description: 'Compact and eco-friendly, these stapled notepads are perfect for quick notes, to-do lists, and daily planning. Made from recycled paper with a simple design for everyday use.',
    features: [
      '80 pages of recycled paper',
      'Compact and lightweight',
      'Staple binding for durability',
      'Smooth writing surface',
      'Ideal for everyday use'
    ],
    specifications: {
      dimensions: '14 x 21 cm',
      paperWeight: '80 GSM',
      pageCount: '80 pages (40 sheets)',
      binding: 'Stapled',
      cover: 'Recycled soft cover'
    }
  },
  {
    id: 'p2',
    title: 'Spiral Notepads',
    price: 150,
    imageSrc: '/Spiral np2.png',
    category: 'Stationery',
    isNew: true,
    description: 'Our spiral notepads are perfect for students and professionals. The strong wire binding allows for easy page turning, and the eco-paper ensures sustainable writing.',
    features: [
      'Wire-bound for easy flipping',
      'Eco-friendly recycled paper',
      'Available in multiple page styles',
      'Flexible cover for portability',
      'Tear-out pages with perforation'
    ],
    specifications: {
      dimensions: '15 x 22 cm',
      paperWeight: '90 GSM',
      pageCount: '100 pages (50 sheets)',
      binding: 'Spiral-bound',
      cover: 'Flexible recycled cover'
    }
  },
  {
    id: 'p4',
    title: 'A4- 200 Sheets',
    price: 300,
    imageSrc: '/A4 size sheet 1.png',
    category: 'Custom',
    description: 'A pack of 200 eco-conscious A4 sheets, perfect for printing, sketching, or professional use. Crafted from recycled fibers for sustainability without compromising quality.',
    features: [
      'Standard A4 size',
      'Compatible with all printers',
      'Smooth texture for professional finish',
      'Recycled and acid-free',
      'Ideal for office and school use'
    ],
    specifications: {
      dimensions: '21 x 29.7 cm (A4)',
      paperWeight: '80 GSM',
      pageCount: '200 sheets',
      finish: 'Smooth matte',
      material: '100% recycled paper'
    }
  },
  {
    id: 'p5',
    title: 'Seed Pencil Each',
    price: 30,
    imageSrc: '/seepd pencil 2.png',
    category: 'Stationery',
    description: 'Eco-friendly seed pencils that grow into plants after use. Made from recycled newspaper with a seed capsule at the end – a fun and sustainable writing tool.',
    features: [
      'Made from recycled newspaper',
      'Contains plantable seed capsule',
      'Safe, non-toxic materials',
      'Great for kids and adults',
      'Promotes green habits'
    ],
    specifications: {
      length: '17.5 cm',
      materials: 'Recycled newspaper, graphite core',
      seeds: 'Variety (herbs/flowers)',
      packaging: 'Biodegradable pouch',
      usage: 'Write, plant, grow!'
    }
  },
  {
    id: 'p6',
    title: 'Cork Diary',
    price: 600,
    imageSrc: '/COrk Diary 3.png',
    category: 'Diaries',
    description: 'A sustainable diary bound in natural cork material. Soft, flexible, and eco-conscious, perfect for journaling or note-taking with a touch of nature.',
    features: [
      'Natural cork cover',
      'Smooth eco-paper inside',
      'Elastic band closure',
      'Back pocket for storage',
      'Pen loop included'
    ],
    specifications: {
      dimensions: '15 x 21 cm',
      paperWeight: '100 GSM',
      pageCount: '120 pages (60 sheets)',
      binding: 'Sewn binding',
      cover: 'Natural cork'
    }
  },
  {
    id: 'p7',
    title: 'Artisanal Sheets',
    price: 499,
    imageSrc: '/sheet 3.png',
    category: 'Artisanal',
    description: 'Beautifully textured artisanal paper crafted by local artisans using traditional methods. Ideal for sketching, painting, calligraphy, or special craft projects.',
    features: [
      'Handcrafted textured finish',
      'Suitable for multiple media',
      'Eco-conscious production',
      'Adds uniqueness to artwork',
      'Supports local artisans'
    ],
    specifications: {
      dimensions: 'A4 size (21 x 29.7 cm)',
      paperWeight: '180 GSM',
      pageCount: '25 sheets',
      finish: 'Rough textured',
      material: 'Recycled cotton fibers'
    }
  },
  {
    id: 'p8',
    title: 'A3- 20 Sheets',
    price: 400,
    imageSrc: '/A4 2.png',
    category: 'Custom',
    isNew: true,
    description: 'Oversized A3 eco-paper sheets for creative projects, posters, or large-format printing. Made from sustainably sourced recycled fibers.',
    features: [
      'Large A3 format',
      'Ideal for posters & presentations',
      'Eco-friendly paper quality',
      'Works with inkjet and laser printers',
      'Smooth and durable finish'
    ],
    specifications: {
      dimensions: '29.7 x 42 cm (A3)',
      paperWeight: '100 GSM',
      pageCount: '20 sheets',
      finish: 'Smooth matte',
      material: '100% recycled wood pulp'
    }
  }
];

const ProductDetail: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();
  const { addToCart } = useCart();
  
  const product = productsData.find(p => p.id === productId);
  
  if (!product) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-semibold mb-4">Product Not Found</h1>
        <p className="mb-8">Sorry, we couldn't find the product you're looking for.</p>
        <Link 
          to="/store" 
          className="inline-flex items-center text-kaagazz-gold hover:underline"
        >
          <ArrowLeft size={16} className="mr-2" />
          Back to Store
        </Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      title: product.title,
      price: product.price,
      imageSrc: product.imageSrc
    });
    toast(`${product.title} added to cart`);
  };

  return (
    <div className="container mx-auto px-4 py-16">
      {/* Breadcrumb */}
      <div className="mb-8">
        <Link 
          to="/store" 
          className="inline-flex items-center text-kaagazz-gold hover:underline"
        >
          <ArrowLeft size={16} className="mr-2" />
          Back to Store
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Product Image */}
        <div className="relative">
          <div className="bg-white rounded-lg overflow-hidden shadow-md">
            <img 
              src={product.imageSrc} 
              alt={product.title} 
              className="w-full h-auto object-cover aspect-square"
            />
          </div>
          
          {/* Badges */}
          <div className="absolute top-4 left-4 flex flex-col gap-2">
            {product.isNew && (
              <span className="bg-kaagazz-gold text-white text-xs font-bold uppercase px-3 py-1 rounded-full">
                New
              </span>
            )}
            <span className="bg-kaagazz-deep-green text-white text-xs font-bold uppercase px-3 py-1 rounded-full">
              Eco
            </span>
          </div>
        </div>

        {/* Product Details */}
        <div>
          <div className="mb-2 text-kaagazz-gold">{product.category}</div>
          <h1 className="text-3xl font-semibold mb-4">{product.title}</h1>
          
          <div className="text-2xl font-bold mb-6">₹{product.price.toLocaleString()}</div>
          
          <p className="text-gray-700 mb-8">{product.description}</p>
          
          <div className="flex space-x-4 mb-8">
            <button
              onClick={handleAddToCart}
              className="bg-kaagazz-dark-brown hover:bg-kaagazz-gold text-white px-6 py-3 rounded-md flex items-center transition-colors"
            >
              <ShoppingCart size={20} className="mr-2" />
              Add to Cart
            </button>
            
            <button
              className="border border-gray-300 px-4 py-3 rounded-md flex items-center hover:bg-gray-50 transition-colors"
              aria-label="Add to wishlist"
            >
              <Heart size={20} />
            </button>
          </div>
          
          {/* Features */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4 text-kaagazz-dark-brown">Features</h2>
            <ul className="list-disc pl-5 space-y-2">
              {product.features.map((feature, index) => (
                <li key={index} className="text-gray-700">{feature}</li>
              ))}
            </ul>
          </div>
          
          {/* Specifications */}
          <div>
            <h2 className="text-xl font-semibold mb-4 text-kaagazz-dark-brown">Specifications</h2>
            <div className="bg-gray-50 rounded-lg p-4">
              <table className="w-full">
                <tbody>
                  {Object.entries(product.specifications).map(([key, value]) => (
                    <tr key={key} className="border-b border-gray-200 last:border-b-0">
                      <td className="py-3 font-medium capitalize">{key}</td>
                      <td className="py-3 text-gray-700">{value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
