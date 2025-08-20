import { ReactNode, useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { X, Menu } from "lucide-react";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity flex-shrink-0">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F458d8971621b44e090fa8e7ceb42c17c%2Fbbb00bfa31b840a090434e43b046de05?format=webp&width=800"
                alt="GreenVolt EV Hub"
                className="h-10 w-10 rounded-full"
              />
              <div className="hidden sm:block">
                <h1 className="text-xl font-bold text-greenvolt-black">GreenVolt EV Hub</h1>
                <p className="text-xs text-gray-600">Mahesana, Gujarat</p>
              </div>
              <div className="sm:hidden">
                <h1 className="text-lg font-bold text-greenvolt-black">GreenVolt</h1>
              </div>
            </Link>
            
            {/* Navigation Links */}
            <div className="hidden md:flex lg:space-x-8 md:space-x-6">
              <Link
                to="/"
                className={`py-2 px-1 transition-colors font-medium ${
                  isActive('/')
                    ? 'text-greenvolt-green border-b-2 border-greenvolt-green'
                    : 'text-gray-700 hover:text-greenvolt-green'
                }`}
              >
                Home
              </Link>
              <Link
                to="/about"
                className={`py-2 px-1 transition-colors font-medium ${
                  isActive('/about')
                    ? 'text-greenvolt-green border-b-2 border-greenvolt-green'
                    : 'text-gray-700 hover:text-greenvolt-green'
                }`}
              >
                About
              </Link>
              <Link
                to="/vehicles"
                className={`py-2 px-1 transition-colors font-medium ${
                  isActive('/vehicles')
                    ? 'text-greenvolt-green border-b-2 border-greenvolt-green'
                    : 'text-gray-700 hover:text-greenvolt-green'
                }`}
              >
                Vehicles
              </Link>
              <Link
                to="/why-choose-us"
                className={`py-2 px-1 transition-colors font-medium whitespace-nowrap ${
                  isActive('/why-choose-us')
                    ? 'text-greenvolt-green border-b-2 border-greenvolt-green'
                    : 'text-gray-700 hover:text-greenvolt-green'
                }`}
              >
                Why Choose Us
              </Link>
              <Link
                to="/contact"
                className={`py-2 px-1 transition-colors font-medium ${
                  isActive('/contact')
                    ? 'text-greenvolt-green border-b-2 border-greenvolt-green'
                    : 'text-gray-700 hover:text-greenvolt-green'
                }`}
              >
                Contact
              </Link>
            </div>


            {/* CTA Button */}
            <div className="flex items-center space-x-4">
              <Link to="/contact" className="hidden lg:block">
                <Button className="bg-greenvolt-green hover:bg-greenvolt-green-dark text-white px-6 py-2">
                  Visit Showroom
                </Button>
              </Link>

              {/* Mobile Menu Button */}
              <div className="md:hidden">
                <button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="text-gray-700 hover:text-greenvolt-green transition-colors p-2 rounded-md hover:bg-gray-100"
                  aria-label="Toggle mobile menu"
                >
                  {isMobileMenuOpen ? (
                    <X className="h-6 w-6" />
                  ) : (
                    <Menu className="h-6 w-6" />
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          <div className={`md:hidden absolute top-full left-0 w-full bg-white border-t border-gray-200 shadow-xl transition-all duration-300 ease-in-out z-50 ${
            isMobileMenuOpen
              ? 'opacity-100 translate-y-0 visible'
              : 'opacity-0 -translate-y-4 invisible'
          }`}>
            <div className="px-6 py-6 space-y-2 max-h-96 overflow-y-auto">
              <Link
                to="/"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`flex items-center px-4 py-3 rounded-xl text-base font-medium transition-all duration-200 ${
                  isActive('/')
                    ? 'text-greenvolt-green bg-greenvolt-green/10 border-l-4 border-greenvolt-green shadow-sm'
                    : 'text-gray-700 hover:text-greenvolt-green hover:bg-gray-50'
                }`}
              >
                Home
              </Link>
              <Link
                to="/about"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`flex items-center px-4 py-3 rounded-xl text-base font-medium transition-all duration-200 ${
                  isActive('/about')
                    ? 'text-greenvolt-green bg-greenvolt-green/10 border-l-4 border-greenvolt-green shadow-sm'
                    : 'text-gray-700 hover:text-greenvolt-green hover:bg-gray-50'
                }`}
              >
                About
              </Link>
              <Link
                to="/vehicles"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`flex items-center px-4 py-3 rounded-xl text-base font-medium transition-all duration-200 ${
                  isActive('/vehicles')
                    ? 'text-greenvolt-green bg-greenvolt-green/10 border-l-4 border-greenvolt-green shadow-sm'
                    : 'text-gray-700 hover:text-greenvolt-green hover:bg-gray-50'
                }`}
              >
                Vehicles
              </Link>
              <Link
                to="/why-choose-us"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`flex items-center px-4 py-3 rounded-xl text-base font-medium transition-all duration-200 ${
                  isActive('/why-choose-us')
                    ? 'text-greenvolt-green bg-greenvolt-green/10 border-l-4 border-greenvolt-green shadow-sm'
                    : 'text-gray-700 hover:text-greenvolt-green hover:bg-gray-50'
                }`}
              >
                Why Choose Us
              </Link>
              <Link
                to="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`flex items-center px-4 py-3 rounded-xl text-base font-medium transition-all duration-200 ${
                  isActive('/contact')
                    ? 'text-greenvolt-green bg-greenvolt-green/10 border-l-4 border-greenvolt-green shadow-sm'
                    : 'text-gray-700 hover:text-greenvolt-green hover:bg-gray-50'
                }`}
              >
                Contact
              </Link>
              <div className="pt-4 mt-4 border-t border-gray-200">
                <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button className="bg-greenvolt-green hover:bg-greenvolt-green-dark text-white w-full py-4 rounded-xl font-semibold text-lg shadow-lg">
                    Visit Showroom
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main>{children}</main>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <Link to="/" className="flex items-center space-x-3 mb-4 hover:opacity-80 transition-opacity">
                <img 
                  src="https://cdn.builder.io/api/v1/image/assets%2F458d8971621b44e090fa8e7ceb42c17c%2Fbbb00bfa31b840a090434e43b046de05?format=webp&width=800" 
                  alt="GreenVolt EV Hub" 
                  className="h-10 w-10 rounded-full"
                />
                <div>
                  <h3 className="text-xl font-bold text-white">GreenVolt EV Hub</h3>
                  <p className="text-gray-400 text-sm">Mahesana, Gujarat</p>
                </div>
              </Link>
              <p className="text-gray-400 mb-4">
                Leading the electric revolution in Gujarat with sustainable, stylish, and reliable electric vehicles.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
              <div className="space-y-2">
                <Link to="/about" className="block text-gray-400 hover:text-greenvolt-green transition-colors">About Us</Link>
                <Link to="/vehicles" className="block text-gray-400 hover:text-greenvolt-green transition-colors">Our Vehicles</Link>
                <Link to="/why-choose-us" className="block text-gray-400 hover:text-greenvolt-green transition-colors">Why Choose Us</Link>
                <Link to="/contact" className="block text-gray-400 hover:text-greenvolt-green transition-colors">Contact</Link>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Contact Info</h4>
              <div className="space-y-3 text-gray-400">
                <div className="flex items-center space-x-3">
                  <FontAwesomeIcon icon={faMapMarkerAlt} className="h-4 w-4 text-greenvolt-green flex-shrink-0" />
                  <span>10 Dediyasan GIDC, Mahesana</span>
                </div>
                <div className="flex items-center space-x-3">
                  <FontAwesomeIcon icon={faPhone} className="h-4 w-4 text-greenvolt-green flex-shrink-0" />
                  <span>97123 04660</span>
                </div>
                <div className="flex items-center space-x-3">
                  <FontAwesomeIcon icon={faPhone} className="h-4 w-4 text-greenvolt-green flex-shrink-0" />
                  <span>99044 51950</span>
                </div>
                <div className="flex items-center space-x-3">
                  <FontAwesomeIcon icon={faEnvelope} className="h-4 w-4 text-greenvolt-green flex-shrink-0" />
                  <span>info@greenvolthub.com</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © 2024 GreenVolt EV Hub. All rights reserved. | Electric Vehicles in Mahesana | EV Showroom Gujarat
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
