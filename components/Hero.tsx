import React, { useState, useEffect } from 'react';
import { Phone } from 'lucide-react';

const words = ["experiences", "interfaces", "solutions", "impact", "magic"];

const Hero: React.FC = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      // Start exit animation
      setIsVisible(false);
      
      // Wait for exit animation to finish, then swap word and start enter animation
      setTimeout(() => {
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
        setIsVisible(true);
      }, 500); // This should match the duration of the CSS transition
    }, 3000); // Change word every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full pt-12 pb-20 md:pb-32 px-6 flex flex-col items-center justify-center text-center overflow-hidden bg-white border-b border-dashed border-gray-200 bg-grid-pattern">
      
      {/* Top Tags - Absolute Positioning similar to reference */}
      <div className="w-full max-w-7xl relative h-10 mb-8 md:mb-0 hidden md:block">
        {/* Left Tag */}
        <div className="absolute left-0 top-0 bg-white border border-gray-100 shadow-sm rounded-lg px-4 py-2 flex items-center gap-2 text-sm font-medium">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
          Available for work
        </div>

        {/* Right Tag */}
        <div className="absolute right-0 top-0 bg-brand-yellow rounded-lg px-4 py-2 flex items-center gap-2 text-sm font-bold shadow-sm">
          <span>🇺🇸</span> New York
        </div>
      </div>

      {/* Mobile Tags (Stacked) */}
      <div className="flex md:hidden w-full justify-between mb-8 px-2">
         <div className="bg-white border border-gray-100 shadow-sm rounded-lg px-3 py-1.5 flex items-center gap-2 text-xs font-medium">
          <span className="w-2 h-2 rounded-full bg-green-500"></span>
          Available
        </div>
        <div className="bg-brand-yellow rounded-lg px-3 py-1.5 flex items-center gap-2 text-xs font-bold">
          <span>🇺🇸</span> New York
        </div>
      </div>

      {/* Portrait */}
      <div className="relative mb-8">
        <div className="w-20 h-20 md:w-24 md:h-24 bg-brand-yellow rounded-2xl overflow-hidden flex items-end justify-center relative z-10 mx-auto transform rotate-3 shadow-lg">
           <img 
            src="https://picsum.photos/id/64/200/200" 
            alt="Portrait of Karthik DS"
            width="200"
            height="200"
            className="w-full h-full object-cover grayscale mix-blend-multiply opacity-90"
            loading="eager"
           />
        </div>
      </div>

      {/* Headline */}
      <h1 className="text-4xl md:text-7xl font-extrabold tracking-tight text-brand-black max-w-4xl leading-[1.1] mb-6">
        Creative product designer <br className="hidden md:block" />
        who creates{' '}
        <span className="inline-block relative">
            <span 
                className={`
                    inline-block bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-orange-400 to-yellow-400
                    transition-all duration-500 ease-out transform
                    ${isVisible 
                        ? 'opacity-100 translate-y-0 scale-100 blur-0' 
                        : 'opacity-0 translate-y-4 scale-95 blur-sm'
                    }
                `}
            >
                {words[currentWordIndex]}
            </span>
        </span>
      </h1>

      {/* Subtext */}
      <p className="text-gray-500 text-sm md:text-base max-w-2xl leading-relaxed mb-10 text-center">
        Currently a Senior Product Designer at New York, USA, crafting the design and user
        experience for native products. I'm passionate and creative — with a strong background in
        user experience products that meet the needs of users.
      </p>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row items-center gap-4">
        <button className="flex items-center gap-2 bg-black text-white px-8 py-4 rounded-full font-semibold hover:bg-gray-800 transition-transform hover:scale-105">
          <Phone className="w-5 h-5 fill-current" />
          Book A Free Call
        </button>
        <button className="bg-white text-black border border-gray-200 px-8 py-4 rounded-full font-semibold hover:bg-gray-50 transition-transform hover:scale-105 shadow-sm">
          See My Portfolio
        </button>
      </div>
    </section>
  );
};

export default Hero;