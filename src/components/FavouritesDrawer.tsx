import React, { useEffect } from 'react';
import { X, Trash2, MessageSquare, ArrowRight, Heart } from 'lucide-react';
import { useFavourites } from '../context/FavouritesContext';
import { SHOWROOM_INFO } from '../data/showroomData';

export const FavouritesDrawer: React.FC = () => {
  const { openDrawer, setOpenDrawer, favouriteItems, removeFavourite, sendFavouritesToWhatsApp } =
    useFavourites();

  useEffect(() => {
    if (openDrawer) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [openDrawer]);

  if (!openDrawer) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-slate-950/70 backdrop-blur-sm animate-fadeIn">
      {/* Backdrop */}
      <div className="fixed inset-0 -z-10" onClick={() => setOpenDrawer(false)} aria-hidden="true" />

      {/* Drawer Container */}
      <div className="relative w-full max-w-md h-full bg-slate-900 border-l border-slate-800 shadow-2xl flex flex-col justify-between overflow-hidden">
        {/* Header */}
        <div className="p-5 border-b border-slate-800 flex items-center justify-between bg-slate-950/50">
          <div className="flex items-center gap-2.5">
            <Heart className="w-5 h-5 text-red-400 fill-red-400/20" />
            <div>
              <h3 className="font-display font-bold text-white text-lg leading-tight">Your Saved Furniture</h3>
              <p className="text-xs text-slate-400">{favouriteItems.length} items shortlisted</p>
            </div>
          </div>
          <button
            onClick={() => setOpenDrawer(false)}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            aria-label="Close drawer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content List */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4">
          {favouriteItems.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center p-6 space-y-4">
              <div className="w-16 h-16 rounded-full bg-slate-800/80 border border-slate-700 flex items-center justify-center text-slate-500">
                <Heart className="w-8 h-8 stroke-1 text-slate-400" />
              </div>
              <div>
                <h4 className="font-display font-semibold text-white text-base">No Saved Items Yet</h4>
                <p className="text-xs text-slate-400 max-w-xs mt-1 leading-relaxed">
                  Browse our furniture collections and tap the heart icon to curate your personal showroom shortlist.
                </p>
              </div>
              <button
                onClick={() => setOpenDrawer(false)}
                className="px-4 py-2 rounded-md bg-blue-600/20 text-blue-300 border border-blue-500/30 text-xs font-medium hover:bg-blue-600/30 transition-colors"
              >
                Explore Furniture Collections
              </button>
            </div>
          ) : (
            favouriteItems.map((item) => (
              <div
                key={item.id}
                className="flex items-start gap-3.5 p-3 rounded-lg bg-slate-800/40 border border-slate-700/60 relative group"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  referrerPolicy="no-referrer"
                  className="w-20 h-20 rounded object-cover shrink-0 bg-slate-900 border border-slate-700/50"
                />
                <div className="flex-1 min-w-0 pr-6">
                  <span className="text-[10px] font-semibold text-blue-400 uppercase tracking-wider">
                    {item.category}
                  </span>
                  <h4 className="font-medium text-white text-sm truncate mt-0.5">{item.name}</h4>
                  <p className="text-xs text-slate-400 line-clamp-1 mt-1">{item.materialHighlight}</p>

                  <div className="mt-2.5 flex items-center gap-2">
                    <button
                      onClick={() => {
                        const text = encodeURIComponent(
                          `Hello Dahuja Furnishers, I have shortlisted "${item.name}" and would like to check showroom availability in Abohar.`
                        );
                        window.open(`https://wa.me/${SHOWROOM_INFO.whatsappRaw}?text=${text}`, '_blank');
                      }}
                      className="text-xs font-medium text-blue-400 hover:text-blue-300 flex items-center gap-1 transition-colors"
                    >
                      <span>Direct Enquiry</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>

                <button
                  onClick={() => removeFavourite(item.id)}
                  className="absolute top-3 right-3 p-1 rounded text-slate-500 hover:text-red-400 hover:bg-slate-700/50 transition-colors"
                  title="Remove from saved"
                  aria-label="Remove item"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              </div>
            ))
          )}
        </div>

        {/* Footer Actions */}
        {favouriteItems.length > 0 && (
          <div className="p-5 border-t border-slate-800 bg-slate-950/70 space-y-3">
            <button
              onClick={sendFavouritesToWhatsApp}
              className="w-full py-3 px-4 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-medium text-sm flex items-center justify-center gap-2 transition-all shadow-lg shadow-emerald-950/40"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Send Shortlist to Showroom on WhatsApp</span>
            </button>
            <p className="text-[11px] text-slate-400 text-center">
              Our consultants at Abohar will review your items and share personalized recommendations.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
