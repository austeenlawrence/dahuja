import React from 'react';
import { MapPin, Phone, MessageSquare, Navigation, Calendar, Clock, CheckCircle2, Car } from 'lucide-react';
import { SHOWROOM_INFO, IMAGES } from '../data/showroomData';

interface ShowroomExperienceProps {
  onOpenBookVisit: () => void;
}

export const ShowroomExperience: React.FC<ShowroomExperienceProps> = ({ onOpenBookVisit }) => {
  const handleWhatsApp = () => {
    window.open(
      `https://wa.me/${SHOWROOM_INFO.whatsappRaw}?text=${encodeURIComponent(
        'Hello Dahuja Furnishers, I am planning to visit your showroom on Malout Road, Abohar.'
      )}`,
      '_blank'
    );
  };

  return (
    <section id="showroom" className="py-20 lg:py-28 relative bg-[#04060f] border-t border-slate-800/80">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-blue-700/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 pb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-blue-400 uppercase tracking-widest px-3 py-1 rounded bg-blue-600/10 border border-blue-500/20">
            <MapPin className="w-3.5 h-3.5" />
            <span>The Physical Experience</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
            Visit Our Showroom
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm leading-relaxed [text-wrap:balance]">
            Experience true scale, test seating comfort, and explore our master material library at our dedicated showroom floor near the Railway Flyover on Malout Road.
          </p>
        </div>

        {/* Main Grid: Showroom Details & Map & Photography */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left: Showroom Identity & Conversion Actions (5 cols) */}
          <div className="lg:col-span-5 rounded-2xl bg-slate-900/90 border border-slate-800 p-6 sm:p-8 flex flex-col justify-between shadow-2xl relative overflow-hidden">
            <div className="space-y-6">
              <div>
                <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-widest">
                  Flagship Destination
                </span>
                <h3 className="font-display font-bold text-2xl text-white mt-1">
                  Dahuja Furnishers
                </h3>
                <p className="text-xs text-blue-400 mt-0.5">
                  Abohar, Punjab 152116
                </p>
              </div>

              {/* Exact Address */}
              <div className="flex items-start gap-3 p-4 rounded-xl bg-slate-950/60 border border-slate-800">
                <MapPin className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                <div className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  <strong className="block text-white font-medium">Showroom Address:</strong>
                  Near Railway Flyover, Malout Rd,<br />
                  Abohar, Punjab 152116, India
                </div>
              </div>

              {/* Operating Hours */}
              <div className="flex items-start gap-3 p-4 rounded-xl bg-slate-950/60 border border-slate-800">
                <Clock className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
                <div className="text-xs sm:text-sm text-slate-300">
                  <strong className="block text-white font-medium">Visiting Hours:</strong>
                  <span>Monday – Sunday: 10:00 AM – 8:30 PM</span>
                  <span className="block text-slate-400 text-xs mt-0.5">Open all 7 days of the week</span>
                </div>
              </div>

              {/* Showroom Amenities */}
              <div className="space-y-2 pt-1 text-xs text-slate-400">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Full-scale room setups for living, bed & dining</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Direct consultation on custom timber & imported fabrics</span>
                </div>
                <div className="flex items-center gap-2">
                  <Car className="w-4 h-4 text-blue-400 shrink-0" />
                  <span>Ample dedicated customer parking on Malout Road</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-6 border-t border-slate-800/80 space-y-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a
                  href={SHOWROOM_INFO.googleMapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 px-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs tracking-wider uppercase flex items-center justify-center gap-2 transition-all shadow-md shadow-blue-900/30"
                >
                  <Navigation className="w-4 h-4" />
                  <span>Get Directions</span>
                </a>

                <button
                  onClick={onOpenBookVisit}
                  className="py-3 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-semibold text-xs tracking-wider uppercase flex items-center justify-center gap-2 transition-colors"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Visit</span>
                </button>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <a
                  href={`tel:${SHOWROOM_INFO.phoneRaw}`}
                  className="py-2.5 px-3 rounded-lg bg-slate-950 hover:bg-slate-800 border border-slate-800 text-slate-300 text-xs font-medium flex items-center justify-center gap-2 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-blue-400" />
                  <span>{SHOWROOM_INFO.phone}</span>
                </a>

                <button
                  onClick={handleWhatsApp}
                  className="py-2.5 px-3 rounded-lg bg-emerald-600/15 hover:bg-emerald-600/25 border border-emerald-500/30 text-emerald-400 text-xs font-medium flex items-center justify-center gap-2 transition-colors"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>WhatsApp Chat</span>
                </button>
              </div>
            </div>
          </div>

          {/* Right: Embedded Interactive Map + Showroom Atmosphere (7 cols) */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            {/* Showroom Atmosphere Banner */}
            <div className="relative rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 h-64 sm:h-72 group shadow-xl">
              <img
                src={IMAGES.showroom}
                alt="Dahuja Furnishers Showroom Floor Interior"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transform transition-transform duration-700 ease-out group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-slate-950/80 backdrop-blur-md border border-slate-800 flex items-center justify-between">
                <div>
                  <h4 className="text-white font-semibold text-sm">Flagship Gallery Atmosphere</h4>
                  <p className="text-xs text-slate-400">Malout Road, Abohar (Near Railway Flyover)</p>
                </div>
                <span className="text-xs text-blue-400 font-medium">Visit in Person</span>
              </div>
            </div>

            {/* Embedded Google Map */}
            <div className="relative rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 flex-1 min-h-[280px] shadow-xl">
              <iframe
                title="Dahuja Furnishers Location Map"
                src={SHOWROOM_INFO.googleMapsEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '280px', filter: 'invert(90%) hue-rotate(180deg) brightness(85%) contrast(90%)' }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="absolute top-3 right-3">
                <a
                  href={SHOWROOM_INFO.googleMapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-md bg-slate-950/90 backdrop-blur-md border border-slate-700 text-xs font-medium text-slate-200 hover:text-white flex items-center gap-1.5 shadow-md"
                >
                  <Navigation className="w-3.5 h-3.5 text-blue-400" />
                  <span>Open in Google Maps</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
