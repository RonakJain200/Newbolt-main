import React from 'react';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">P</span>
              </div>
              <span className="text-xl font-bold text-black">Positivus</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-gray-700 hover:text-black transition-colors">About us</a>
            <a href="#services" className="text-gray-700 hover:text-black transition-colors">Services</a>
            <a href="#cases" className="text-gray-700 hover:text-black transition-colors">Use Cases</a>
            <a href="#pricing" className="text-gray-700 hover:text-black transition-colors">Pricing</a>
            <a href="#blog" className="text-gray-700 hover:text-black transition-colors">Blog</a>
            <button className="bg-white border border-gray-300 text-black px-6 py-2 rounded-xl hover:bg-gray-50 transition-colors">
              Request a quote
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-700">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              <a href="#about" className="text-gray-700 hover:text-black transition-colors">About us</a>
              <a href="#services" className="text-gray-700 hover:text-black transition-colors">Services</a>
              <a href="#cases" className="text-gray-700 hover:text-black transition-colors">Use Cases</a>
              <a href="#pricing" className="text-gray-700 hover:text-black transition-colors">Pricing</a>
              <a href="#blog" className="text-gray-700 hover:text-black transition-colors">Blog</a>
              <button className="bg-white border border-gray-300 text-black px-6 py-2 rounded-xl hover:bg-gray-50 transition-colors w-fit">
                Request a quote
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;