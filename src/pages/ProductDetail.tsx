
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ShoppingCart, Heart } from 'lucide-react';
import { useCart } from '@/contexts/CardContext';
import { toast } from 'sonner';

// This would normally come from an API, but for demo purposes we're hardcoding the products
const productsData = [
  {
    id: 'p1',
    title: 'Premium Eco Notebook - Dotted',
    price: 299,
    imageSrc: 'https://images.unsplash.com/photo-1573223416881-88e3073d1671?auto=format&fit=crop&q=80',
    category: 'Stationery',
    isNew: true,
    description: 'Our premium eco-friendly notebook features 100 pages of high-quality recycled paper with a dotted pattern. Perfect for bullet journaling, sketching, or taking notes. The cover is made from recycled materials and features a minimalist design.',
    features: [
      '100% recycled paper',
      'Dotted pattern for versatile use',
      'Sturdy binding that lays flat when open',
      'Bookmark ribbon and elastic closure',
      'Pocket in back cover for loose papers'
    ],
    specifications: {
      dimensions: '14.8 x 21 cm (A5)',
      paperWeight: '100 GSM',
      pageCount: '100 pages (50 sheets)',
      binding: 'Sewn binding',
      cover: 'Recycled cardstock'
    }
  },
  {
    id: 'p2',
    title: 'Handmade Journal - Classic Brown',
    price: 599,
    imageSrc: 'https://images.unsplash.com/photo-1589722532875-4c5b16cd032d?auto=format&fit=crop&q=80',
    category: 'Diaries',
    description: 'Our handmade journal features premium handcrafted paper bound in a classic brown leather cover. Each journal is unique, with slight variations that showcase its handmade quality. Ideal for journaling, sketching, or as a special gift.',
    features: [
      'Handcrafted recycled paper',
      'Genuine leather cover',
      'Hand-stitched binding',
      'Blank, unlined pages',
      'Tree planted for every journal sold'
    ],
    specifications: {
      dimensions: '15 x 22 cm',
      paperWeight: '120 GSM',
      pageCount: '120 pages (60 sheets)',
      binding: 'Hand-stitched',
      cover: 'Genuine leather'
    }
  },
  {
    id: 'p3',
    title: 'Textured Drawing Pages - 180 GSM',
    price: 399,
    imageSrc: 'https://images.unsplash.com/photo-1613896640137-bb5b31496315?auto=format&fit=crop&q=80',
    category: 'Artisanal',
    isNew: true,
    description: 'Our textured drawing pages are perfect for artists who appreciate high-quality paper with character. Each sheet has a unique texture that adds depth to drawings and paintings. Made from 100% recycled materials, these pages are environmentally friendly without compromising on quality.',
    features: [
      'Unique texture for artistic depth',
      'Heavy 180 GSM paper for minimal bleed-through',
      'Works well with pencil, charcoal, and light watercolor',
      'Acid-free for archival quality',
      'Each pack supports local artisans'
    ],
    specifications: {
      dimensions: '29.7 x 42 cm (A3)',
      paperWeight: '180 GSM',
      pageCount: '25 sheets per pack',
      finish: 'Textured matte',
      material: '100% recycled cotton and hemp fibers'
    }
  },
  {
    id: 'p4',
    title: 'Corporate Branding Kit - 100 Sheets',
    price: 1299,
    imageSrc: 'https://images.unsplash.com/photo-1551592398-c320012bc1c6?auto=format&fit=crop&q=80',
    category: 'Custom',
    description: 'Elevate your corporate brand with our premium eco-friendly branding kit. Includes 100 sheets of letterhead, 50 business cards, and 25 notepads, all made from recycled materials. Custom printed with your company logo and information for a professional, sustainable business identity.',
    features: [
      'Customized with your company branding',
      'Premium printing quality',
      'Eco-friendly, recycled materials',
      'Available in various paper finishes',
      'Sustainable packaging for shipping'
    ],
    specifications: {
      contents: 'Letterhead (100), Business Cards (50), Notepads (25)',
      paperWeight: 'Letterhead: 120 GSM, Business Cards: 300 GSM, Notepads: 80 GSM',
      printing: 'Soy-based inks, full color',
      turnaround: '7-10 business days',
      minimumOrder: '1 kit'
    }
  },
  {
    id: 'p5',
    title: 'Eco-friendly Gift Box Set',
    price: 799,
    imageSrc: 'https://images.unsplash.com/photo-1577401239170-897942555fb3?auto=format&fit=crop&q=80',
    category: 'Stationery',
    description: 'Our eco-friendly gift box set is the perfect present for the eco-conscious stationery lover. The set includes a handmade notebook, a set of recycled paper pens, natural wax seals, and organic hemp twine, all packaged in a beautiful gift box made from recycled materials.',
    features: [
      'Complete gift set for stationery lovers',
      'All items made from sustainable materials',
      'Stylish, minimalist design',
      'Ready to gift in recycled packaging',
      'Supports multiple eco-initiatives'
    ],
    specifications: {
      contents: 'Notebook (1), Recycled Pens (3), Wax Seals (10), Hemp Twine (5m)',
      dimensions: 'Gift Box: 25 x 20 x 5 cm',
      materials: 'Recycled paper, plant-based plastics, natural wax, organic hemp',
      weight: '450g',
      customization: 'Add a personalized note (optional)'
    }
  },
  {
    id: 'p6',
    title: 'Leather-bound Diary with Handmade Paper',
    price: 899,
    imageSrc: 'https://images.unsplash.com/photo-1588411393236-d2524cca2184?auto=format&fit=crop&q=80',
    category: 'Diaries',
    description: 'Our leather-bound diary features premium handmade paper encased in a luxurious genuine leather cover. The paper is acid-free and fountain pen friendly, while the leather develops a beautiful patina over time. A perfect heirloom-quality journal to record your thoughts and memories.',
    features: [
      'Premium handmade paper pages',
      'Genuine leather cover that ages beautifully',
      'Refillable design for lifetime use',
      'Fountain pen friendly paper',
      'Traditional bookbinding techniques'
    ],
    specifications: {
      dimensions: '18 x 25 cm',
      paperWeight: '110 GSM',
      pageCount: '200 pages (100 sheets)',
      binding: 'Traditional Coptic stitching',
      cover: 'Full-grain vegetable-tanned leather'
    }
  },
  {
    id: 'p7',
    title: 'Watercolor Paper Pad - 300 GSM',
    price: 499,
    imageSrc: 'https://images.unsplash.com/photo-1606729913303-aca13b7f1793?auto=format&fit=crop&q=80',
    category: 'Artisanal',
    description: 'Our watercolor paper pad features 15 sheets of heavy 300 GSM paper perfect for watercolor painting. The cold-pressed surface provides ideal texture for watercolor techniques, while the acid-free composition ensures your artwork remains vibrant for years to come. Made from sustainable sources with traditional papermaking methods.',
    features: [
      'Heavy 300 GSM paper for wet media',
      'Cold-pressed texture ideal for watercolors',
      'Minimal buckling when wet',
      'Acid-free for archival quality',
      'Made using traditional methods'
    ],
    specifications: {
      dimensions: '23 x 30.5 cm',
      paperWeight: '300 GSM',
      pageCount: '15 sheets',
      finish: 'Cold-pressed',
      material: 'Cotton fiber from sustainable sources'
    }
  },
  {
    id: 'p8',
    title: 'Premium Business Cards - 100 Pack',
    price: 699,
    imageSrc: 'https://images.unsplash.com/photo-1606729913303-aca13b7f1793?auto=format&fit=crop&q=80',
    category: 'Custom',
    isNew: true,
    description: 'Make a lasting impression with our premium business cards made from recycled paper. Each card is thick and durable with a luxurious feel that sets your business apart. Customized with your logo and information, these cards are printed with eco-friendly inks and finished with a subtle matte coating.',
    features: [
      'Premium thick recycled cardstock',
      'Custom printed with your design',
      'Eco-friendly soy-based inks',
      'Elegant matte finish',
      'Comes in a reusable storage box'
    ],
    specifications: {
      dimensions: '85 x 55 mm (standard)',
      paperWeight: '350 GSM',
      quantity: '100 cards per pack',
      printing: 'Double-sided, full color',
      finish: 'Premium matte'
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
