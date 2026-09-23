import React, { useState } from 'react';
import { Maximize2, X, MessageSquare, Camera } from 'lucide-react';
import { GALLERY_ITEMS, GalleryItem, SHOWROOM_INFO } from '../data/showroomData';

export const GallerySection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const filterTabs = ['All', 'Living', 'Bedroom', 'Dining', 'Office', 'Showroom'];

  const filteredItems = GALLERY_ITEMS.filter((item) => {
    if (activeFilter === 'All') return true;
    return item.category === activeFilter;
  });

  return (
    <section id="gallery" className="py-20 lg:py-28 relative bg-[#030611] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-slate-800">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-blue-400 uppercase tracking-widest mb-2">
              <Camera className="w-3.5 h-3.5" />
              <span>Showroom & Interior Atmosphere</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
              Immersive Gallery
            </h2>
          </div>
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar">
            {filterTabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveFilter(tab)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-colors ${
                  activeFilter === tab
                    ? 'bg-blue-600 text-white'
                    : 'bg-slate-900/60 text-slate-400 hover:text-white border border-slate-800'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Editorial Asymmetric Gallery Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-12 gap-6">
          {filteredItems.map((item, index) => {
            // Asymmetric layout spans for editorial look
            const isLarge = index === 0 || index === 1;
            const spanClass = isLarge ? 'md:col-span-6' : 'md:col-span-4';

            return (
              <div
                key={item.id}
                onClick={() => setSelectedItem(item)}
                className={`${spanClass} group relative rounded-2xl overflow-hidden cursor-pointer bg-slate-900 border border-slate-800 shadow-xl transition-all duration-300 hover:border-slate-700`}
              >
                <div className={`${isLarge ? 'aspect-[16/11]' : 'aspect-[4/3]'} w-full overflow-hidden`}>
                  <img
                    src={item.image}
                    alt={item.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transform transition-transform duration-700 ease-out group-hover:scale-105"
                    loading="lazy"
                  />
                </div>

                {/* Scrim Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                {/* Content Overlay */}
                <div className="absolute inset-0 p-6 flex flex-col justify-between">
                  <div className="flex justify-between items-start">
                    <span className="text-[11px] font-semibold text-slate-200 bg-slate-950/80 backdrop-blur-md px-2.5 py-1 rounded border border-slate-700/60 uppercase tracking-wider">
                      {item.category}
                    </span>
                    <span className="p-2 rounded-full bg-slate-950/60 backdrop-blur-md text-white opacity-0 group-hover:opacity-100 transition-opacity">
                      <Maximize2 className="w-4 h-4" />
                    </span>
                  </div>

                  <div>
                    <h3 className="font-display font-bold text-lg sm:text-xl text-white group-hover:text-blue-300 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-300 mt-1 line-clamp-2">
                      {item.caption}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-lg animate-fadeIn">
          <div className="fixed inset-0 -z-10" onClick={() => setSelectedItem(null)} />

          <div className="relative w-full max-w-4xl rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 shadow-2xl flex flex-col">
            <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full bg-black">
              <img
                src={selectedItem.image}
                alt={selectedItem.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-contain"
              />
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-slate-950/80 text-white hover:bg-slate-800 border border-slate-700 transition-colors"
                aria-label="Close image preview"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 bg-slate-900 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-slate-800">
              <div>
                <span className="text-xs font-semibold text-blue-400 uppercase tracking-wider">
                  {selectedItem.category}
                </span>
                <h3 className="font-display font-bold text-xl text-white mt-0.5">
                  {selectedItem.title}
                </h3>
                <p className="text-xs text-slate-400 mt-1 max-w-xl">{selectedItem.caption}</p>
              </div>

              <button
                onClick={() => {
                  const text = encodeURIComponent(
                    `Hello Dahuja Furnishers, I am looking at the "${selectedItem.title}" in your gallery and would like more details.`
                  );
                  window.open(`https://wa.me/${SHOWROOM_INFO.whatsappRaw}?text=${text}`, '_blank');
                }}
                className="px-4 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-medium flex items-center gap-2 whitespace-nowrap transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Enquire on WhatsApp</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
