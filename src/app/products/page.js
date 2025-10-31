"use client";
import { useEffect, useState } from "react";
import ProductCard from "../../components/ProductCard";
import FilterSidebar from "../../components/FilterSidebar";
import SortDropdown from "../../components/SortDropdown";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState("all");
  const [sort, setSort] = useState("recommended");

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const filtered =
    filter === "all"
      ? products
      : products.filter((p) => p.category === filter);

  const sorted = [...filtered].sort((a, b) => {
    if (sort === "lowtohigh") return a.price - b.price;
    if (sort === "hightolow") return b.price - a.price;
    if (sort === "newest") return b.id - a.id;
    return 0;
  });

  return (
    <div className="container">
      <div className="sidebar">
        <FilterSidebar setFilter={setFilter} />
      </div>
      <div style={{ flex: 1 }}>
        <SortDropdown setSort={setSort} />
        <div className="products">
          {sorted.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </div>
  );
}
