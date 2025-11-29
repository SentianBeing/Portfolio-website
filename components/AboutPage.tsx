import React from 'react';
import { Award, Briefcase, Heart, Coffee } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <div className="w-full bg-white animate-in fade-in duration-500">
      {/* Header Section */}
      <section className="relative w-full pt-20 pb-16 px-6 border-b border-dashed border-gray-200 bg-grid-pattern">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-50 border border-gray-100 text-xs font-medium text-gray-500 mb-6">
            <span className="w-2 h-2 rounded-full bg-brand-yellow"></span>
            About Me
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-brand-black mb-6">
            More than just <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-yellow to-orange-500">pixels.</span>
          </h1>
          <p className="text-gray-500 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
            I'm a designer who believes that great software is about the human connection. 
            Here is a glimpse into who I am beyond the screen.
          </p>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="max-w-7xl mx-auto border-x border-dashed border-gray-200">
        <div className="grid grid-cols-1 md:grid-cols-12 divide-y md:divide-y-0 md:divide-x border-dashed border-gray-200">
          
          {/* Left Column: Image & Personal Stats */}
          <div className="md:col-span-5 p-8 md:p-12 flex flex-col gap-8">
            <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden bg-gray-100 shadow-inner border border-gray-100 rotate-1 transition-transform hover:rotate-0 duration-500">
               <img 
                src="https://picsum.photos/id/433/800/1000" 
                alt="Karthik working on design projects"
                width="800"
                height="1000" 
                loading="lazy"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
               />
               <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm p-4 rounded-xl border border-gray-200/50">
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Current Focus</p>
                  <p className="text-sm font-semibold text-black">Exploring AI Interfaces & Design Systems</p>
               </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 text-center">
                <Coffee className="w-6 h-6 mx-auto mb-2 text-gray-400" />
                <div className="text-2xl font-bold text-black">1,200+</div>
                <div className="text-xs text-gray-500 font-medium">Coffees Consumed</div>
              </div>
              <div className="p-6 bg-brand-yellow rounded-2xl border border-yellow-400 text-center">
                <Award className="w-6 h-6 mx-auto mb-2 text-black" />
                <div className="text-2xl font-bold text-black">12</div>
                <div className="text-xs text-black/70 font-bold">Design Awards</div>
              </div>
            </div>
          </div>

          {/* Right Column: Bio & Experience */}
          <div className="md:col-span-7 p-8 md:p-12 bg-white">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-black text-white flex items-center justify-center text-sm">01</span>
              The Journey
            </h2>
            <div className="prose prose-gray mb-12 text-gray-500 leading-loose">
              <p className="mb-4">
                My journey began not in a design studio, but in a code editor. Understanding how things work under the hood gave me a unique perspective on how they should look and feel.
              </p>
              <p>
                Over the last 6 years, I've transitioned from a frontend developer to a full-stack product designer. I bridge the gap between engineering constraints and creative ambition. My philosophy is simple: <span className="text-black font-semibold bg-brand-yellow/30 px-1">Design is intelligence made visible.</span>
              </p>
            </div>

            <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-gray-100 text-black flex items-center justify-center text-sm">02</span>
              Experience
            </h2>

            <div className="space-y-8">
              {[
                { role: "Senior Product Designer", company: "TechFlow Inc.", year: "2021 - Present", desc: "Leading the design system team and shipping core product features." },
                { role: "UI/UX Designer", company: "Creative Agency NY", year: "2019 - 2021", desc: "Worked with 20+ startups to launch their MVPs and brand identities." },
                { role: "Frontend Developer", company: "StartUp Hub", year: "2017 - 2019", desc: "Built responsive web applications using React and Vue.js." }
              ].map((job, i) => (
                <div key={i} className="relative pl-8 border-l-2 border-dashed border-gray-200 group">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-white border-2 border-gray-300 group-hover:border-brand-yellow group-hover:bg-brand-yellow transition-colors"></div>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                    <h3 className="font-bold text-lg text-black">{job.role}</h3>
                    <span className="text-xs font-bold px-2 py-1 bg-gray-100 rounded text-gray-600">{job.year}</span>
                  </div>
                  <div className="text-sm font-medium text-gray-800 mb-1">{job.company}</div>
                  <p className="text-sm text-gray-500">{job.desc}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Philosophy Section */}
      <section className="w-full py-20 px-6 border-b border-dashed border-gray-200">
        <div className="max-w-7xl mx-auto">
           <div className="bg-black rounded-3xl p-8 md:p-16 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 p-32 bg-brand-yellow rounded-full blur-[100px] opacity-20"></div>
              
              <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-3xl font-bold mb-4">My Design Philosophy</h3>
                  <p className="text-gray-400 leading-relaxed mb-8">
                    I don't just move pixels around. I solve problems. Every design decision I make is backed by data, user research, and a deep understanding of business goals.
                  </p>
                  <button className="bg-brand-yellow text-black px-6 py-3 rounded-full font-bold hover:bg-white transition-colors">
                    Read my manifesto
                  </button>
                </div>
                <div className="grid grid-cols-2 gap-4">
                   <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-sm">
                      <Heart className="w-6 h-6 text-brand-yellow mb-3" />
                      <h4 className="font-bold mb-1">Empathy First</h4>
                      <p className="text-xs text-gray-400">Understanding the user is half the battle won.</p>
                   </div>
                   <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-sm">
                      <Briefcase className="w-6 h-6 text-brand-yellow mb-3" />
                      <h4 className="font-bold mb-1">Business Aligned</h4>
                      <p className="text-xs text-gray-400">Design must drive growth and conversion.</p>
                   </div>
                </div>
              </div>
           </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;