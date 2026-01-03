
import React, { useState } from 'react';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    type: 'client',
    country: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate submission to sales.eu@jgdeveloper.com
    console.log("Submitting to sales.eu@jgdeveloper.com:", formData);
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl font-extrabold text-slate-900 mb-8">
              Contact — <br />
              <span className="text-blue-600">European Union Team</span>
            </h2>
            <p className="text-lg text-slate-600 mb-12 leading-relaxed">
              All inquiries are routed to our EU regional headquarters. Whether you are an investor, 
              potential collaborator, or prospective client, we look forward to hearing from you.
            </p>

            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center justify-center text-blue-600">
                  <i className="fas fa-envelope"></i>
                </div>
                <div>
                  <div className="font-bold text-slate-900">Direct Contact</div>
                  <div className="text-blue-600 font-semibold">sales.eu@jgdeveloper.com</div>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center justify-center text-blue-600">
                  <i className="fas fa-building"></i>
                </div>
                <div>
                  <div className="font-bold text-slate-900">EU Operations</div>
                  <div className="text-slate-500">Delivered by IA7 Global (Germany)</div>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center justify-center text-blue-600">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <div>
                  <div className="font-bold text-slate-900">Regional Headquarters</div>
                  <div className="text-slate-500">Germany, European Union</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 lg:p-12 rounded-[32px] shadow-2xl shadow-blue-900/5 border border-slate-100 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1 bg-blue-600 h-full"></div>
            
            {submitted ? (
              <div className="text-center py-20 animate-in fade-in duration-500">
                <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center text-3xl mx-auto mb-6">
                  <i className="fas fa-check"></i>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Request Routed</h3>
                <p className="text-slate-500 mb-2">
                  Your message has been successfully sent to:
                </p>
                <div className="bg-blue-50 py-2 px-4 rounded-lg inline-block text-blue-700 font-mono text-sm mb-6">
                  sales.eu@jgdeveloper.com
                </div>
                <p className="text-slate-500 text-sm">
                  The regional EU team will respond within 24 business hours.
                </p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="mt-8 text-blue-600 font-bold hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Full Name</label>
                    <input 
                      type="text" 
                      required
                      placeholder="John Doe"
                      className="w-full bg-slate-50 border border-slate-100 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                      value={formData.name}
                      onChange={e => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Email Address</label>
                    <input 
                      type="email" 
                      required
                      placeholder="john@company.eu"
                      className="w-full bg-slate-50 border border-slate-100 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                      value={formData.email}
                      onChange={e => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                   <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Inquiry Type</label>
                    <select 
                      className="w-full bg-slate-50 border border-slate-100 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                      value={formData.type}
                      onChange={e => setFormData({...formData, type: e.target.value})}
                    >
                      <option value="client">New Client / Project</option>
                      <option value="investor">Investment Inquiry</option>
                      <option value="collaboration">Collaboration / Partnership</option>
                      <option value="career">Apply for Job</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Country</label>
                    <input 
                      type="text" 
                      placeholder="e.g. Germany"
                      className="w-full bg-slate-50 border border-slate-100 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                      value={formData.country}
                      onChange={e => setFormData({...formData, country: e.target.value})}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Company / Organization</label>
                  <input 
                    type="text" 
                    placeholder="Enter organization name"
                    className="w-full bg-slate-50 border border-slate-100 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                    value={formData.company}
                    onChange={e => setFormData({...formData, company: e.target.value})}
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Details</label>
                  <textarea 
                    rows={4}
                    placeholder="Describe your goals or requirements..."
                    className="w-full bg-slate-50 border border-slate-100 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all resize-none"
                    value={formData.message}
                    onChange={e => setFormData({...formData, message: e.target.value})}
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  className="w-full bg-blue-600 text-white font-bold py-4 rounded-xl hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/20"
                >
                  Submit to EU Team
                </button>
                <div className="text-center">
                  <p className="text-[10px] text-slate-400">
                    Routing to: <span className="text-slate-600 font-bold">sales.eu@jgdeveloper.com</span><br/>
                    All data processing is GDPR compliant and managed via IA7 Global infrastructure.
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
