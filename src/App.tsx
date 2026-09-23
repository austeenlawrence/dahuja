/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { FavouritesProvider } from './context/FavouritesContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CategoriesSection } from './components/CategoriesSection';
import { ProductShowcase } from './components/ProductShowcase';
import { GallerySection } from './components/GallerySection';
import { ShowroomExperience } from './components/ShowroomExperience';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { MobileStickyBar } from './components/MobileStickyBar';
import { SearchModal } from './components/SearchModal';
import { FavouritesDrawer } from './components/FavouritesDrawer';
import { EnquiryModal } from './components/EnquiryModal';
import { BookVisitModal } from './components/BookVisitModal';

export default function App() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isBookVisitOpen, setIsBookVisitOpen] = useState(false);
  const [enquiryModalState, setEnquiryModalState] = useState<{
    isOpen: boolean;
    productName?: string;
    category?: string;
  }>({
    isOpen: false,
  });

  const handleOpenEnquiryWithProduct = (productName: string, category: string) => {
    setEnquiryModalState({
      isOpen: true,
      productName,
      category,
    });
  };

  const handleOpenGeneralEnquiry = () => {
    setEnquiryModalState({
      isOpen: true,
    });
  };

  const handleSelectCategoryFromSection = (categoryName: string) => {
    setEnquiryModalState({
      isOpen: true,
      category: categoryName,
    });
  };

  return (
    <FavouritesProvider>
      <div className="min-h-screen bg-[#030712] text-slate-100 flex flex-col selection:bg-blue-600/30 selection:text-white pb-14 lg:pb-0">
        {/* Sticky/Floating Top Bar */}
        <Navbar
          onOpenSearch={() => setIsSearchOpen(true)}
          onOpenBookVisit={() => setIsBookVisitOpen(true)}
        />

        {/* Main Content Sections */}
        <main className="flex-1">
          {/* Hero Section */}
          <Hero
            onOpenBookVisit={() => setIsBookVisitOpen(true)}
            onOpenEnquiry={handleOpenGeneralEnquiry}
          />

          {/* Furniture Categories Discovery */}
          <CategoriesSection
            onSelectCategory={handleSelectCategoryFromSection}
          />

          {/* Curated Product Showcase */}
          <ProductShowcase
            onOpenEnquiryWithProduct={handleOpenEnquiryWithProduct}
            onOpenBookVisit={() => setIsBookVisitOpen(true)}
          />

          {/* Showroom Experience & Google Maps */}
          <ShowroomExperience
            onOpenBookVisit={() => setIsBookVisitOpen(true)}
          />

          {/* Immersive Gallery & Lightbox */}
          <GallerySection />

          {/* About Section */}
          <AboutSection />

          {/* Contact & Lead Desk */}
          <ContactSection />
        </main>

        {/* Footer */}
        <Footer />

        {/* Mobile Sticky Contact Bar (Call, WhatsApp, Directions) */}
        <MobileStickyBar />

        {/* Interactive Modals & Drawers */}
        <SearchModal
          isOpen={isSearchOpen}
          onClose={() => setIsSearchOpen(false)}
        />

        <FavouritesDrawer />

        <EnquiryModal
          isOpen={enquiryModalState.isOpen}
          defaultProduct={enquiryModalState.productName}
          defaultCategory={enquiryModalState.category}
          onClose={() => setEnquiryModalState({ isOpen: false })}
        />

        <BookVisitModal
          isOpen={isBookVisitOpen}
          onClose={() => setIsBookVisitOpen(false)}
        />
      </div>
    </FavouritesProvider>
  );
}
