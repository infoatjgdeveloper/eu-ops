
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-16 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 eu-blue rounded-md flex items-center justify-center text-white font-bold text-sm">
                JG
              </div>
              <span className="text-white font-bold text-lg">JG Developer — EU Operations</span>
            </div>
            <p className="max-w-md leading-relaxed mb-8">
              Delivering global technology standards with localized German-based expertise.
              Supporting digital transformation across all 27 European Union member states.
            </p>
            {/* <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 transition-colors">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 transition-colors">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 transition-colors">
                <i className="fab fa-github"></i>
              </a>
            </div> */}
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Operations</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-blue-400 transition-colors">Software Engineering</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">AI & Intelligent Systems</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Cloud Infrastructure</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Cybersecurity</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Partnership</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-blue-400 transition-colors">IA7 Global (Germany)</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">JG AI Ecosystem</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">GDPR Compliance</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Security Consulting</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5">
          <div className="flex flex-col lg:flex-row justify-between gap-8">
            <div className="text-xs space-y-2">
              <p>JG Developer operates globally as part of the JG AI ecosystem.</p>
              <p>EU regional services are delivered by IA7 Global, an authorized regional operating partner.</p>
              <p>Partner entities are independent organizations and are not subsidiaries unless explicitly stated.</p>
              <p>All intellectual property, platforms, and core technologies are centrally governed.</p>
            </div>
            <div className="flex items-center gap-6 text-[10px] font-bold uppercase tracking-widest">
              <a href="#" className="hover:text-white transition-colors">Legal Notice</a>
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <span className="text-slate-600">© 2024 JG AI Ecosystem</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
