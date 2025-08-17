import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Instagram, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  const [email, setEmail] = React.useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log('Subscribe email:', email);
    setEmail('');
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column - Company Info */}
          <div className="space-y-8">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <span className="text-black font-bold text-sm">P</span>
              </div>
              <span className="text-xl font-bold">Positivus</span>
            </div>

            {/* Contact Info */}
            <div className="bg-[#B7F12B] text-black p-6 rounded-xl">
              <h3 className="font-bold text-lg mb-4">Contact us:</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Mail size={18} />
                  <span>info@positivus.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone size={18} />
                  <span>555-567-8901</span>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin size={18} className="mt-1" />
                  <span>1234 Main St<br />Moonstone City, Stardust State 12345</span>
                </div>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex space-x-4">
              <a href="#" className="bg-white bg-opacity-10 hover:bg-opacity-20 p-3 rounded-full transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="bg-white bg-opacity-10 hover:bg-opacity-20 p-3 rounded-full transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="bg-white bg-opacity-10 hover:bg-opacity-20 p-3 rounded-full transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Right Column - Navigation & Newsletter */}
          <div className="space-y-8">
            {/* Navigation Links */}
            <div className="grid grid-cols-2 gap-8">
              <div>
                <nav className="space-y-4">
                  <a href="#about" className="block text-gray-300 hover:text-white transition-colors">About us</a>
                  <a href="#services" className="block text-gray-300 hover:text-white transition-colors">Services</a>
                  <a href="#cases" className="block text-gray-300 hover:text-white transition-colors">Use Cases</a>
                </nav>
              </div>
              <div>
                <nav className="space-y-4">
                  <a href="#pricing" className="block text-gray-300 hover:text-white transition-colors">Pricing</a>
                  <a href="#blog" className="block text-gray-300 hover:text-white transition-colors">Blog</a>
                  <a href="#privacy" className="block text-gray-300 hover:text-white transition-colors">Privacy Policy</a>
                </nav>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="bg-gray-800 p-6 rounded-xl">
              <h3 className="font-bold text-lg mb-4">Subscribe to news</h3>
              <form onSubmit={handleSubscribe} className="space-y-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                  className="w-full bg-gray-700 text-white placeholder-gray-400 px-4 py-3 rounded-xl border border-gray-600 focus:outline-none focus:border-[#B7F12B] transition-colors"
                  required
                />
                <button
                  type="submit"
                  className="w-full bg-[#B7F12B] text-black font-medium px-6 py-3 rounded-xl hover:bg-opacity-90 transition-colors"
                >
                  Subscribe to news
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
          <p>© 2025 Positivus. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;