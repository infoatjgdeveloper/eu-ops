
import React from 'react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-6">
              What We Deliver <br />
              <span className="text-blue-600 underline decoration-blue-200 underline-offset-8">in the European Union</span>
            </h2>
            <p className="text-slate-600 text-lg">
              End-to-end digital solutions designed to support enterprises, startups, and public-sector organizations with scalable software and AI-driven systems.
            </p>
          </div>
          <div className="hidden lg:block">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 flex items-center gap-4">
              <div className="w-12 h-12 eu-blue text-white rounded-full flex items-center justify-center text-xl">
                <i className="fas fa-euro-sign"></i>
              </div>
              <div>
                <div className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Market Ready</div>
                <div className="text-lg font-bold text-slate-900">Enterprise Solutions</div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map((service) => (
            <div 
              key={service.id} 
              className="bg-white p-8 rounded-3xl border border-slate-200 hover:border-blue-300 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col group"
            >
              <div className="w-14 h-14 bg-slate-50 text-slate-800 rounded-2xl flex items-center justify-center text-2xl mb-8 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                <i className={`fas ${service.icon}`}></i>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">{service.title}</h3>
              <p className="text-slate-600 text-sm mb-8 leading-relaxed">
                {service.description}
              </p>
              <div className="mt-auto pt-6 border-t border-slate-100">
                <ul className="space-y-3">
                  {service.items.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-xs text-slate-500">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Digital Transformation Banner */}
        <div className="mt-16 bg-gradient-to-r from-blue-700 to-indigo-800 rounded-3xl p-10 text-white overflow-hidden relative">
          <div className="absolute right-0 top-0 w-1/3 h-full opacity-10 flex items-center justify-center pointer-events-none">
            <i className="fas fa-microchip text-[200px] -mr-20 transform -rotate-12"></i>
          </div>
          <div className="relative z-10 lg:flex items-center justify-between gap-12">
            <div className="max-w-xl">
              <h3 className="text-3xl font-bold mb-4">Enterprise & Digital Transformation</h3>
              <p className="text-blue-100 text-lg opacity-90 mb-6 lg:mb-0">
                We modernize legacy systems, automate critical processes, and perform platform re-engineering for long-term enterprise partnerships.
              </p>
            </div>
            <div className="flex-shrink-0">
              <a 
                href="#contact"
                className="inline-block px-8 py-4 bg-white text-blue-700 font-bold rounded-xl hover:bg-blue-50 transition-colors shadow-xl"
              >
                Start Transformation
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
