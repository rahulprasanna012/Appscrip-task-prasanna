'use client';

import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import ProductGrid from '@/components/ProductGrid';
import CartPanel from '@/components/CartPanel';
import WishlistPanel from '@/components/WishlistPanel';
import './styles/header.css';
import './styles/sidebar.css';
import './styles/products.css';
import './styles/panels.css';
import './styles/responsive.css';
import Footer from '@/components/Footer.js';

const API_BASE = 'https://fakestoreapi.com';

export default function Home() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [cart, setCart] = useState({});
  const [wishlist, setWishlist] = useState({});
  const [cartOpen, setCartOpen] = useState(false);
  const [wishlistOpen, setWishlistOpen] = useState(false);
  const [sidebarVisible, setSidebarVisible] = useState(true);
  const [sortBy, setSortBy] = useState('recommended');
  const [selectedFilters, setSelectedFilters] = useState({
    customizable: false,
  });
  const [loading, setLoading] = useState(true);

  // FETCH PRODUCTS
  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const [productsRes, categoriesRes] = await Promise.all([
          fetch(`${API_BASE}/products`),
          fetch(`${API_BASE}/products/categories`)
        ]);
        
        const productsData = await productsRes.json();
        const categoriesData = await categoriesRes.json();
        
        setProducts(productsData);
        setFilteredProducts(productsData);
        setCategories(categoriesData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  // APPLY FILTERS
  useEffect(() => {
    let filtered = [...products];

    // Apply customizable filter
    if (selectedFilters.customizable) {
      filtered = filtered.slice(0, 10);
    }

    // Apply category filters
    Object.keys(selectedFilters).forEach(key => {
      if (key !== 'customizable' && selectedFilters[key]) {
        filtered = filtered.filter(p => p.category === selectedFilters[key]);
      }
    });

    // Apply sorting
    if (sortBy === 'price-asc') {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-desc') {
      filtered.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'newest') {
      filtered.reverse();
    }

    setFilteredProducts(filtered);
  }, [products, selectedFilters, sortBy]);

  // CART FUNCTIONS
  const addToCart = (productId) => {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    setCart(prev => ({
      ...prev,
      [productId]: prev[productId] 
        ? { ...prev[productId], quantity: prev[productId].quantity + 1 }
        : { ...product, quantity: 1 }
    }));
  };

  const removeFromCart = (productId) => {
    setCart(prev => {
      const newCart = { ...prev };
      delete newCart[productId];
      return newCart;
    });
  };

  const updateCartQuantity = (productId, change) => {
    setCart(prev => {
      const newCart = { ...prev };
      if (newCart[productId]) {
        newCart[productId].quantity += change;
        if (newCart[productId].quantity <= 0) {
          delete newCart[productId];
        }
      }
      return newCart;
    });
  };

  // WISHLIST FUNCTIONS
  const toggleWishlist = (productId) => {
    setWishlist(prev => {
      const newWishlist = { ...prev };
      if (newWishlist[productId]) {
        delete newWishlist[productId];
      } else {
        const product = products.find(p => p.id === productId);
        if (product) {
          newWishlist[productId] = product;
        }
      }
      return newWishlist;
    });
  };

  const removeFromWishlist = (productId) => {
    setWishlist(prev => {
      const newWishlist = { ...prev };
      delete newWishlist[productId];
      return newWishlist;
    });
  };

  const closeAllPanels = () => {
    setCartOpen(false);
    setWishlistOpen(false);
  };

  return (
    <div>
      <Header 
        cartCount={Object.keys(cart).length}
        wishlistCount={Object.keys(wishlist).length}
        onCartClick={() => {
          setCartOpen(true);
          setWishlistOpen(false);
        }}
        onWishlistClick={() => {
          setWishlistOpen(true);
          setCartOpen(false);
        }}
      />

      <div className="main-container">
        <Sidebar
          categories={categories}
          onFilterChange={setSelectedFilters}
          visible={sidebarVisible}
          selectedFilters={selectedFilters}
        />

        <div className="content">
          <div className="content-header">
            <h1 className="page-title">DISCOVER OUR PRODUCTS</h1>
            <p className="page-description">
              Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus scelerisque.<br />
              Dolor integer scelerisque nibh amet ut ut elementum ipsum.
            </p>
          </div>

          <div className="filters-bar">
            <div className="filter-info">
              <span className="item-count">{filteredProducts.length} ITEMS</span>
              <button 
                className="toggle-filter-btn"
                onClick={() => setSidebarVisible(!sidebarVisible)}
              >
                {sidebarVisible ? 'HIDE FILTER' : 'SHOW FILTER'}
              </button>
            </div>
            <select 
              className="sort-dropdown"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="recommended">RECOMMENDED</option>
              <option value="price-asc">PRICE: LOW TO HIGH</option>
              <option value="price-desc">PRICE: HIGH TO LOW</option>
              <option value="newest">NEWEST FIRST</option>
            </select>
          </div>

          {loading ? (
            <div className="loading">Loading products...</div>
          ) : (
            <ProductGrid
              products={filteredProducts}
              onAddToCart={addToCart}
              onWishlistToggle={toggleWishlist}
              wishlisted={wishlist}
            />
          )}
        </div>
       
      </div>

      <CartPanel
        items={cart}
        isOpen={cartOpen}
        onClose={closeAllPanels}
        onUpdateQuantity={updateCartQuantity}
        onRemove={removeFromCart}
      />

      <WishlistPanel
        items={wishlist}
        isOpen={wishlistOpen}
        onClose={closeAllPanels}
        onRemove={removeFromWishlist}
        onAddToCart={addToCart}
      />
       <Footer/>
    </div>
  );
}
