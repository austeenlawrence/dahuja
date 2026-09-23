import React, { useState, useEffect } from 'react';
import { BrandLogo } from './BrandLogo';
import { Search, Heart, Phone, Menu, X, ArrowUpRight, MapPin } from 'lucide-react';
import { SHOWROOM_INFO } from '../data/showroomData';
import { useFavourites } from '../context/FavouritesContext';

interface NavbarProps {
  onOpenSearch: () => void;
  onOpenBookVisit: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenSearch, onOpenBookVisit }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { count, setOpenDrawer } = useFavourites();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Furniture', href: '#categories' },
    { label: 'Collections', href: '#showcase' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Showroom', href: '#showroom' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-slate-950/85 backdrop-blur-md border-b border-slate-800/80 py-3 shadow-[0_10px_30px_rgba(0,0,0,0.5)]'
            : 'bg-gradient-to-b from-slate-950/90 via-slate-950/40 to-transparent py-4 sm:py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Zone 1: Brand Wordmark (Single element) */}
          <a
            href="#"
            className="flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
            aria-label="Dahuja Furnishers Home"
          >
            <BrandLogo size="md" />
          </a>

          {/* Zone 2: 4–6 Clean Text Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs tracking-[0.08em] uppercase font-medium text-slate-300 hover:text-white transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-blue-400 hover:after:w-full after:transition-all after:duration-300"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: 1–2 Primary Actions + Controls */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Search Trigger */}
            <button
              onClick={onOpenSearch}
              className="p-2 text-slate-300 hover:text-white hover:bg-slate-800/60 rounded-lg transition-colors border border-transparent hover:border-slate-700/60 flex items-center gap-1.5"
              aria-label="Search furniture catalog"
              title="Search collection (Ctrl+K)"
            >
              <Search className="w-4 h-4" />
              <span className="hidden xl:inline text-xs text-slate-400">Search</span>
            </button>

            {/* Favourites Trigger */}
            <button
              onClick={() => setOpenDrawer(true)}
              className="relative p-2 text-slate-300 hover:text-white hover:bg-slate-800/60 rounded-lg transition-colors border border-transparent hover:border-slate-700/60"
              aria-label="View saved furniture"
              title="Saved items"
            >
              <Heart className={`w-4 h-4 ${count > 0 ? 'text-red-400 fill-red-400/30' : ''}`} />
              {count > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-blue-600 text-[10px] font-bold text-white flex items-center justify-center">
                  {count}
                </span>
              )}
            </button>

            {/* Direct Call Quick Action on Desktop */}
            <a
              href={`tel:${SHOWROOM_INFO.phoneRaw}`}
              className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-lg border border-slate-700 bg-slate-900/60 hover:bg-slate-800 text-xs font-medium text-slate-200 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-blue-400" />
              <span className="tracking-wide">{SHOWROOM_INFO.phone}</span>
            </a>

            {/* Visit Showroom Primary Action */}
            <button
              onClick={onOpenBookVisit}
              className="hidden sm:flex items-center gap-1.5 px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold tracking-wider uppercase transition-all shadow-md shadow-blue-950/40 hover:shadow-blue-600/20"
            >
              <span>Visit Showroom</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-30 lg:hidden bg-slate-950/95 backdrop-blur-xl pt-20 px-6 pb-8 flex flex-col justify-between animate-fadeIn">
          <div className="space-y-6">
            <div className="border-b border-slate-800 pb-4">
              <span className="text-xs uppercase tracking-widest text-slate-400 font-semibold">
                Explore Showroom
              </span>
            </div>
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-lg font-display font-medium text-slate-200 hover:text-blue-400 transition-colors py-1 flex items-center justify-between"
                >
                  <span>{link.label}</span>
                  <ArrowUpRight className="w-4 h-4 text-slate-600" />
                </a>
              ))}
            </nav>
          </div>

          <div className="space-y-4 pt-6 border-t border-slate-800">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBookVisit();
              }}
              className="w-full py-3 rounded-lg bg-blue-600 text-white font-semibold text-sm flex items-center justify-center gap-2"
            >
              <span>Book Showroom Visit</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>

            <div className="grid grid-cols-2 gap-3">
              <a
                href={`tel:${SHOWROOM_INFO.phoneRaw}`}
                className="py-2.5 px-3 rounded-lg bg-slate-900 border border-slate-800 text-xs font-medium text-slate-200 flex items-center justify-center gap-2"
              >
                <Phone className="w-3.5 h-3.5 text-blue-400" />
                <span>Call Showroom</span>
              </a>
              <a
                href={SHOWROOM_INFO.googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="py-2.5 px-3 rounded-lg bg-slate-900 border border-slate-800 text-xs font-medium text-slate-200 flex items-center justify-center gap-2"
              >
                <MapPin className="w-3.5 h-3.5 text-purple-400" />
                <span>Get Directions</span>
              </a>
            </div>

            <p className="text-[11px] text-slate-400 text-center">
              Near Railway Flyover, Malout Rd, Abohar, Punjab
            </p>
          </div>
        </div>
      )}
    </>
  );
};
