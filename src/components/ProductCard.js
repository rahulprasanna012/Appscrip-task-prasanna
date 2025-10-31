"use client";

import { useState } from "react";
import "@/app/styles/products.css";

export default function ProductCard({
  product,
  onAddToCart,
  onWishlistToggle,
  isWishlisted,
}) {
  const [isOutOfStock] = useState(Math.random() > 0.85);

  return (
    <div className="product-card">
      <div className="product-image-container">
        <img
          src={product.image}
          alt={product.title}
          className="product-image"
        />
        <button
          className={`wishlist-btn ${isWishlisted ? "active" : ""}`}
          onClick={(e) => {
            e.stopPropagation();
            onWishlistToggle(product.id);
          }}
        >
          {isWishlisted ? "♥" : "♡"}
        </button>
        {isOutOfStock && (
          <div className="out-of-stock-badge show">OUT OF STOCK</div>
        )}
      </div>

      <div
        className="product-info"
        onClick={() => !isOutOfStock && onAddToCart(product.id)}
        style={{ cursor: isOutOfStock ? "default" : "pointer" }}
      >
        <h3 className="product-title">{product.title}</h3>
        <p className="product-description">{product.description}</p>
        <p className="product-price">${product.price.toFixed(2)}</p>
      </div>
    </div>
  );
}
