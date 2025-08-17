import React from 'react';
import { ArrowRight, Heart, Share2, Play, MapPin, Star } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <h1 className="text-4xl lg:text-6xl font-bold text-black leading-tight">
              Navigating the{' '}
              <span className="block">digital landscape</span>
              <span className="block">for success</span>
            </h1>
            
            <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
              Our digital marketing agency helps businesses grow and succeed online through a range of 
              services including SEO, PPC, social media marketing, and content creation.
            </p>

            <button className="bg-black text-white px-8 py-4 rounded-xl hover:bg-gray-800 transition-colors flex items-center space-x-2 group">
              <span>Book a consultation</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Right Illustration */}
          <div className="relative">
            <div className="relative bg-gray-50 rounded-3xl p-12 h-96 flex items-center justify-center">
              {/* Megaphone Illustration */}
              <div className="relative">
                <div className="w-32 h-32 bg-white rounded-full shadow-lg flex items-center justify-center">
                  <div className="w-16 h-16 bg-[#B7F12B] rounded-lg transform rotate-12 flex items-center justify-center">
                    <div className="w-8 h-8 bg-white rounded"></div>
                  </div>
                </div>
                
                {/* Floating Social Icons */}
                <div className="absolute -top-4 -right-4 bg-black text-white w-12 h-12 rounded-full flex items-center justify-center animate-bounce">
                  <Heart size={20} fill="white" />
                </div>
                
                <div className="absolute top-16 -right-8 bg-[#B7F12B] text-black w-12 h-12 rounded-full flex items-center justify-center animate-pulse">
                  <Share2 size={20} />
                </div>
                
                <div className="absolute -bottom-4 right-8 bg-black text-white w-12 h-12 rounded-full flex items-center justify-center">
                  <Play size={20} fill="white" />
                </div>
                
                <div className="absolute bottom-12 -left-8 bg-[#B7F12B] text-black w-12 h-12 rounded-full flex items-center justify-center animate-bounce">
                  <MapPin size={20} />
                </div>
                
                <div className="absolute top-8 -left-6 bg-black text-white w-8 h-8 rounded-full flex items-center justify-center">
                  <Star size={16} fill="white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;