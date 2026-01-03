
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-slate-900">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-[-10%] right-[-5%] w-[60%] h-[120%] bg-blue-600/20 rounded-full blur-[120px] transform rotate-12"></div>
        <div className="absolute bottom-[-20%] left-[-10%] w-[50%] h-[100%] bg-indigo-600/10 rounded-full blur-[100px]"></div>
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        <div className="animate-in fade-in slide-in-from-left duration-1000">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-xs font-bold uppercase tracking-widest mb-6">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
            European Union Operations
          </div>
          <h1 className="text-5xl lg:text-7xl font-extrabold text-white leading-[1.1] mb-8">
            Localized Delivery. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300">Global Standards.</span>
          </h1>
          <p className="text-xl text-slate-300 mb-10 max-w-xl leading-relaxed">
            Scalable software, AI-driven solutions, and secure digital transformation delivered across all 27 EU member states through authorized regional expertise.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#services" 
              className="px-8 py-4 bg-white text-slate-900 font-bold rounded-xl hover:bg-blue-50 transition-colors text-center shadow-lg shadow-white/5"
            >
              Explore Solutions
            </a>
            <a 
              href="#contact" 
              className="px-8 py-4 border border-white/20 text-white font-bold rounded-xl hover:bg-white/5 transition-colors text-center"
            >
              Get in Touch
            </a>
          </div>
          
          <div className="mt-12 flex items-center gap-6">
            <div className="flex -space-x-3">
              {[1,2,3,4].map(i => (
                <img 
                  key={i}
                  src={`https://picsum.photos/seed/${i + 10}/100/100`}
                  className="w-10 h-10 rounded-full border-2 border-slate-900 object-cover"
                  alt="Partner logo"
                />
              ))}
            </div>
            <div className="text-slate-400 text-sm">
              <span className="text-white font-bold">50+</span> Enterprise clients across Europe
            </div>
          </div>
        </div>

        <div className="hidden lg:block relative animate-in fade-in slide-in-from-right duration-1000 delay-200">
          <div className="relative z-10 bg-slate-800/50 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl overflow-hidden">
             <div className="flex justify-between items-center mb-6">
               <div className="flex gap-1.5">
                 <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                 <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                 <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
               </div>
               <div className="text-[10px] text-slate-500 uppercase tracking-tighter">EU Operations Dashboard</div>
             </div>
             
             <div className="space-y-6">
                <div className="h-32 bg-slate-900/50 rounded-xl border border-white/5 p-4 flex items-end gap-2">
                   {[40, 70, 45, 90, 65, 80, 55, 100].map((h, i) => (
                     <div 
                      key={i} 
                      className="flex-grow bg-blue-500/40 rounded-t-sm hover:bg-blue-400 transition-all cursor-pointer" 
                      style={{ height: `${h}%` }}
                     ></div>
                   ))}
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-slate-900/50 p-4 rounded-xl border border-white/5">
                    <div className="text-[10px] text-slate-500 uppercase mb-1">Active Projects</div>
                    <div className="text-2xl font-bold text-white">124</div>
                  </div>
                  <div className="bg-slate-900/50 p-4 rounded-xl border border-white/5">
                    <div className="text-[10px] text-slate-500 uppercase mb-1">Service Nodes</div>
                    <div className="text-2xl font-bold text-white">27</div>
                  </div>
                </div>

                <div className="p-4 bg-blue-600/10 rounded-xl border border-blue-500/20">
                   <div className="flex items-center gap-3 mb-2">
                     <i className="fas fa-lock text-blue-400 text-xs"></i>
                     <div className="text-[10px] text-blue-400 font-bold uppercase tracking-widest">GDPR Compliance Status</div>
                   </div>
                   <div className="w-full h-1.5 bg-slate-700 rounded-full overflow-hidden">
                     <div className="h-full bg-blue-500 w-[98%]"></div>
                   </div>
                </div>
             </div>
          </div>
          
          {/* Abstract floating shapes */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-500/30 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-indigo-500/20 rounded-full blur-2xl"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
