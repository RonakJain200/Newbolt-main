import React from 'react';
import { Search, MousePointer, ArrowRight } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      title: 'Search engine optimization',
      icon: <Search size={40} />,
      bgColor: 'bg-gray-100',
      textColor: 'text-black',
      iconBg: 'bg-[#B7F12B]'
    },
    {
      title: 'Pay-per-click advertising',
      icon: <MousePointer size={40} />,
      bgColor: 'bg-[#B7F12B]',
      textColor: 'text-black',
      iconBg: 'bg-white'
    }
  ];

  return (
    <section id="services" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <div className="inline-block bg-[#B7F12B] px-6 py-2 rounded-lg mb-4">
            <h2 className="text-2xl font-bold text-black">Services</h2>
          </div>
          <p className="text-lg text-gray-600 max-w-2xl">
            At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. 
            These services include:
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`${service.bgColor} rounded-3xl p-8 border border-gray-200 hover:shadow-lg transition-all duration-300 group`}
            >
              <div className="flex flex-col space-y-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className={`text-2xl font-bold ${service.textColor} mb-4`}>
                      {service.title}
                    </h3>
                  </div>
                  <div className={`${service.iconBg} p-4 rounded-lg`}>
                    {service.icon}
                  </div>
                </div>
                
                <div className="pt-8">
                  <button className={`${service.textColor} flex items-center space-x-2 group-hover:space-x-3 transition-all`}>
                    <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center">
                      <ArrowRight size={20} className="text-white" />
                    </div>
                    <span className="font-medium">Learn more</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;