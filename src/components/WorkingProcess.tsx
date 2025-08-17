import React from 'react';
import { Plus, Minus } from 'lucide-react';

const WorkingProcess: React.FC = () => {
  const [expandedItem, setExpandedItem] = React.useState<number>(0);

  const processSteps = [
    {
      number: '01',
      title: 'Consultation',
      description: 'During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.'
    },
    {
      number: '02',
      title: 'Research and Strategy Development',
      description: 'We conduct thorough market research and develop a comprehensive strategy tailored to your business needs and target audience.'
    },
    {
      number: '03',
      title: 'Implementation',
      description: 'Our team implements the strategic plan with precision, ensuring all elements work together seamlessly to achieve your goals.'
    },
    {
      number: '04',
      title: 'Monitoring and Optimization',
      description: 'We continuously monitor performance and make data-driven optimizations to ensure maximum ROI and sustained growth.'
    },
    {
      number: '05',
      title: 'Reporting and Communication',
      description: 'Regular reporting and transparent communication keep you informed about progress and results throughout the entire process.'
    }
  ];

  const toggleItem = (index: number) => {
    setExpandedItem(expandedItem === index ? -1 : index);
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <div className="inline-block bg-[#B7F12B] px-6 py-2 rounded-lg mb-4">
            <h2 className="text-2xl font-bold text-black">Our Working Process</h2>
          </div>
          <p className="text-lg text-gray-600">
            Step-by-Step Guide to Achieving Your Business Goals
          </p>
        </div>

        <div className="space-y-6">
          {processSteps.map((step, index) => (
            <div
              key={index}
              className={`border border-gray-200 rounded-3xl transition-all duration-300 ${
                expandedItem === index ? 'bg-[#B7F12B]' : 'bg-gray-50'
              }`}
            >
              <button
                onClick={() => toggleItem(index)}
                className="w-full p-6 flex items-center justify-between text-left"
              >
                <div className="flex items-center space-x-6">
                  <span className="text-3xl font-bold text-black">
                    {step.number}
                  </span>
                  <h3 className="text-xl font-semibold text-black">
                    {step.title}
                  </h3>
                </div>
                <div className="flex-shrink-0 w-10 h-10 bg-white rounded-full flex items-center justify-center">
                  {expandedItem === index ? (
                    <Minus size={20} className="text-black" />
                  ) : (
                    <Plus size={20} className="text-black" />
                  )}
                </div>
              </button>
              
              {expandedItem === index && (
                <div className="px-6 pb-6">
                  <div className="pl-20 pr-16">
                    <p className="text-black text-base leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkingProcess;