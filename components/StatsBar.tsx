import React from 'react';
import { Layers, Users, MessageSquare } from 'lucide-react';
import { StatItem } from '../types';

const stats: StatItem[] = [
  { icon: Layers, text: "Expert in Web Design" },
  { icon: Users, text: "Loved by 20+ Agencies" },
  { icon: MessageSquare, text: "Clear Communication" },
];

const StatsBar: React.FC = React.memo(() => {
  return (
    <div className="w-full border-b border-dashed border-gray-200 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x border-dashed border-gray-200">
        {stats.map((stat, index) => (
          <div key={index} className="flex items-center justify-center gap-3 py-8 px-4">
            <stat.icon className="w-6 h-6 text-gray-700" strokeWidth={1.5} />
            <span className="font-semibold text-gray-900 text-sm md:text-base">{stat.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
});

export default StatsBar;