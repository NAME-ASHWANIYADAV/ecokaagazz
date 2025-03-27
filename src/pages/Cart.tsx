import React from 'react';
import { useCart } from '@/contexts/CardContext';
import { Trash2, Plus, Minus, ArrowLeft, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';

const Cart: React.FC = () => {
  const { cartItems, removeFromCart, updateQuantity, clearCart, cartCount } = useCart();

  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity, 
    0
  );

  return (
    <div className="min-h-screen pt-28 pb-16">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-serif font-semibold mb-8">Your Cart</h1>

        {cartCount === 0 ? (
          <div className="flex flex-col items-center justify-center py-16 text-center">
            <ShoppingBag size={64} className="text-gray-300 mb-4" />
            <h2 className="text-2xl font-medium text-gray-700 mb-3">Your cart is empty</h2>
            <p className="text-gray-500 mb-8 max-w-md">
              Looks like you haven't added any products to your cart yet.
            </p>
            <Link 
              to="/store" 
              className="bg-kaagazz-gold text-white px-6 py-3 rounded-md hover:bg-amber-600 transition-colors flex items-center"
            >
              <ArrowLeft size={18} className="mr-2" />
              Continue Shopping
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-6">
                <div className="p-4 sm:p-6 border-b">
                  <div className="flex justify-between items-center">
                    <h2 className="text-lg font-medium">Shopping Cart ({cartCount} items)</h2>
                    <button 
                      onClick={clearCart}
                      className="text-sm text-red-500 hover:text-red-700 flex items-center"
                    >
                      <Trash2 size={16} className="mr-1" />
                      Clear Cart
                    </button>
                  </div>
                </div>

                <div className="divide-y divide-gray-200">
                  {cartItems.map((item) => (
                    <div key={item.id} className="p-4 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center">
                      <div className="w-full sm:w-20 h-20 flex-shrink-0 mb-4 sm:mb-0 sm:mr-6">
                        <img 
                          src={item.imageSrc} 
                          alt={item.title} 
                          className="w-full h-full object-cover rounded"
                        />
                      </div>

                      <div className="flex-grow">
                        <h3 className="font-medium text-gray-900 mb-1">{item.title}</h3>
                        <p className="text-sm text-gray-500 mb-4">₹{item.price.toLocaleString()} per item</p>
                        
                        <div className="flex justify-between items-center">
                          <div className="flex items-center border rounded-md">
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="p-2 text-gray-600 hover:text-gray-900"
                              aria-label="Decrease quantity"
                            >
                              <Minus size={16} />
                            </button>
                            <span className="px-3 py-1">{item.quantity}</span>
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="p-2 text-gray-600 hover:text-gray-900"
                              aria-label="Increase quantity"
                            >
                              <Plus size={16} />
                            </button>
                          </div>
                          
                          <div className="flex items-center">
                            <span className="font-medium mr-4">
                              ₹{(item.price * item.quantity).toLocaleString()}
                            </span>
                            <button
                              onClick={() => removeFromCart(item.id)}
                              className="text-red-500 hover:text-red-700"
                              aria-label="Remove item"
                            >
                              <Trash2 size={18} />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <Link 
                to="/store" 
                className="inline-flex items-center text-kaagazz-dark-brown hover:text-kaagazz-gold"
              >
                <ArrowLeft size={18} className="mr-2" />
                Continue Shopping
              </Link>
            </div>

            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-sm p-6 sticky top-24">
                <h3 className="text-lg font-medium mb-4">Order Summary</h3>
                
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Subtotal ({cartCount} items)</span>
                    <span>₹{totalAmount.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Shipping</span>
                    <span>Free</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Tax</span>
                    <span>₹{(totalAmount * 0.18).toLocaleString()}</span>
                  </div>
                </div>
                
                <div className="border-t pt-4 mb-6">
                  <div className="flex justify-between font-medium text-base">
                    <span>Total</span>
                    <span>₹{(totalAmount + (totalAmount * 0.18)).toLocaleString()}</span>
                  </div>
                </div>
                
                <button className="w-full bg-kaagazz-gold text-white py-3 rounded-md hover:bg-amber-600 transition-colors">
                  Proceed to Checkout
                </button>
                
                <p className="text-xs text-gray-500 mt-4 text-center">
                  By proceeding, you agree to our terms and conditions.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
