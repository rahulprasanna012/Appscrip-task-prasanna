"use client";
import Link from "next/link";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";

export default function Header() {
  const { cart } = useCart();
  const { wishlist } = useWishlist();

  return (
    <header>
      <Link href="/">🛍️ MyStore</Link>
      <nav style={{ display: "flex", gap: "1rem" }}>
        <Link href="/products">Products</Link>
        <Link href="/wishlist">❤️ ({wishlist.length})</Link>
        <Link href="/cart">🛒 ({cart.length})</Link>
      </nav>
    </header>
  );
}
