import React, { useState } from 'react';
import { Heart, MessageSquare, ArrowRight, Eye, ShieldCheck, Sparkles } from 'lucide-react';
import { SHOWCASE_PRODUCTS, FurnitureProduct, SHOWROOM_INFO } from '../data/showroomData';
import { useFavourites } from '../context/FavouritesContext';

interface ProductShowcaseProps {
  onOpenEnquiryWithProduct: (productName: string, category: string) => void;
  onOpenBookVisit: () => void;
}

export const ProductShowcase: React.FC<ProductShowcaseProps> = ({
  onOpenEnquiryWithProduct,
  onOpenBookVisit,
}) => {
  const [selectedFilter, setSelectedFilter] = useState<string>('All');
  const { toggleFavourite, isFavourite } = useFavourites();

  const filterOptions = ['All', 'Sofas', 'Beds', 'Dining', 'Office Furniture', 'Recliners', 'Cabinets'];

  const filteredProducts = SHOWCASE_PRODUCTS.filter((item) => {
    if (selectedFilter === 'All') return true;
    return item.category.toLowerCase().includes(selectedFilter.toLowerCase());
  });

  const handleWhatsAppEnquiry = (product: FurnitureProduct) => {
    const message = encodeURIComponent(
      `Hello Dahuja Furnishers, I saw the "${product.name}" (${product.category}) on your website and would like to enquire about its availability at your Abohar showroom.`
    );
    window.open(`https://wa.me/${SHOWROOM_INFO.whatsappRaw}?text=${message}`, '_blank');
  };

  return (
    <section id="showcase" className="py-20 lg:py-28 relative bg-[#040711]">
      {/* Background Accent Glows */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[450px] h-[450px] bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-slate-800">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-purple-400 uppercase tracking-widest mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Curated Showroom Highlights</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
              Featured Designs
            </h2>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <p className="text-slate-400 text-xs sm:text-sm max-w-sm leading-relaxed">
              Experience the actual tactile textures, solid timber framing, and luxurious finishes in our Abohar showroom.
            </p>
          </div>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="mt-8 flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar">
          {filterOptions.map((filter) => (
            <button
              key={filter}
              onClick={() => setSelectedFilter(filter)}
              className={`px-4 py-2 rounded-lg text-xs font-medium whitespace-nowrap transition-all duration-200 ${
                selectedFilter === filter
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-900/30'
                  : 'bg-slate-900/80 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Product Cards Grid (3 columns on desktop, generous whitespace, unified cards) */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => {
            const isFav = isFavourite(product.id);
            return (
              <div
                key={product.id}
                className="group rounded-2xl bg-slate-900/80 border border-slate-800/80 overflow-hidden flex flex-col justify-between hover:border-slate-700/80 transition-all duration-300 shadow-xl shadow-slate-950/50 hover:shadow-2xl hover:shadow-blue-950/20"
              >
                <div>
                  {/* Image slot */}
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-950">
                    <img
                      src={product.image}
                      alt={product.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />

                    {/* Gradient scrim overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-black/30 pointer-events-none" />

                    {/* Category Label */}
                    <div className="absolute top-3.5 left-3.5">
                      <span className="text-[11px] font-semibold text-slate-200 bg-slate-950/80 backdrop-blur-md px-2.5 py-1 rounded border border-slate-700/60 uppercase tracking-wider">
                        {product.category}
                      </span>
                    </div>

                    {/* Favourite button */}
                    <button
                      onClick={() => toggleFavourite(product.id)}
                      className={`absolute top-3.5 right-3.5 p-2 rounded-full backdrop-blur-md transition-colors ${
                        isFav
                          ? 'bg-red-500/20 text-red-400 border border-red-500/40'
                          : 'bg-slate-950/70 text-slate-300 hover:text-white hover:bg-slate-900 border border-slate-700/60'
                      }`}
                      title={isFav ? 'Remove from saved' : 'Save to favourites'}
                      aria-label="Add to favourites"
                    >
                      <Heart className={`w-4 h-4 ${isFav ? 'fill-red-400' : ''}`} />
                    </button>
                  </div>

                  {/* Body Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-xs text-slate-400 mb-1.5">
                      <span>{product.subCategory}</span>
                      <span aria-hidden="true">·</span>
                      <span className="text-blue-400 font-medium">On Display</span>
                    </div>

                    <h3 className="font-display font-bold text-lg text-white group-hover:text-blue-300 transition-colors">
                      {product.name}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
                      {product.description}
                    </p>

                    {/* Material Highlight (clean unboxed text) */}
                    <div className="mt-4 pt-3 border-t border-slate-800/80 text-[11px] text-slate-400">
                      <span className="text-slate-400 font-medium">Materials: </span>
                      <span className="text-slate-300">{product.materialHighlight}</span>
                    </div>
                  </div>
                </div>

                {/* Footer Actions */}
                <div className="p-6 pt-0 flex items-center gap-2.5">
                  <button
                    onClick={() => handleWhatsAppEnquiry(product)}
                    className="flex-1 py-2.5 px-3 rounded-lg bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-400 border border-emerald-500/30 text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>Enquire WhatsApp</span>
                  </button>

                  <button
                    onClick={() => onOpenEnquiryWithProduct(product.name, product.category)}
                    className="py-2.5 px-3 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 text-xs font-medium flex items-center gap-1 transition-colors"
                    title="Request showroom consultation"
                  >
                    <span>Consult</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Showroom Visit Invitation Banner */}
        <div className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-slate-900 via-blue-950/40 to-slate-900 border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1">
            <h4 className="font-display font-bold text-xl text-white">
              Want to feel the wood grains & upholstery in person?
            </h4>
            <p className="text-xs sm:text-sm text-slate-400 max-w-xl">
              Photographs only tell part of the story. Visit Dahuja Furnishers near Railway Flyover, Malout Rd, Abohar for personalized interior curation.
            </p>
          </div>
          <button
            onClick={onOpenBookVisit}
            className="px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs tracking-wider uppercase whitespace-nowrap transition-colors shadow-lg shadow-blue-950/50"
          >
            Plan Showroom Visit
          </button>
        </div>
      </div>
    </section>
  );
};
