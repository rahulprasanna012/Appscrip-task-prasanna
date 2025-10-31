'use client';

import { useState } from 'react';
import '@/app/styles/header.css';

export default function Header({ cartCount, wishlistCount, onCartClick, onWishlistClick }) {
  const [lang, setLang] = useState('ENG');

  return (
    <header className="header">
      <div className="header-top">
        <div className="logo">LOGO</div>
        
        <nav className="nav-menu">
          <a href="#shop">SHOP</a>
          <a href="#skills">SKILLS</a>
          <a href="#stories">STORIES</a>
          <a href="#about">ABOUT</a>
          <a href="#contact">CONTACT US</a>
        </nav>

        <div className="header-icons">
          <button className="icon-btn" title="Search">
            🔍
          </button>
          <button className="icon-btn" onClick={onWishlistClick} title="Wishlist">
            ♡
            {wishlistCount > 0 && <span className="badge">{wishlistCount}</span>}
          </button>
          <button className="icon-btn" onClick={onCartClick} title="Cart">
            🛒
            {cartCount > 0 && <span className="badge">{cartCount}</span>}
          </button>
          <button className="icon-btn" title="Account">
            👤
          </button>
          <select 
            className="lang-selector" 
            value={lang} 
            onChange={(e) => setLang(e.target.value)}
          >
            <option>ENG</option>
            <option>ESP</option>
            <option>FRA</option>
          </select>
        </div>
      </div>
    </header>
  );
}
