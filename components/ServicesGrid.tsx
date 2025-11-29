import React from 'react';
import { PenTool, Lightbulb, Code } from 'lucide-react';
import ServiceCard from './ServiceCard';
import { ServiceItem } from '../types';

// Static data defined outside component to prevent recreation on re-renders
const services: ServiceItem[] = [
  {
    icon: PenTool,
    title: 'UI/UX Design',
    description: 'Our web design your brand and boosts user retention growth milestones.',
    subServices: ['User Research', 'Graphic Design', 'Branding', 'Website Design', 'Visual Design', '3D assets'],
    tag: 'Figma',
    tagColor: 'yellow',
    isPrimary: true
  },
  {
    icon: Lightbulb,
    title: 'AI Strategy',
    description: 'AI Strategy service is designed to align your business goals with the right technologies.',
    subServices: ['AI guidelines', 'Proof of concept', 'Ideation', 'Data governance', 'AI Support', 'Business'],
    tag: 'Webflow',
    tagColor: 'yellow'
  },
  {
    icon: Code,
    title: 'Webflow Development',
    description: 'Build fast, responsive, and fully custom websites using Webflow.',
    subServices: ['CMS', 'Responsive', 'Web Design', 'SEO Optimization', 'E-commerce', 'Client Training'],
    tag: 'ChatGPT',
    tagColor: 'white'
  }
];

const ServicesGrid: React.FC = React.memo(() => {
  return (
    <section className="w-full bg-white border-b border-dashed border-gray-200">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x border-dashed border-gray-200">
        {services.map((service, index) => (
          <div key={index} className="w-full border-r-0 border-dashed border-gray-200 last:border-r-0">
             <ServiceCard service={service} />
          </div>
        ))}
      </div>
    </section>
  );
});

export default ServicesGrid;