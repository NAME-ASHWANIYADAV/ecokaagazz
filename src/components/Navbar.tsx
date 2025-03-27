import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingCart } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useCart } from '@/contexts/CardContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { cartCount } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleNavClick = () => {
    setIsOpen(false);
    window.scrollTo(0, 0);
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full',
        isScrolled 
          ? 'py-3 bg-white/90 backdrop-blur-md shadow-sm' 
          : 'py-5 bg-transparent'
      )}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center" onClick={handleNavClick}>
            <div className="text-2xl font-display font-bold text-kaagazz-dark-brown tracking-wide">
              <span className="text-kaagazz-gold">K</span>AAGAZZ
            </div>
          </Link>

          <div className="hidden md:flex items-center space-x-12">
            <Link to="/community" className={cn("nav-link px-4", isActive('/community') && "active-nav-link")} onClick={handleNavClick}>
              Community
            </Link>
            <Link to="/sustainability" className={cn("nav-link px-4", isActive('/sustainability') && "active-nav-link")} onClick={handleNavClick}>
              Sustainability
            </Link>
            <Link to="/store" className={cn("nav-link px-4", isActive('/store') && "active-nav-link")} onClick={handleNavClick}>
              Store
            </Link>
            <Link to="/about" className={cn("nav-link px-4", isActive('/about') && "active-nav-link")} onClick={handleNavClick}>
              About
            </Link>
            <Link to="/contact" className={cn("nav-link px-4", isActive('/contact') && "active-nav-link")} onClick={handleNavClick}>
              Contact
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <Link to="/cart" aria-label="Shopping Cart" className="text-kaagazz-charcoal hover:text-kaagazz-gold transition-colors relative" onClick={handleNavClick}>
              <ShoppingCart size={20} />
              <span className="absolute -top-2 -right-2 bg-kaagazz-gold text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {cartCount}
              </span>
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button 
              onClick={toggleMenu}
              aria-label={isOpen ? "Close Menu" : "Open Menu"}
              className="text-kaagazz-charcoal hover:text-kaagazz-gold transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden bg-white absolute top-full left-0 w-full shadow-md animate-slide-in">
            <div className="flex flex-col space-y-4 p-4">
              <Link 
                to="/community" 
                className={cn("text-lg py-2 border-b border-gray-100", isActive('/community') && "text-kaagazz-gold")}
                onClick={handleNavClick}
              >
                Community
              </Link>
              <Link 
                to="/sustainability" 
                className={cn("text-lg py-2 border-b border-gray-100", isActive('/sustainability') && "text-kaagazz-gold")}
                onClick={handleNavClick}
              >
                Sustainability
              </Link>
              <Link 
                to="/store" 
                className={cn("text-lg py-2 border-b border-gray-100", isActive('/store') && "text-kaagazz-gold")}
                onClick={handleNavClick}
              >
                Store
              </Link>
              <Link 
                to="/about" 
                className={cn("text-lg py-2 border-b border-gray-100", isActive('/about') && "text-kaagazz-gold")}
                onClick={handleNavClick}
              >
                About
              </Link>
              <Link 
                to="/contact" 
                className={cn("text-lg py-2", isActive('/contact') && "text-kaagazz-gold")}
                onClick={handleNavClick}
              >
                Contact
              </Link>
              <div className="flex justify-end mt-4 pt-4 border-t border-gray-100">
                <Link to="/cart" aria-label="Shopping Cart" className="text-kaagazz-charcoal hover:text-kaagazz-gold transition-colors relative" onClick={handleNavClick}>
                  <ShoppingCart size={20} />
                  <span className="absolute -top-2 -right-2 bg-kaagazz-gold text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                    {cartCount}
                  </span>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;