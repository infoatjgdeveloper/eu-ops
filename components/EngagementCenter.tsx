
import React from 'react';
import { ENGAGEMENT_TYPES } from '../constants';

const EngagementCenter: React.FC = () => {
  return (
    <section id="engagement" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-extrabold text-slate-900 mb-6">Partner With Us</h2>
          <p className="text-slate-600 text-lg">
            We are actively expanding our footprint. Choose your path to join the JG AI ecosystem in Europe.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {ENGAGEMENT_TYPES.map((type) => (
            <div 
              key={type.id}
              className="p-8 rounded-[2rem] border border-slate-100 bg-slate-50/50 hover:bg-white hover:shadow-2xl hover:shadow-blue-900/5 transition-all duration-300 group"
            >
              <div className={`w-14 h-14 ${type.color} rounded-2xl flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform`}>
                <i className={`fas ${type.icon}`}></i>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{type.title}</h3>
              <p className="text-slate-500 text-sm mb-8 leading-relaxed">
                {type.description}
              </p>
              <a 
                href="#contact"
                className="inline-flex items-center gap-2 text-blue-600 font-bold text-sm hover:gap-3 transition-all"
              >
                Get Started <i className="fas fa-arrow-right text-[10px]"></i>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EngagementCenter;
