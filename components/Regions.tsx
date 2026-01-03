
import React from 'react';
import { EU_COUNTRIES } from '../constants';

const Regions: React.FC = () => {
  return (
    <section id="regions" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-1.5 bg-yellow-50 text-yellow-700 text-xs font-black uppercase tracking-[0.2em] rounded-full mb-6">
            🇪🇺 Serving All 27 Nations
          </div>
          <h2 className="text-4xl font-extrabold text-slate-900 mb-6">
            Localized Reach. Pan-European Scale.
          </h2>
          <p className="text-slate-600">
            Our operational network ensures that whether you are based in Paris, Berlin, or Sofia, 
            you receive the same high-tier engineering standards and GDPR-compliant delivery.
          </p>
        </div>

        <div className="bg-slate-50 rounded-[40px] p-8 lg:p-16 border border-slate-100">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {EU_COUNTRIES.map((country) => (
              <div 
                key={country}
                className="bg-white py-4 px-6 rounded-2xl border border-white shadow-sm hover:shadow-md hover:border-blue-100 transition-all text-center group cursor-default"
              >
                <span className="text-sm font-semibold text-slate-700 group-hover:text-blue-600 transition-colors">
                  {country}
                </span>
              </div>
            ))}
          </div>
          
          <div className="mt-16 flex flex-wrap justify-center gap-12">
             <div className="flex items-center gap-4">
                <div className="text-3xl font-black text-blue-600">27</div>
                <div className="text-xs text-slate-500 uppercase font-bold tracking-widest leading-tight">Member States<br/>Active Presence</div>
             </div>
             <div className="flex items-center gap-4">
                <div className="text-3xl font-black text-blue-600">1</div>
                <div className="text-xs text-slate-500 uppercase font-bold tracking-widest leading-tight">Unified Delivery<br/>Framework</div>
             </div>
             <div className="flex items-center gap-4">
                <div className="text-3xl font-black text-blue-600">100%</div>
                <div className="text-xs text-slate-500 uppercase font-bold tracking-widest leading-tight">GDPR<br/>Compliance</div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Regions;
