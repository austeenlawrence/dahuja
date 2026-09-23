import React, { useState } from 'react';
import { X, CheckCircle, Send, MessageSquare } from 'lucide-react';
import { SHOWROOM_INFO, FURNITURE_CATEGORIES } from '../data/showroomData';

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultProduct?: string;
  defaultCategory?: string;
}

export const EnquiryModal: React.FC<EnquiryModalProps> = ({
  isOpen,
  onClose,
  defaultProduct = '',
  defaultCategory = '',
}) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    interest: defaultCategory || defaultProduct || 'Sofas & Living Room',
    message: defaultProduct ? `I am interested in exploring ${defaultProduct} at your Abohar showroom.` : '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  if (!isOpen) return null;

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Full name is required';
    if (!formData.phone.trim() || formData.phone.length < 10) {
      errs.phone = 'Valid 10-digit phone number is required';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    // Log inquiry submission (clean structure for Formspree/backend)
    console.log('Enquiry submitted:', formData);
    setSubmitted(true);
  };

  const handleSendViaWhatsApp = () => {
    if (!validate()) return;
    const msg = `Hello Dahuja Furnishers, my name is ${formData.name}.%0APhone: ${formData.phone}%0AEmail: ${formData.email || 'N/A'}%0AInterest: ${formData.interest}%0AMessage: ${formData.message || 'Please provide details.'}`;
    window.open(`https://wa.me/${SHOWROOM_INFO.whatsappRaw}?text=${msg}`, '_blank');
    setSubmitted(true);
  };

  const resetAndClose = () => {
    setSubmitted(false);
    setFormData({
      name: '',
      phone: '',
      email: '',
      interest: 'Sofas & Living Room',
      message: '',
    });
    setErrors({});
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
      <div className="fixed inset-0 -z-10" onClick={resetAndClose} aria-hidden="true" />

      <div className="relative w-full max-w-lg rounded-xl bg-slate-900 border border-slate-700/80 shadow-2xl p-6 sm:p-8 overflow-hidden">
        {/* Glow accent */}
        <div className="absolute top-0 right-1/4 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="flex items-center justify-between pb-4 border-b border-slate-800">
          <div>
            <span className="text-[11px] font-semibold text-blue-400 tracking-wider uppercase">
              Showroom Consultation
            </span>
            <h3 className="font-display font-bold text-white text-xl mt-0.5">Enquire with Dahuja Furnishers</h3>
          </div>
          <button
            onClick={resetAndClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {submitted ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-14 h-14 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto">
              <CheckCircle className="w-8 h-8" />
            </div>
            <div>
              <h4 className="font-display font-bold text-white text-lg">Thank You, {formData.name}</h4>
              <p className="text-xs sm:text-sm text-slate-400 max-w-sm mx-auto mt-1 leading-relaxed">
                Your enquiry regarding <span className="text-slate-200">{formData.interest}</span> has been received. Our showroom executive will contact you shortly at{' '}
                <span className="text-blue-400">{formData.phone}</span>.
              </p>
            </div>
            <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={() => {
                  window.open(`https://wa.me/${SHOWROOM_INFO.whatsappRaw}?text=${encodeURIComponent(SHOWROOM_INFO.whatsappPreFill)}`, '_blank');
                }}
                className="px-4 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-medium flex items-center justify-center gap-2 transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
                Chat on WhatsApp Now
              </button>
              <button
                onClick={resetAndClose}
                className="px-4 py-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-medium transition-colors"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-5 space-y-4">
            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">
                Full Name <span className="text-rose-400">*</span>
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="e.g. Rajesh Sharma"
                className={`w-full px-3.5 py-2.5 rounded-lg bg-slate-950/70 border text-white text-sm focus:outline-none focus:border-blue-500 transition-colors ${
                  errors.name ? 'border-rose-500' : 'border-slate-800'
                }`}
              />
              {errors.name && <p className="text-rose-400 text-[11px] mt-1">{errors.name}</p>}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  Phone Number <span className="text-rose-400">*</span>
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+91 98XXX XXXXX"
                  className={`w-full px-3.5 py-2.5 rounded-lg bg-slate-950/70 border text-white text-sm focus:outline-none focus:border-blue-500 transition-colors ${
                    errors.phone ? 'border-rose-500' : 'border-slate-800'
                  }`}
                />
                {errors.phone && <p className="text-rose-400 text-[11px] mt-1">{errors.phone}</p>}
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">Email (Optional)</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="name@example.com"
                  className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950/70 border border-slate-800 text-white text-sm focus:outline-none focus:border-blue-500 transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">Furniture Interest</label>
              <select
                value={formData.interest}
                onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950/70 border border-slate-800 text-white text-sm focus:outline-none focus:border-blue-500 transition-colors"
              >
                {FURNITURE_CATEGORIES.map((cat) => (
                  <option key={cat.id} value={cat.name} className="bg-slate-900 text-white">
                    {cat.name}
                  </option>
                ))}
                <option value="Complete Home Furnishing" className="bg-slate-900 text-white">
                  Complete Home Furnishing
                </option>
                <option value="Commercial / Hotel / Office Project" className="bg-slate-900 text-white">
                  Commercial / Hotel / Office Project
                </option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">Message / Requirements</label>
              <textarea
                rows={3}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Tell us about your room size, preferred material, or timeline..."
                className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950/70 border border-slate-800 text-white text-sm focus:outline-none focus:border-blue-500 transition-colors resize-none"
              />
            </div>

            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <button
                type="submit"
                className="flex-1 py-2.5 px-4 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-medium flex items-center justify-center gap-2 transition-colors shadow-md"
              >
                <Send className="w-3.5 h-3.5" />
                Submit Enquiry
              </button>
              <button
                type="button"
                onClick={handleSendViaWhatsApp}
                className="py-2.5 px-4 rounded-lg bg-emerald-700/30 hover:bg-emerald-600/40 text-emerald-300 border border-emerald-600/40 text-xs font-medium flex items-center justify-center gap-2 transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                Send via WhatsApp
              </button>
            </div>
            <p className="text-[11px] text-slate-500 text-center">
              Direct telephone enquiries welcome at {SHOWROOM_INFO.phone}
            </p>
          </form>
        )}
      </div>
    </div>
  );
};
