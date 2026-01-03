
import React from 'react';

const Partners: React.FC = () => {
  return (
    <section id="partnership" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900 mb-6">
            🌍 EU Regional Operating Partner
          </h2>
          <div className="h-1 w-20 bg-blue-600 mx-auto rounded-full mb-8"></div>
          <p className="text-lg text-slate-600 leading-relaxed">
            Authorized regional delivery enabled by localized expertise while maintaining JG AI's 
            global technology, security, and governance standards.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          <div className="bg-slate-50 p-10 rounded-3xl border border-slate-100 shadow-sm relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/5 rounded-full -mr-16 -mt-16 group-hover:scale-110 transition-transform"></div>
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-slate-200 rounded-full text-slate-500 text-[10px] font-bold uppercase tracking-widest mb-6">
                Authorized Regional Partner
              </div>
              <h3 className="text-4xl font-black text-slate-900 mb-2">IA7 Global</h3>
              <p className="text-blue-600 font-bold mb-6">Headquarters: Germany, European Union</p>
              
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center mt-0.5">
                    <i className="fas fa-check text-[10px] text-blue-600"></i>
                  </div>
                  <span className="text-slate-700 font-medium">Regional service delivery across 27 EU Member States</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center mt-0.5">
                    <i className="fas fa-check text-[10px] text-blue-600"></i>
                  </div>
                  <span className="text-slate-700 font-medium">Centrally governed technology frameworks</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center mt-0.5">
                    <i className="fas fa-check text-[10px] text-blue-600"></i>
                  </div>
                  <span className="text-slate-700 font-medium">GDPR aligned architecture & execution</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="space-y-8">
            <div className="flex gap-6">
              <div className="w-12 h-12 bg-indigo-50 rounded-2xl flex items-center justify-center text-indigo-600 text-xl flex-shrink-0">
                <i className="fas fa-fingerprint"></i>
              </div>
              <div>
                <h4 className="text-xl font-bold text-slate-900 mb-2">Central Governance</h4>
                <p className="text-slate-600">All intellectual property, proprietary frameworks, and AI platforms are managed within the unified JG AI ecosystem.</p>
              </div>
            </div>
            
            <div className="flex gap-6">
              <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 text-xl flex-shrink-0">
                <i className="fas fa-shield-halved"></i>
              </div>
              <div>
                <h4 className="text-xl font-bold text-slate-900 mb-2">Local Compliance</h4>
                <p className="text-slate-600">This model ensures regional compliance with global consistency, meeting the strict legal requirements of European markets.</p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="w-12 h-12 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-600 text-xl flex-shrink-0">
                <i className="fas fa-chart-line"></i>
              </div>
              <div>
                <h4 className="text-xl font-bold text-slate-900 mb-2">Quality Standards</h4>
                <p className="text-slate-600">Consistent delivery standards across all EU member states, from Austria to Sweden.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
