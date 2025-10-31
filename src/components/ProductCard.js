"use client";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";

export default function ProductCard({ product }) {
  const { addToCart } = useCart();
  const { toggleWishlist, wishlist } = useWishlist();

  const inWishlist = wishlist.some((w) => w.id === product.id);

  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} />
      <h4>{product.title.slice(0, 30)}...</h4>
      <p>${product.price.toFixed(2)}</p>
      <div className="actions">
        <button onClick={() => addToCart(product)}>Add to Cart</button>
        <button
          style={{ background: inWishlist ? "red" : "#111" }}
          onClick={() => toggleWishlist(product)}
        >
          ❤️
        </button>
      </div>
    </div>
  );
}
