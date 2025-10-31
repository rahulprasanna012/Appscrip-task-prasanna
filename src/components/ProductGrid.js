"use client";

import ProductCard from "./ProductCard";
import "@/app/styles/products.css";

export default function ProductGrid({
  products,
  onAddToCart,
  onWishlistToggle,
  wishlisted,
}) {
  if (products.length === 0) {
    return <div className="loading">No products found</div>;
  }

  return (
    <div className="products-grid">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onAddToCart={onAddToCart}
          onWishlistToggle={onWishlistToggle}
          isWishlisted={wishlisted[product.id] ? true : false}
        />
      ))}
    </div>
  );
}
