import React, { createContext, useContext, useState, useEffect } from 'react';
import { FurnitureProduct, SHOWCASE_PRODUCTS, SHOWROOM_INFO } from '../data/showroomData';

interface FavouritesContextType {
  favourites: string[];
  favouriteItems: FurnitureProduct[];
  toggleFavourite: (id: string) => void;
  isFavourite: (id: string) => void | boolean;
  removeFavourite: (id: string) => void;
  count: number;
  openDrawer: boolean;
  setOpenDrawer: (open: boolean) => void;
  sendFavouritesToWhatsApp: () => void;
}

const FavouritesContext = createContext<FavouritesContextType | undefined>(undefined);

const STORAGE_KEY = 'dahuja_furnishers_favs_v1';

export const FavouritesProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [favourites, setFavourites] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [openDrawer, setOpenDrawer] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(favourites));
    } catch (e) {
      console.warn('Unable to persist favourites to localStorage', e);
    }
  }, [favourites]);

  const toggleFavourite = (id: string) => {
    setFavourites((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const removeFavourite = (id: string) => {
    setFavourites((prev) => prev.filter((item) => item !== id));
  };

  const isFavourite = (id: string): boolean => {
    return favourites.includes(id);
  };

  const favouriteItems = SHOWCASE_PRODUCTS.filter((prod) => favourites.includes(prod.id));

  const sendFavouritesToWhatsApp = () => {
    if (favouriteItems.length === 0) return;
    const itemsList = favouriteItems.map((item, idx) => `${idx + 1}. ${item.name} (${item.category})`).join('%0A');
    const message = `Hello Dahuja Furnishers, I have shortlisted the following furniture pieces on your digital showroom and would like to enquire about their availability and visit your Abohar showroom:%0A%0A${itemsList}%0A%0APlease assist me.`;
    window.open(`https://wa.me/${SHOWROOM_INFO.whatsappRaw}?text=${message}`, '_blank');
  };

  return (
    <FavouritesContext.Provider
      value={{
        favourites,
        favouriteItems,
        toggleFavourite,
        isFavourite,
        removeFavourite,
        count: favourites.length,
        openDrawer,
        setOpenDrawer,
        sendFavouritesToWhatsApp,
      }}
    >
      {children}
    </FavouritesContext.Provider>
  );
};

export const useFavourites = () => {
  const context = useContext(FavouritesContext);
  if (!context) {
    throw new Error('useFavourites must be used within a FavouritesProvider');
  }
  return context;
};
