import { useState } from "react";
import { useCart } from "../context/CartContext";

export default function ProductCard({ product, onNavigate }) {
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  const handleAdd = (e) => {
    e.stopPropagation();
    addToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  const discount = product.oldPrice
    ? Math.round((1 - product.price / product.oldPrice) * 100)
    : null;

  return (
    <div
      className="group bg-gray-900 border border-gray-700 hover:border-amber-500 transition cursor-pointer rounded-lg overflow-hidden"
      onClick={() => onNavigate("product", product)}
    >
      <div className="relative overflow-hidden aspect-[3/4]">
        <img
          src={product.img}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
        />

        <div className="absolute top-3 left-3 flex gap-2">
          {product.isHit && (
            <span className="bg-amber-500 text-black text-[10px] font-bold uppercase px-2 py-0.5 rounded">
              HIT
            </span>
          )}
          {discount && (
            <span className="bg-red-500 text-white text-[10px] font-bold px-2 py-0.5 rounded">
              -{discount}%
            </span>
          )}
        </div>

        <button
          onClick={handleAdd}
          className={`absolute bottom-3 right-3 w-9 h-9 rounded-full flex items-center justify-center transition ${
            added
              ? "bg-amber-500 text-black"
              : "bg-black/80 text-amber-500 border border-amber-500 opacity-0 group-hover:opacity-100"
          }`}
        >
          {added ? (
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          ) : (
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <line x1="12" y1="5" x2="12" y2="19" />
              <line x1="5" y1="12" x2="19" y2="12" />
            </svg>
          )}
        </button>
      </div>

      <div className="p-4">
        <p className="text-gray-400 text-[10px] uppercase tracking-wider">{product.brand}</p>
        <h3 className="text-white text-base font-medium mt-1">{product.name}</h3>
        <p className="text-gray-500 text-xs mt-1">{product.notes}</p>
        <div className="flex items-center justify-between mt-3">
          <div className="flex items-center gap-2">
            <span className="text-amber-400 font-semibold">
              {product.price.toLocaleString()} ₽
            </span>
            {product.oldPrice && (
              <span className="text-gray-500 text-sm line-through">
                {product.oldPrice.toLocaleString()} ₽
              </span>
            )}
          </div>
          <span className="text-gray-500 text-xs">{product.ml} ml</span>
        </div>
      </div>
    </div>
  );
}