"use client";
import { createContext, useState, useContext, useEffect } from "react";

const WishlistContext = createContext();
export const useWishlist = () => useContext(WishlistContext);

export const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    const stored = localStorage.getItem("wishlist");
    if (stored) setWishlist(JSON.parse(stored));
  }, []);

  useEffect(
    () => localStorage.setItem("wishlist", JSON.stringify(wishlist)),
    [wishlist]
  );

  const toggleWishlist = (item) => {
    setWishlist((prev) =>
      prev.find((w) => w.id === item.id)
        ? prev.filter((w) => w.id !== item.id)
        : [...prev, item]
    );
  };

  return (
    <WishlistContext.Provider value={{ wishlist, toggleWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
};
