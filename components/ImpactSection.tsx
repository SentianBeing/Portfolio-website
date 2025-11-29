import React from 'react';

const ImpactSection: React.FC = React.memo(() => {
  return (
    <section className="w-full bg-white py-20 md:py-32 px-6 border-b border-dashed border-gray-200">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Headline */}
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-brand-black leading-tight">
          It's about impact and cultivating <span className="text-gray-400">a legacy that transcends time.</span>
        </h2>
        
        {/* Right Description */}
        <div className="flex flex-col gap-6 md:pl-12">
           <p className="text-gray-500 leading-relaxed text-sm md:text-base">
             The products I've built with my teams at different companies helped them achieve significant growth milestones.
             I focus on creating systems that are scalable, efficient, and user-centric, ensuring long-term success.
           </p>
        </div>
      </div>
    </section>
  );
});

export default ImpactSection;