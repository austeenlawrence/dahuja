import React from 'react';
import { BrandLogo } from './BrandLogo';
import { Phone, MessageSquare, MapPin, Instagram, Facebook, Youtube, ArrowUp } from 'lucide-react';
import { SHOWROOM_INFO } from '../data/showroomData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-800/90 text-slate-400 text-xs relative overflow-hidden">
      {/* Subtle atmospheric glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-32 bg-blue-600/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          {/* Col 1: Brand & Philosophy (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <BrandLogo size="md" />
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-sm">
              Abohar’s destination showroom for luxury furniture, bespoke upholstered seating, marble dining suites, and architectural interior pieces.
            </p>
            <div className="pt-2 flex items-center gap-3">
              {SHOWROOM_INFO.socialMedia.instagram && (
                <a
                  href={SHOWROOM_INFO.socialMedia.instagram}
                  aria-label="Dahuja Furnishers on Instagram"
                  className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-slate-700 transition-colors"
                >
                  <Instagram className="w-4 h-4" />
                </a>
              )}
              {SHOWROOM_INFO.socialMedia.facebook && (
                <a
                  href={SHOWROOM_INFO.socialMedia.facebook}
                  aria-label="Dahuja Furnishers on Facebook"
                  className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-slate-700 transition-colors"
                >
                  <Facebook className="w-4 h-4" />
                </a>
              )}
              {SHOWROOM_INFO.socialMedia.youtube && (
                <a
                  href={SHOWROOM_INFO.socialMedia.youtube}
                  aria-label="Dahuja Furnishers on YouTube"
                  className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-slate-700 transition-colors"
                >
                  <Youtube className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>

          {/* Col 2: Navigation Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <span className="text-[11px] font-semibold text-white uppercase tracking-widest block">
              Navigation
            </span>
            <ul className="space-y-2">
              <li>
                <a href="#categories" className="hover:text-white transition-colors">
                  Furniture Categories
                </a>
              </li>
              <li>
                <a href="#showcase" className="hover:text-white transition-colors">
                  Featured Highlights
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-white transition-colors">
                  Showroom Gallery
                </a>
              </li>
              <li>
                <a href="#showroom" className="hover:text-white transition-colors">
                  Visit Showroom
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Categories (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <span className="text-[11px] font-semibold text-white uppercase tracking-widest block">
              Furniture Collections
            </span>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2">
              <a href="#categories" className="hover:text-white transition-colors">Sofas & Couches</a>
              <a href="#categories" className="hover:text-white transition-colors">Beds & Mattresses</a>
              <a href="#categories" className="hover:text-white transition-colors">Marble Dining</a>
              <a href="#categories" className="hover:text-white transition-colors">Recliners</a>
              <a href="#categories" className="hover:text-white transition-colors">Wardrobes</a>
              <a href="#categories" className="hover:text-white transition-colors">Cabinets</a>
              <a href="#categories" className="hover:text-white transition-colors">Executive Office</a>
              <a href="#categories" className="hover:text-white transition-colors">Accent Décor</a>
            </div>
          </div>

          {/* Col 4: Showroom Hub (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <span className="text-[11px] font-semibold text-white uppercase tracking-widest block">
              Showroom Hub
            </span>
            <div className="space-y-2 text-xs text-slate-400">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span>Near Railway Flyover, Malout Rd, Abohar, Punjab 152116</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-blue-400 shrink-0" />
                <a href={`tel:${SHOWROOM_INFO.phoneRaw}`} className="hover:text-white">
                  {SHOWROOM_INFO.phone}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-emerald-400 shrink-0" />
                <a
                  href={`https://wa.me/${SHOWROOM_INFO.whatsappRaw}?text=${encodeURIComponent(SHOWROOM_INFO.whatsappPreFill)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-400"
                >
                  WhatsApp: {SHOWROOM_INFO.whatsapp}
                </a>
              </p>
              <p className="text-[11px] text-slate-500 pt-1">
                Mon – Sun: 10:00 AM – 8:30 PM (All 7 Days)
              </p>
            </div>
          </div>
        </div>

        {/* Local SEO keywords & Region Presence */}
        <div className="py-6 border-b border-slate-900 text-[11px] text-slate-400 leading-relaxed">
          <strong className="text-slate-300 font-medium">Serving: </strong>
          Abohar · Malout · Fazilka · Sri Ganganagar · Bathinda · Muktsar · Balluana · Khuyian Sarwar and surrounding Punjab & Rajasthan borders. Premier luxury furniture showroom near Railway Flyover, Malout Road.
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-400 text-xs">
            © {new Date().getFullYear()} Dahuja Furnishers. All rights reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-white transition-colors"
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
