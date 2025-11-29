import React from 'react';
import { ArrowRight, CornerDownRight } from 'lucide-react';
import { ServiceItem } from '../types';

interface ServiceCardProps {
  service: ServiceItem;
}

const ServiceCard: React.FC<ServiceCardProps> = React.memo(({ service }) => {
  return (
    <div className="flex flex-col h-full bg-white p-8 md:p-10 relative group transition-colors duration-300">
      {/* Top Row: Icon + Tag */}
      <div className="flex justify-between items-start mb-8">
        <div className="w-12 h-12 rounded-full border border-gray-100 flex items-center justify-center bg-gray-50 transition-all duration-500 ease-out group-hover:bg-brand-yellow group-hover:scale-110 group-hover:rotate-6 group-hover:border-brand-yellow group-hover:shadow-md">
          <service.icon className="w-6 h-6 text-black transition-transform duration-500 ease-out group-hover:-rotate-6" strokeWidth={1.5} />
        </div>
        {service.tag && (
          <span 
            className={`px-3 py-1 text-xs font-bold rounded-md ${
              service.tagColor === 'yellow' ? 'bg-brand-yellow text-black' : 'bg-gray-100 text-gray-600'
            }`}
          >
            {service.tag}
          </span>
        )}
      </div>

      {/* Title */}
      <h3 className="text-xl font-bold text-black mb-4 group-hover:text-gray-900 transition-colors">{service.title}</h3>

      {/* Description */}
      <p className="text-gray-500 text-sm leading-relaxed mb-8 min-h-[60px] group-hover:text-gray-600 transition-colors">
        {service.description}
      </p>

      {/* Sub Services List */}
      <div className="grid grid-cols-2 gap-y-3 gap-x-2 mb-10">
        {service.subServices.map((sub, idx) => (
          <div 
            key={idx} 
            className="flex items-center gap-2 text-xs md:text-sm text-gray-700 font-medium transition-transform duration-300 group-hover:translate-x-1" 
            style={{ transitionDelay: `${idx * 50}ms` }}
          >
            <CornerDownRight className="w-3 h-3 text-gray-400 group-hover:text-black transition-colors" />
            {sub}
          </div>
        ))}
      </div>

      {/* CTA Button */}
      <div className="mt-auto">
        <button 
          className={`w-full py-4 rounded-full text-sm font-bold transition-all duration-300 shadow-sm hover:shadow-md active:scale-95 ${
            service.isPrimary 
              ? 'bg-gradient-to-r from-purple-500 to-orange-400 text-white hover:opacity-90' 
              : 'bg-white border border-gray-200 text-black group-hover:bg-black group-hover:text-white group-hover:border-black'
          }`}
        >
          Hire Me!
        </button>
      </div>
    </div>
  );
});

export default ServiceCard;