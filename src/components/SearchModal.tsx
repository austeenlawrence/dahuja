import React, { useState, useEffect, useRef } from 'react';
import { Search, X, ArrowRight, Heart, MessageSquare } from 'lucide-react';
import { SHOWCASE_PRODUCTS, FURNITURE_CATEGORIES, SHOWROOM_INFO } from '../data/showroomData';
import { useFavourites } from '../context/FavouritesContext';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectProduct?: (productName: string) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose, onSelectProduct }) => {
  const [query, setQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const inputRef = useRef<HTMLInputElement>(null);
  const { toggleFavourite, isFavourite } = useFavourites();

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  // Keyboard shortcut esc to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const categories = ['All', ...Array.from(new Set(SHOWCASE_PRODUCTS.map((p) => p.category)))];

  const filteredProducts = SHOWCASE_PRODUCTS.filter((product) => {
    const matchesCategory = activeCategory === 'All' || product.category === activeCategory;
    const q = query.toLowerCase().trim();
    if (!q) return matchesCategory;
    const matchesText =
      product.name.toLowerCase().includes(q) ||
      product.category.toLowerCase().includes(q) ||
      product.description.toLowerCase().includes(q) ||
      product.materialHighlight.toLowerCase().includes(q);
    return matchesCategory && matchesText;
  });

  const handleProductWhatsApp = (prodName: string, category: string) => {
    const text = encodeURIComponent(
      `Hello Dahuja Furnishers, I am enquiring about "${prodName}" from your ${category} collection at your Abohar showroom.`
    );
    window.open(`https://wa.me/${SHOWROOM_INFO.whatsappRaw}?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-slate-950/85 backdrop-blur-md animate-fadeIn">
      {/* Backdrop click */}
      <div className="fixed inset-0 -z-10" onClick={onClose} aria-hidden="true" />

      {/* Modal Container */}
      <div className="relative w-full max-w-2xl rounded-xl bg-slate-900/95 border border-slate-700/60 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8)] overflow-hidden">
        {/* Glow highlight */}
        <div className="absolute top-0 left-1/4 right-1/4 h-[1px] bg-gradient-to-r from-transparent via-blue-500/60 to-transparent" />

        {/* Input Bar */}
        <div className="flex items-center px-5 py-4 border-b border-slate-800">
          <Search className="w-5 h-5 text-blue-400 shrink-0 mr-3" />
          <input
            ref={inputRef}
            type="text"
            placeholder="Search sofas, beds, marble dining, executive desks..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-transparent text-white placeholder-slate-500 text-sm sm:text-base focus:outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 rounded text-slate-400 hover:text-white mr-2"
              title="Clear search"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="p-1.5 rounded-md text-slate-400 hover:text-white hover:bg-slate-800 text-xs font-medium px-2.5 transition-colors"
          >
            ESC
          </button>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center gap-1.5 px-5 py-2.5 bg-slate-950/60 border-b border-slate-800/80 overflow-x-auto no-scrollbar">
          <span className="text-[11px] font-medium text-slate-400 mr-2 shrink-0">Filter:</span>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3 py-1 rounded text-xs font-medium whitespace-nowrap transition-colors ${
                activeCategory === cat
                  ? 'bg-blue-600/30 text-blue-300 border border-blue-500/40'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Results List */}
        <div className="max-h-[60vh] overflow-y-auto p-4 space-y-3">
          {filteredProducts.length === 0 ? (
            <div className="text-center py-12 px-4">
              <p className="text-sm text-slate-400 font-medium">No furniture found matching "{query}"</p>
              <p className="text-xs text-slate-500 mt-1.5">
                Looking for something custom? Contact Dahuja Furnishers directly at {SHOWROOM_INFO.phone}.
              </p>
              <button
                onClick={() => {
                  window.open(`https://wa.me/${SHOWROOM_INFO.whatsappRaw}?text=${encodeURIComponent(SHOWROOM_INFO.whatsappPreFill)}`, '_blank');
                }}
                className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-md bg-blue-600/20 text-blue-400 text-xs font-medium hover:bg-blue-600/30 transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                Ask Showroom on WhatsApp
              </button>
            </div>
          ) : (
            filteredProducts.map((product) => {
              const isFav = isFavourite(product.id);
              return (
                <div
                  key={product.id}
                  className="group relative flex items-center justify-between p-3 rounded-lg bg-slate-800/40 hover:bg-slate-800/80 border border-slate-800 hover:border-slate-700 transition-all duration-200"
                >
                  <div className="flex items-center gap-3.5 min-w-0">
                    <img
                      src={product.image}
                      alt={product.name}
                      referrerPolicy="no-referrer"
                      className="w-14 h-14 rounded object-cover shrink-0 border border-slate-700/50 bg-slate-900"
                    />
                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="text-[11px] font-medium text-blue-400">{product.category}</span>
                        <span className="text-slate-600 text-xs">·</span>
                        <span className="text-[11px] text-slate-400 truncate">{product.subCategory}</span>
                      </div>
                      <h4 className="text-sm font-semibold text-white truncate group-hover:text-blue-300 transition-colors">
                        {product.name}
                      </h4>
                      <p className="text-xs text-slate-400 truncate mt-0.5">{product.materialHighlight}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 shrink-0 ml-3">
                    <button
                      onClick={() => toggleFavourite(product.id)}
                      className={`p-2 rounded-md border transition-colors ${
                        isFav
                          ? 'border-red-500/40 bg-red-500/10 text-red-400'
                          : 'border-slate-700 text-slate-400 hover:text-white hover:bg-slate-700'
                      }`}
                      title={isFav ? 'Remove from favourites' : 'Save to favourites'}
                      aria-label="Toggle favourite"
                    >
                      <Heart className={`w-3.5 h-3.5 ${isFav ? 'fill-red-400' : ''}`} />
                    </button>
                    <button
                      onClick={() => handleProductWhatsApp(product.name, product.category)}
                      className="px-3 py-1.5 rounded-md bg-blue-600 hover:bg-blue-500 text-white text-xs font-medium flex items-center gap-1.5 transition-colors shadow-sm"
                      title="Enquire on WhatsApp"
                    >
                      <span>Enquire</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-5 py-3 bg-slate-950/80 border-t border-slate-800 text-[11px] text-slate-500 flex justify-between items-center">
          <span>{filteredProducts.length} designs available to explore</span>
          <span className="text-slate-400">Visit Malout Rd, Abohar for hands-on inspection</span>
        </div>
      </div>
    </div>
  );
};
