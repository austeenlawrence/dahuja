import React, { useState } from 'react';
import { X, Calendar, Clock, MapPin, CheckCircle, MessageSquare } from 'lucide-react';
import { SHOWROOM_INFO, FURNITURE_CATEGORIES } from '../data/showroomData';

interface BookVisitModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BookVisitModal: React.FC<BookVisitModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    timeSlot: 'Morning (11:00 AM - 1:00 PM)',
    interest: 'Living & Bedroom Sets',
    note: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  if (!isOpen) return null;

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Please provide your name';
    if (!formData.phone.trim() || formData.phone.length < 10) {
      errs.phone = 'Please provide a valid 10-digit phone number';
    }
    if (!formData.date) errs.date = 'Please pick a preferred date';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    console.log('Showroom visit appointment booked:', formData);
    setSubmitted(true);
  };

  const handleConfirmViaWhatsApp = () => {
    if (!validate()) return;
    const msg = `Hello Dahuja Furnishers, I would like to book a showroom visit:%0AName: ${formData.name}%0APhone: ${formData.phone}%0ADate: ${formData.date}%0ATime: ${formData.timeSlot}%0AInterested in: ${formData.interest}%0ANote: ${formData.note || 'None'}`;
    window.open(`https://wa.me/${SHOWROOM_INFO.whatsappRaw}?text=${msg}`, '_blank');
    setSubmitted(true);
  };

  const resetAndClose = () => {
    setSubmitted(false);
    setFormData({
      name: '',
      phone: '',
      date: '',
      timeSlot: 'Morning (11:00 AM - 1:00 PM)',
      interest: 'Living & Bedroom Sets',
      note: '',
    });
    setErrors({});
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
      <div className="fixed inset-0 -z-10" onClick={resetAndClose} aria-hidden="true" />

      <div className="relative w-full max-w-lg rounded-xl bg-slate-900 border border-slate-700/80 shadow-2xl p-6 sm:p-8 overflow-hidden">
        {/* Ambient glow */}
        <div className="absolute top-0 right-10 w-44 h-44 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="flex items-center justify-between pb-4 border-b border-slate-800">
          <div>
            <span className="text-[11px] font-semibold text-purple-400 tracking-wider uppercase">
              Physical Showroom Experience
            </span>
            <h3 className="font-display font-bold text-white text-xl mt-0.5">Plan Your Showroom Visit</h3>
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
              <h4 className="font-display font-bold text-white text-lg">Showroom Visit Requested</h4>
              <p className="text-xs sm:text-sm text-slate-400 max-w-sm mx-auto mt-1 leading-relaxed">
                Thank you, <span className="text-slate-200">{formData.name}</span>. We look forward to welcoming you at our showroom near Railway Flyover, Malout Rd, Abohar on{' '}
                <span className="text-white font-medium">{formData.date}</span> ({formData.timeSlot}).
              </p>
            </div>
            <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={() => {
                  window.open(SHOWROOM_INFO.googleMapsDirectionsUrl, '_blank');
                }}
                className="px-4 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-medium flex items-center justify-center gap-2 transition-colors"
              >
                <MapPin className="w-4 h-4" />
                View Directions on Google Maps
              </button>
              <button
                onClick={resetAndClose}
                className="px-4 py-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-medium transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-5 space-y-4">
            <div className="p-3 rounded-lg bg-slate-950/50 border border-slate-800 flex items-start gap-2.5 text-xs text-slate-400">
              <MapPin className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
              <span>
                <strong className="text-slate-200">Showroom Location:</strong> Near Railway Flyover, Malout Rd, Abohar. Dedicated parking available on site.
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  Full Name <span className="text-rose-400">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Your Name"
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
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
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
                  Preferred Date <span className="text-rose-400">*</span>
                </label>
                <div className="relative">
                  <input
                    type="date"
                    required
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className={`w-full px-3.5 py-2.5 rounded-lg bg-slate-950/70 border text-white text-sm focus:outline-none focus:border-blue-500 transition-colors ${
                      errors.date ? 'border-rose-500' : 'border-slate-800'
                    }`}
                  />
                </div>
                {errors.date && <p className="text-rose-400 text-[11px] mt-1">{errors.date}</p>}
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">Preferred Time Slot</label>
                <select
                  value={formData.timeSlot}
                  onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950/70 border border-slate-800 text-white text-sm focus:outline-none focus:border-blue-500 transition-colors"
                >
                  <option value="Morning (10:30 AM - 1:00 PM)">Morning (10:30 AM - 1:00 PM)</option>
                  <option value="Afternoon (1:00 PM - 4:30 PM)">Afternoon (1:00 PM - 4:30 PM)</option>
                  <option value="Evening (4:30 PM - 8:00 PM)">Evening (4:30 PM - 8:00 PM)</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">Primary Furniture Interest</label>
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
                <option value="Full House Renovation / New Home" className="bg-slate-900 text-white">
                  Full House Renovation / New Home
                </option>
                <option value="Office & Commercial Projects" className="bg-slate-900 text-white">
                  Office & Commercial Projects
                </option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">Notes for Consultant (Optional)</label>
              <input
                type="text"
                value={formData.note}
                onChange={(e) => setFormData({ ...formData, note: e.target.value })}
                placeholder="Specific room dimensions, fabric preferences..."
                className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950/70 border border-slate-800 text-white text-sm focus:outline-none focus:border-blue-500 transition-colors"
              />
            </div>

            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <button
                type="submit"
                className="flex-1 py-2.5 px-4 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-medium flex items-center justify-center gap-2 transition-colors shadow-md"
              >
                <Calendar className="w-3.5 h-3.5" />
                Confirm Appointment Request
              </button>
              <button
                type="button"
                onClick={handleConfirmViaWhatsApp}
                className="py-2.5 px-4 rounded-lg bg-emerald-700/30 hover:bg-emerald-600/40 text-emerald-300 border border-emerald-600/40 text-xs font-medium flex items-center justify-center gap-2 transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                Book via WhatsApp
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
