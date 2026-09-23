import React, { useState } from 'react';
import { ArrowUpRight, MessageSquare, Compass, Sparkles } from 'lucide-react';
import { FURNITURE_CATEGORIES, FurnitureCategory, SHOWROOM_INFO } from '../data/showroomData';

interface CategoriesSectionProps {
  onSelectCategory: (categoryName: string) => void;
}

export const CategoriesSection: React.FC<CategoriesSectionProps> = ({ onSelectCategory }) => {
  const [activeCategoryId, setActiveCategoryId] = useState<string>(FURNITURE_CATEGORIES[0].id);

  const activeCategory =
    FURNITURE_CATEGORIES.find((c) => c.id === activeCategoryId) || FURNITURE_CATEGORIES[0];

  const handleCategoryWhatsApp = (category: FurnitureCategory) => {
    const text = encodeURIComponent(
      `Hello Dahuja Furnishers, I would like to explore your ${category.name} collection at your Abohar showroom.`
    );
    window.open(`https://wa.me/${SHOWROOM_INFO.whatsappRaw}?text=${text}`, '_blank');
  };

  return (
    <section id="categories" className="py-20 lg:py-28 relative overflow-hidden bg-slate-950/70 border-t border-slate-800/80">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 -left-48 w-96 h-96 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Editorial Rhythm */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-slate-800">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-blue-400 uppercase tracking-widest mb-2">
              <Compass className="w-3.5 h-3.5" />
              <span>Curation by Space</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
              Furniture Collections
            </h2>
          </div>
          <p className="text-slate-400 text-xs sm:text-sm max-w-md leading-relaxed [text-wrap:balance]">
            From handcrafted living ensembles to monolithic marble dining sets, explore our extensive physical showroom selection in Abohar.
          </p>
        </div>

        {/* Asymmetrical Editorial Showcase (Featured interactive spotlight + category list) */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Category Navigation Rail with active state */}
          <div className="lg:col-span-5 space-y-1.5 max-h-[580px] overflow-y-auto pr-2 custom-scrollbar">
            {FURNITURE_CATEGORIES.map((cat, index) => {
              const isActive = cat.id === activeCategoryId;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategoryId(cat.id)}
                  className={`w-full text-left p-4 rounded-xl transition-all duration-200 group flex items-center justify-between border ${
                    isActive
                      ? 'bg-slate-900 border-blue-500/50 shadow-lg shadow-blue-950/40 text-white'
                      : 'bg-slate-950/40 hover:bg-slate-900/60 border-slate-800/80 text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <div className="min-w-0 pr-3">
                    <div className="flex items-center gap-2">
                      <span className={`text-[10px] font-mono tracking-wider ${isActive ? 'text-blue-400' : 'text-slate-600'}`}>
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <span className={`text-xs uppercase tracking-wider ${isActive ? 'text-blue-400' : 'text-slate-500'}`}>
                        {cat.tagline}
                      </span>
                    </div>
                    <h3 className="font-display font-semibold text-base sm:text-lg mt-0.5 truncate text-white">
                      {cat.name}
                    </h3>
                  </div>

                  <div className="shrink-0 flex items-center">
                    <span
                      className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                        isActive
                          ? 'bg-blue-600 text-white'
                          : 'bg-slate-800/80 text-slate-500 group-hover:text-slate-300'
                      }`}
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right: Immersive Editorial Spotlight for Selected Category */}
          <div className="lg:col-span-7">
            <div className="relative rounded-2xl overflow-hidden bg-slate-900 border border-slate-800/90 shadow-2xl flex flex-col group">
              {/* Category Imagery */}
              <div className="aspect-[16/10] w-full overflow-hidden relative">
                <img
                  src={activeCategory.image}
                  alt={activeCategory.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transform transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />

                {/* Subtle top tag */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-md bg-slate-950/80 backdrop-blur-md border border-slate-700 text-xs font-semibold text-blue-300">
                    {activeCategory.tagline}
                  </span>
                </div>
              </div>

              {/* Category Details & Actions */}
              <div className="p-6 sm:p-8 bg-slate-900/90 backdrop-blur-md space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-4">
                  <div>
                    <h3 className="font-display font-bold text-2xl sm:text-3xl text-white">
                      {activeCategory.name}
                    </h3>
                    <p className="text-xs text-blue-400 mt-0.5">{activeCategory.itemCountDesc}</p>
                  </div>
                  <span className="text-xs text-slate-400">
                    Abohar Showroom Display
                  </span>
                </div>

                <p className="text-sm text-slate-300 leading-relaxed">
                  {activeCategory.description}
                </p>

                <div className="pt-2 flex flex-wrap items-center gap-3">
                  <button
                    onClick={() => handleCategoryWhatsApp(activeCategory)}
                    className="px-5 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-medium text-xs flex items-center gap-2 transition-colors shadow-sm"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>Enquire {activeCategory.name} on WhatsApp</span>
                  </button>

                  <button
                    onClick={() => onSelectCategory(activeCategory.name)}
                    className="px-5 py-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 font-medium text-xs transition-colors border border-slate-700"
                  >
                    <span>Request Showroom Viewing</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Editorial Footnote */}
        <div className="mt-12 text-center text-xs text-slate-400">
          Looking for a custom dimensions setup or commercial hotel batch? Visit Dahuja Furnishers at Malout Road, Abohar to inspect samples and timber varieties in person.
        </div>
      </div>
    </section>
  );
};
