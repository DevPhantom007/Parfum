import { useState } from "react";
import { useCart } from "../context/CartContext";
import ProductCard from "../components/ProductCard";
import { products } from "../data/products";

export default function ProductDetail({ product, onNavigate }) {
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  if (!product) {
    onNavigate("catalog");
    return null;
  }

  const related = products.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4);
  const discount = product.oldPrice ? Math.round((1 - product.price / product.oldPrice) * 100) : null;

  const handleAdd = () => {
    addToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="min-h-screen bg-black pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4">
        <button
          onClick={() => onNavigate("catalog")}
          className="flex items-center gap-2 text-gray-500 text-xs hover:text-amber-600 transition mb-8"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <polyline points="15 18 9 12 15 6" />
          </svg>
          Back to Catalog
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          <div className="aspect-square overflow-hidden rounded-lg">
            <img
              src={product.img}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex flex-col justify-center">
            <p className="text-amber-600 text-[10px] tracking-[0.5em] uppercase mb-2">{product.brand}</p>
            <h1 className="text-5xl text-white mb-4">{product.name}</h1>

            <div className="flex items-center gap-2 mb-6">
              {product.isHit && (
                <span className="bg-amber-600 text-black text-[9px] font-bold uppercase px-2 py-1 rounded">
                  HIT
                </span>
              )}
              {discount && (
                <span className="bg-red-600 text-white text-[9px] font-bold px-2 py-1 rounded">
                  -{discount}%
                </span>
              )}
              <span className="text-gray-500 text-[10px] border border-gray-700 px-2 py-1 rounded">
                {product.ml} ml
              </span>
            </div>

            <div className="border-t border-b border-gray-800 py-6 mb-6">
              <p className="text-gray-500 text-[10px] uppercase mb-2">Fragrance Notes</p>
              <p className="text-gray-400 text-sm">{product.notes}</p>
            </div>

            <div className="flex items-baseline gap-4 mb-8">
              <span className="text-4xl text-amber-600">
                {product.price.toLocaleString()} ₽
              </span>
              {product.oldPrice && (
                <span className="text-gray-500 text-lg line-through">
                  {product.oldPrice.toLocaleString()} ₽
                </span>
              )}
            </div>

            <button
              onClick={handleAdd}
              className={`w-full py-4 text-xs uppercase font-bold transition ${
                added
                  ? "bg-gray-800 text-amber-600 border border-amber-600"
                  : "bg-amber-600 text-black hover:bg-amber-500"
              }`}
            >
              {added ? "Added to Cart" : "Add to Cart"}
            </button>
          </div>
        </div>

        {related.length > 0 && (
          <div>
            <div className="mb-8">
              <p className="text-amber-600 text-[10px] tracking-[0.5em] uppercase mb-2">You May Also Like</p>
              <h2 className="text-3xl text-white">Similar Products</h2>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {related.map(p => (
                <ProductCard key={p.id} product={p} onNavigate={onNavigate} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}