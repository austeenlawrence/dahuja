import React, { useState } from 'react';
import { Phone, MessageSquare, MapPin, Mail, Send, CheckCircle2, Clock } from 'lucide-react';
import { SHOWROOM_INFO, FURNITURE_CATEGORIES } from '../data/showroomData';

export const ContactSection: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    phone: '',
    email: '',
    interest: 'Sofas & Sectionals',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formState.name.trim()) errs.name = 'Please enter your name';
    if (!formState.phone.trim() || formState.phone.length < 10) {
      errs.phone = 'Please enter a valid 10-digit phone number';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    console.log('Contact form submitted:', formState);
    setSubmitted(true);
  };

  const handleSendWhatsApp = () => {
    if (!validate()) return;
    const msg = `Hello Dahuja Furnishers, my name is ${formState.name}.%0APhone: ${formState.phone}%0AEmail: ${formState.email || 'N/A'}%0AInterested in: ${formState.interest}%0AMessage: ${formState.message || 'I would like to enquire about furniture availability in Abohar.'}`;
    window.open(`https://wa.me/${SHOWROOM_INFO.whatsappRaw}?text=${msg}`, '_blank');
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 relative bg-[#040711] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Contact Details & Quick Links (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="text-xs font-semibold text-blue-400 uppercase tracking-widest block mb-2">
                Connect Directly
              </span>
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
                Get in Touch
              </h2>
              <p className="text-slate-400 text-xs sm:text-sm mt-2 leading-relaxed">
                Have questions about specific room dimensions, finishes, or visiting our showroom? Reach out via phone, WhatsApp, or through the enquiry form.
              </p>
            </div>

            {/* Direct Cards */}
            <div className="space-y-4">
              {/* Phone */}
              <a
                href={`tel:${SHOWROOM_INFO.phoneRaw}`}
                className="flex items-center gap-4 p-4 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-blue-500/50 transition-all group"
              >
                <div className="w-12 h-12 rounded-lg bg-blue-600/10 border border-blue-500/20 text-blue-400 flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block">
                    Direct Showroom Phone
                  </span>
                  <span className="font-display font-bold text-base sm:text-lg text-white">
                    {SHOWROOM_INFO.phone}
                  </span>
                  <span className="text-xs text-slate-400 block mt-0.5">Instant telephone assistance</span>
                </div>
              </a>

              {/* WhatsApp */}
              <button
                onClick={() => {
                  window.open(
                    `https://wa.me/${SHOWROOM_INFO.whatsappRaw}?text=${encodeURIComponent(SHOWROOM_INFO.whatsappPreFill)}`,
                    '_blank'
                  );
                }}
                className="w-full text-left flex items-center gap-4 p-4 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-emerald-500/50 transition-all group"
              >
                <div className="w-12 h-12 rounded-lg bg-emerald-600/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block">
                    WhatsApp Enquiry
                  </span>
                  <span className="font-display font-bold text-base sm:text-lg text-white">
                    {SHOWROOM_INFO.whatsapp}
                  </span>
                  <span className="text-xs text-emerald-400 block mt-0.5">Chat with our consultants</span>
                </div>
              </button>

              {/* Address */}
              <a
                href={SHOWROOM_INFO.googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-purple-500/50 transition-all group"
              >
                <div className="w-12 h-12 rounded-lg bg-purple-600/10 border border-purple-500/20 text-purple-400 flex items-center justify-center shrink-0 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block">
                    Showroom Address
                  </span>
                  <span className="text-xs sm:text-sm font-medium text-white block">
                    Near Railway Flyover, Malout Rd, Abohar, Punjab 152116
                  </span>
                  <span className="text-xs text-purple-400 block mt-0.5">Tap for Google Maps GPS Route</span>
                </div>
              </a>

              {/* Hours */}
              <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-900/40 border border-slate-800/80">
                <div className="w-12 h-12 rounded-lg bg-slate-800 text-slate-400 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div className="text-xs sm:text-sm">
                  <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block">
                    Visiting Hours
                  </span>
                  <span className="text-slate-200 font-medium block">
                    Monday – Sunday: 10:00 AM – 8:30 PM
                  </span>
                  <span className="text-slate-400 text-xs">Open 7 Days a week</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Clean Premium Lead Generation Form (7 cols) */}
          <div className="lg:col-span-7 rounded-2xl bg-slate-900 border border-slate-800 p-6 sm:p-8 shadow-2xl relative">
            <div className="border-b border-slate-800 pb-4 mb-6">
              <span className="text-[11px] font-semibold text-blue-400 uppercase tracking-wider">
                Digital Showroom Lead Desk
              </span>
              <h3 className="font-display font-bold text-xl sm:text-2xl text-white mt-1">
                Send an Enquiry
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Share your requirements and we will connect with catalog details and showroom viewing options.
              </p>
            </div>

            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-xl text-white">Enquiry Received</h4>
                  <p className="text-xs sm:text-sm text-slate-400 max-w-md mx-auto mt-2 leading-relaxed">
                    Thank you, <span className="text-slate-200">{formState.name}</span>. Our Dahuja Furnishers team will contact you at{' '}
                    <span className="text-blue-400">{formState.phone}</span> to discuss your furniture needs.
                  </p>
                </div>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormState({
                      name: '',
                      phone: '',
                      email: '',
                      interest: 'Sofas & Sectionals',
                      message: '',
                    });
                  }}
                  className="px-5 py-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-medium transition-colors"
                >
                  Send Another Enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">
                      Full Name <span className="text-rose-400">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      placeholder="e.g. Gurpreet Singh"
                      className={`w-full px-3.5 py-2.5 rounded-lg bg-slate-950/70 border text-white text-sm focus:outline-none focus:border-blue-500 transition-colors ${
                        errors.name ? 'border-rose-500' : 'border-slate-800'
                      }`}
                    />
                    {errors.name && <p className="text-rose-400 text-[11px] mt-1">{errors.name}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">
                      Phone Number <span className="text-rose-400">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      value={formState.phone}
                      onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                      placeholder="+91 98XXX XXXXX"
                      className={`w-full px-3.5 py-2.5 rounded-lg bg-slate-950/70 border text-white text-sm focus:outline-none focus:border-blue-500 transition-colors ${
                        errors.phone ? 'border-rose-500' : 'border-slate-800'
                      }`}
                    />
                    {errors.phone && <p className="text-rose-400 text-[11px] mt-1">{errors.phone}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">
                      Email Address (Optional)
                    </label>
                    <input
                      type="email"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      placeholder="name@example.com"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950/70 border border-slate-800 text-white text-sm focus:outline-none focus:border-blue-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">
                      Furniture Interest
                    </label>
                    <select
                      value={formState.interest}
                      onChange={(e) => setFormState({ ...formState, interest: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950/70 border border-slate-800 text-white text-sm focus:outline-none focus:border-blue-500 transition-colors"
                    >
                      {FURNITURE_CATEGORIES.map((cat) => (
                        <option key={cat.id} value={cat.name} className="bg-slate-900 text-white">
                          {cat.name}
                        </option>
                      ))}
                      <option value="Complete Home Package" className="bg-slate-900 text-white">
                        Complete Home Package
                      </option>
                      <option value="Hotel & Commercial Bulk" className="bg-slate-900 text-white">
                        Hotel & Commercial Bulk
                      </option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Your Requirements / Message
                  </label>
                  <textarea
                    rows={4}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    placeholder="Tell us what you are looking for (dimensions, room type, material preferences)..."
                    className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950/70 border border-slate-800 text-white text-sm focus:outline-none focus:border-blue-500 transition-colors resize-none"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <button
                    type="submit"
                    className="flex-1 py-3 px-4 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs tracking-wider uppercase flex items-center justify-center gap-2 transition-all shadow-md shadow-blue-900/30"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Submit Enquiry</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleSendWhatsApp}
                    className="py-3 px-4 rounded-lg bg-emerald-700/30 hover:bg-emerald-600/40 text-emerald-300 border border-emerald-600/40 font-semibold text-xs tracking-wider uppercase flex items-center justify-center gap-2 transition-colors"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>Send via WhatsApp</span>
                  </button>
                </div>

                <p className="text-[11px] text-slate-500 text-center">
                  All customer enquiries are handled personally by our showroom staff in Abohar.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
