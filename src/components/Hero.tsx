import React from 'react';
import { ArrowDown, MessageSquare, Phone, Navigation, ArrowRight, Sparkles, MapPin } from 'lucide-react';
import { SHOWROOM_INFO, IMAGES } from '../data/showroomData';

interface HeroProps {
  onOpenBookVisit: () => void;
  onOpenEnquiry: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBookVisit, onOpenEnquiry }) => {
  const handleWhatsApp = () => {
    window.open(
      `https://wa.me/${SHOWROOM_INFO.whatsappRaw}?text=${encodeURIComponent(SHOWROOM_INFO.whatsappPreFill)}`,
      '_blank'
    );
  };

  return (
    <section className="relative min-h-[92vh] lg:min-h-screen flex items-center justify-center pt-28 pb-16 lg:py-32 overflow-hidden">
      {/* Background Atmosphere & Glow Effects */}
      <div className="absolute inset-0 -z-20 bg-[#030712]">
        {/* Subtle cinematic radial glows */}
        <div className="absolute -top-32 left-1/4 w-[600px] h-[600px] bg-blue-600/15 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute top-1/3 -right-20 w-[550px] h-[550px] bg-purple-600/12 rounded-full blur-[150px] pointer-events-none" />
        <div className="absolute -bottom-20 left-1/3 w-[500px] h-[500px] bg-fuchsia-600/10 rounded-full blur-[130px] pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Asymmetrical Editorial Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Editorial Headline & Actions */}
          <div className="lg:col-span-6 xl:col-span-5 space-y-6 z-10">
            {/* Location context tag */}
            <div className="flex items-center gap-2 text-xs font-medium text-slate-400">
              <span className="text-blue-400 font-semibold uppercase tracking-wider">Abohar Flagship</span>
              <span aria-hidden="true">·</span>
              <span className="flex items-center gap-1 text-slate-300">
                <MapPin className="w-3 h-3 text-slate-400" />
                Near Railway Flyover, Malout Rd
              </span>
            </div>

            {/* Oversized Cinematic Typography */}
            <div className="space-y-2">
              <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.08] [text-wrap:balance]">
                DEFINE YOUR <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent">SPACE.</span>
              </h1>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-xl [text-wrap:balance]">
                Welcome to Dahuja Furnishers. Discover exceptional furniture craftsmanship, sculptural living room collections, bespoke bedroom sanctuaries, and marble dining suites designed to elevate modern homes.
              </p>
            </div>

            {/* Primary & Secondary Action Cluster */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href="#categories"
                className="px-6 py-3.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs tracking-wider uppercase transition-all duration-200 shadow-lg shadow-blue-900/30 hover:shadow-blue-500/20 flex items-center gap-2"
              >
                <span>Explore Furniture</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenBookVisit}
                className="px-6 py-3.5 rounded-lg bg-slate-900/80 hover:bg-slate-800 text-slate-100 border border-slate-700 font-semibold text-xs tracking-wider uppercase transition-colors flex items-center gap-2"
              >
                <span>Visit Showroom</span>
              </button>
            </div>

            {/* Showroom Direct Reach Strip */}
            <div className="pt-4 border-t border-slate-800/80">
              <span className="text-[11px] font-medium uppercase tracking-widest text-slate-400 block mb-2.5">
                Instant Showroom Assistance
              </span>
              <div className="flex flex-wrap items-center gap-2.5">
                <button
                  onClick={handleWhatsApp}
                  className="px-3.5 py-2 rounded-md bg-emerald-600/15 hover:bg-emerald-600/25 border border-emerald-500/30 text-emerald-400 text-xs font-medium flex items-center gap-1.5 transition-colors"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>WhatsApp Enquiry</span>
                </button>

                <a
                  href={`tel:${SHOWROOM_INFO.phoneRaw}`}
                  className="px-3.5 py-2 rounded-md bg-slate-900/80 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-white text-xs font-medium flex items-center gap-1.5 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-blue-400" />
                  <span>Call {SHOWROOM_INFO.phone}</span>
                </a>

                <a
                  href={SHOWROOM_INFO.googleMapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-2 rounded-md bg-slate-900/80 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-white text-xs font-medium flex items-center gap-1.5 transition-colors"
                >
                  <Navigation className="w-3.5 h-3.5 text-purple-400" />
                  <span>Get Directions</span>
                </a>
              </div>
            </div>

            {/* Editorial Features Metadata (Zero pills, clean typography) */}
            <div className="pt-2 flex items-center gap-3 text-xs text-slate-400">
              <span>Bespoke Upholstery</span>
              <span aria-hidden="true">·</span>
              <span>Solid Hardwoods</span>
              <span aria-hidden="true">·</span>
              <span>Open 7 Days a Week</span>
            </div>
          </div>

          {/* Right Column: Large Cinematic Photorealistic Hero Frame */}
          <div className="lg:col-span-6 xl:col-span-7 relative">
            {/* Architectural Frame Container */}
            <div className="relative rounded-2xl overflow-hidden border border-slate-800/90 shadow-[0_20px_70px_rgba(0,0,0,0.85)] group">
              {/* Image with subtle hover zoom */}
              <div className="aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden bg-slate-900">
                <img
                  src={IMAGES.hero}
                  alt="Dahuja Furnishers Luxury Living Room Showcase"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center transform transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="eager"
                />
              </div>

              {/* Scrim Overlay with contrast protection */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent pointer-events-none" />

              {/* Editorial Frame Floating Badge */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-slate-950/80 backdrop-blur-md border border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-300">
                      Physical Showroom Collection
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Experience real proportions, textures, and comfort at Malout Rd, Abohar
                  </p>
                </div>
                <button
                  onClick={onOpenEnquiry}
                  className="px-3.5 py-1.5 rounded-lg bg-blue-600/30 hover:bg-blue-600/50 text-blue-300 border border-blue-500/40 text-xs font-medium whitespace-nowrap transition-colors"
                >
                  Request Consultation
                </button>
              </div>
            </div>

            {/* Atmospheric Backlight Rim */}
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-fuchsia-600/20 blur-xl -z-10 opacity-70 group-hover:opacity-100 transition-opacity duration-700" />
          </div>
        </div>
      </div>

      {/* Down Scroll Indicator */}
      <a
        href="#categories"
        className="absolute bottom-4 left-1/2 -translate-x-1/2 text-slate-500 hover:text-slate-300 transition-colors hidden md:flex flex-col items-center gap-1.5"
        aria-label="Scroll to furniture collection"
      >
        <span className="text-[10px] uppercase tracking-widest font-medium">Explore</span>
        <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
      </a>
    </section>
  );
};
