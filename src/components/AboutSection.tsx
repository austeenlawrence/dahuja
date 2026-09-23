import React from 'react';
import { Layers, CheckCircle2, Shield, HeartHandshake, Eye, Sparkles } from 'lucide-react';
import { SHOWROOM_INFO, IMAGES } from '../data/showroomData';

export const AboutSection: React.FC = () => {
  const pillars = [
    {
      title: 'Architectural Proportions',
      description:
        'Furniture designed to balance spatial volume, natural illumination, and movement corridors in both expansive bungalows and contemporary apartments.',
    },
    {
      title: 'Material Authenticity',
      description:
        'High-density kiln-dried hardwoods, monolithic natural marbles, stain-resistant boucles, and top-grain leathers selected for enduring beauty.',
    },
    {
      title: 'The Showroom Experience',
      description:
        'We believe furniture cannot be evaluated solely on a smartphone screen. Touching fabrics, feeling foam resistance, and seeing finishes in natural light ensures confidence.',
    },
    {
      title: 'Dedicated Consultation',
      description:
        'Whether outfitting a single reading corner or an entire multi-story residence, our in-showroom specialists help harmonize textures, colors, and dimensions.',
    },
  ];

  return (
    <section id="about" className="py-20 lg:py-28 relative bg-[#030611] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Visual Composition with Master Bedroom & Dining images */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 shadow-2xl">
              <img
                src={IMAGES.bedroom}
                alt="Dahuja Furnishers Bedroom Interior Philosophy"
                referrerPolicy="no-referrer"
                className="w-full aspect-[4/3] object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent pointer-events-none" />
              <div className="p-6 bg-slate-900/90 backdrop-blur-md border-t border-slate-800">
                <span className="text-[11px] font-semibold text-blue-400 uppercase tracking-widest">
                  Our Philosophy
                </span>
                <h4 className="font-display font-bold text-lg text-white mt-1">
                  Crafting Living Sanctuaries
                </h4>
                <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                  Every home deserves furniture that anchors daily life with comfort, poise, and quiet luxury.
                </p>
              </div>
            </div>

            {/* Subtle glow accent */}
            <div className="absolute -inset-2 bg-gradient-to-tr from-blue-600/10 to-purple-600/10 rounded-2xl blur-xl -z-10" />
          </div>

          {/* Right Column: Grounded Editorial Narrative & Principles */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="text-xs font-semibold text-blue-400 uppercase tracking-widest block mb-2">
                About Dahuja Furnishers
              </span>
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight [text-wrap:balance]">
                Designed for Life. Built for Generations.
              </h2>
            </div>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              At Dahuja Furnishers in Abohar, Punjab, we curate and create furniture collections that transform living spaces into personal sanctuaries. From statement modular sofas and orthopedic sleep systems to sculptural marble dining setups and prestigious executive suites, we bridge timeless craftsmanship with modern aesthetics.
            </p>

            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
              We welcome families, architects, interior professionals, and new homeowners from Abohar, Malout, Fazilka, Sri Ganganagar, Bathinda, and neighboring regions to visit our showroom near the Railway Flyover and discover our collections firsthand.
            </p>

            {/* Core Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-4">
              {pillars.map((pillar) => (
                <div key={pillar.title} className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 space-y-1.5">
                  <h4 className="font-display font-semibold text-sm text-white flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                    <span>{pillar.title}</span>
                  </h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Direct Trust Commitment */}
            <div className="pt-2 flex items-center gap-4 text-xs text-slate-400">
              <span className="flex items-center gap-1.5 text-slate-300 font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                Physical Showroom in Abohar
              </span>
              <span aria-hidden="true">·</span>
              <span className="flex items-center gap-1.5 text-slate-300 font-medium">
                <Shield className="w-4 h-4 text-blue-400" />
                Authentic Materials & Framing
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
