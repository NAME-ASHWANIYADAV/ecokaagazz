
import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Heart } from 'lucide-react';
import { useCart } from '@/contexts/CardContext';
import { toast } from 'sonner';

interface ProductCardProps {
  id: string;
  title: string;
  price: number;
  imageSrc: string;
  category: string;
  isNew?: boolean;
  isSustainable?: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({ 
  id, 
  title, 
  price, 
  imageSrc, 
  category,
  isNew = false,
  isSustainable = true
}) => {
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    addToCart({
      id,
      title,
      price,
      imageSrc
    });
    
    toast(`${title} added to cart`);
  };

  return (
    <div className="group relative overflow-hidden rounded-lg bg-white shadow-md transition-all duration-300 hover:shadow-gold card-hover">
      <Link to={`/store/product/${id}`} className="block relative">
        <div className="aspect-square overflow-hidden">
          <img 
            src={imageSrc} 
            alt={title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {isNew && (
            <span className="bg-kaagazz-gold text-white text-xs font-bold uppercase px-3 py-1 rounded-full">
              New
            </span>
          )}
          {isSustainable && (
            <span className="bg-kaagazz-deep-green text-white text-xs font-bold uppercase px-3 py-1 rounded-full">
              Eco
            </span>
          )}
        </div>

        {/* Quick Actions */}
        <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
          <button 
            className="bg-white p-2 rounded-full shadow-md hover:bg-kaagazz-gold hover:text-white transition-colors"
            aria-label="Add to wishlist"
          >
            <Heart size={18} />
          </button>
        </div>
      </Link>

      <div className="p-4">
        <div className="text-sm text-kaagazz-gold mb-1">{category}</div>
        <Link to={`/store/product/${id}`} className="block">
          <h3 className="font-medium text-gray-900 hover:text-kaagazz-gold transition-colors line-clamp-2 h-12">
            {title}
          </h3>
        </Link>
        
        <div className="mt-3 flex items-center justify-between">
          <div className="font-semibold text-gray-900">₹{price.toLocaleString()}</div>
          
          <button 
            onClick={handleAddToCart}
            className="flex items-center justify-center bg-kaagazz-dark-brown text-white p-2 rounded-full hover:bg-kaagazz-gold transition-colors"
            aria-label="Add to cart"
          >
            <ShoppingCart size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;