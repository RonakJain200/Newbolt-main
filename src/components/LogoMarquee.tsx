import React from 'react';

const LogoMarquee: React.FC = () => {
  const logos = [
    'Amazon', 'Dribbble', 'HubSpot', 'Notion', 'Netflix', 'Zoom',
    'Amazon', 'Dribbble', 'HubSpot', 'Notion', 'Netflix', 'Zoom'
  ];

  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="relative">
        <div className="flex animate-marquee space-x-16">
          {logos.map((logo, index) => (
            <div key={index} className="flex-shrink-0 grayscale hover:grayscale-0 transition-all duration-300">
              <div className="text-2xl font-bold text-gray-400 hover:text-black transition-colors whitespace-nowrap">
                {logo}
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default LogoMarquee;