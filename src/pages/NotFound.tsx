import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-kaagazz-cream py-32">
      <div className="text-center px-4">
        <div className="inline-block p-6 bg-white rounded-full mb-8 shadow-medium">
          <div className="text-8xl font-serif font-bold text-kaagazz-gold">404</div>
        </div>
        <h1 className="text-4xl font-serif font-semibold mb-4">Page Not Found</h1>
        <p className="text-xl text-gray-600 mb-8 max-w-md mx-auto">
          We're sorry, the page you requested could not be found. Please check the URL or navigate back to our homepage.
        </p>
        <Link 
          to="/" 
          className="inline-flex items-center bg-kaagazz-dark-brown hover:bg-gray-800 text-white py-3 px-6 rounded-md font-medium transition-all duration-300"
        >
          <ArrowLeft className="mr-2" size={18} />
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
