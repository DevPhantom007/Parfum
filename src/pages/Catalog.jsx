import { useState, useMemo } from "react";
import ProductCard from "../components/ProductCard";
import { products, brands, categories } from "../data/products";

export default function Catalog({ onNavigate, filterMode }) {
  const [category, setCategory] = useState("all");
  const [selectedBrand, setSelectedBrand] = useState("all");
  const [sortBy, setSortBy] = useState("default");
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    let list = [...products];

    if (filterMode === "hits") list = list.filter(p => p.isHit);
    if (filterMode === "sales") list = list.filter(p => p.isSale);

    if (category !== "all") list = list.filter(p => p.category === category);
    if (selectedBrand !== "all") list = list.filter(p => p.brand === selectedBrand);
    if (search) list = list.filter(p =>
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.brand.toLowerCase().includes(search.toLowerCase())
    );

    if (sortBy === "price-asc") list.sort((a, b) => a.price - b.price);
    if (sortBy === "price-desc") list.sort((a, b) => b.price - a.price);
    if (sortBy === "name") list.sort((a, b) => a.name.localeCompare(b.name));

    return list;
  }, [category, selectedBrand, sortBy, search, filterMode]);

  const title = filterMode === "hits" ? "Best Sellers" : filterMode === "sales" ? "Sales" : "Catalog";

  return (
    <div className="min-h-screen bg-black pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-10">
          <p className="text-amber-600 text-[10px] tracking-[0.5em] uppercase mb-2">
            {filterMode === "hits" ? "Popular" : filterMode === "sales" ? "Deals" : "Collection"}
          </p>
          <h1 className="text-5xl text-white">{title}</h1>
          <p className="text-gray-500 text-sm mt-2">{filtered.length} products</p>
        </div>

        <div className="mb-8 flex flex-wrap gap-3 items-center">
          <div className="relative flex-1 min-w-[200px] max-w-xs">
            <input
              type="text"
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="Search..."
              className="w-full bg-black border border-gray-700 text-white px-4 py-2.5 pr-10 text-sm focus:outline-none focus:border-amber-600 transition"
            />
            <svg className="absolute right-3 top-3 text-gray-500" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
            </svg>
          </div>

          <select
            value={category}
            onChange={e => setCategory(e.target.value)}
            className="bg-black border border-gray-700 text-gray-400 px-4 py-2.5 text-xs tracking-wider focus:outline-none focus:border-amber-600 transition cursor-pointer"
          >
            <option value="all">All Categories</option>
            <option value="men">Men</option>
            <option value="women">Women</option>
            <option value="unisex">Unisex</option>
          </select>

          <select
            value={selectedBrand}
            onChange={e => setSelectedBrand(e.target.value)}
            className="bg-black border border-gray-700 text-gray-400 px-4 py-2.5 text-xs tracking-wider focus:outline-none focus:border-amber-600 transition cursor-pointer"
          >
            <option value="all">All Brands</option>
            {brands.map(b => <option key={b} value={b}>{b}</option>)}
          </select>

          <select
            value={sortBy}
            onChange={e => setSortBy(e.target.value)}
            className="bg-black border border-gray-700 text-gray-400 px-4 py-2.5 text-xs tracking-wider focus:outline-none focus:border-amber-600 transition cursor-pointer"
          >
            <option value="default">Default</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="name">Name</option>
          </select>
        </div>

        {filtered.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {filtered.map(product => (
              <ProductCard key={product.id} product={product} onNavigate={onNavigate} />
            ))}
          </div>
        ) : (
          <div className="py-24 text-center">
            <p className="text-gray-400 text-2xl">No products found</p>
            <p className="text-gray-600 text-sm mt-2">Try changing your filters</p>
          </div>
        )}
      </div>
    </div>
  );
}