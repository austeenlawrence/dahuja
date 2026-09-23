import React from 'react';
import { Phone, MessageSquare, Navigation } from 'lucide-react';
import { SHOWROOM_INFO } from '../data/showroomData';

export const MobileStickyBar: React.FC = () => {
  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-slate-950/95 backdrop-blur-md border-t border-slate-800 px-3 py-2 shadow-[0_-5px_20px_rgba(0,0,0,0.8)]">
      <div className="grid grid-cols-3 gap-2 max-w-md mx-auto h-11">
        {/* CALL */}
        <a
          href={`tel:${SHOWROOM_INFO.phoneRaw}`}
          className="flex items-center justify-center gap-1.5 rounded-lg bg-slate-900 border border-slate-700/80 text-white text-xs font-semibold uppercase tracking-wider active:bg-slate-800 transition-colors"
          aria-label="Call Dahuja Furnishers"
        >
          <Phone className="w-3.5 h-3.5 text-blue-400" />
          <span>Call</span>
        </a>

        {/* WHATSAPP */}
        <a
          href={`https://wa.me/${SHOWROOM_INFO.whatsappRaw}?text=${encodeURIComponent(SHOWROOM_INFO.whatsappPreFill)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-1.5 rounded-lg bg-emerald-600 active:bg-emerald-700 text-white text-xs font-semibold uppercase tracking-wider shadow-md shadow-emerald-950/40 transition-colors"
          aria-label="WhatsApp Dahuja Furnishers"
        >
          <MessageSquare className="w-3.5 h-3.5" />
          <span>WhatsApp</span>
        </a>

        {/* DIRECTIONS */}
        <a
          href={SHOWROOM_INFO.googleMapsDirectionsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-1.5 rounded-lg bg-slate-900 border border-slate-700/80 text-white text-xs font-semibold uppercase tracking-wider active:bg-slate-800 transition-colors"
          aria-label="Get Directions to Dahuja Furnishers"
        >
          <Navigation className="w-3.5 h-3.5 text-purple-400" />
          <span>Directions</span>
        </a>
      </div>
    </div>
  );
};
