import Hero from "../components/Hero";
import ProductCard from "../components/ProductCard";
import { products } from "../data/products";

export default function Home({ onNavigate }) {
  const hits = products.filter(p => p.isHit).slice(0, 8);
  const sales = products.filter(p => p.isSale).slice(0, 4);

  return (
    <div className="bg-black">
      <Hero onNavigate={onNavigate} />

      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="text-amber-500 text-[10px] tracking-[0.5em] uppercase mb-2">POPULAR</p>
              <h2 className="text-4xl text-white">Best Sellers</h2>
            </div>
            <button
              onClick={() => onNavigate("hits")}
              className="text-gray-400 text-xs uppercase tracking-wider hover:text-amber-500 transition border-b border-gray-700 hover:border-amber-500 pb-0.5"
            >
              View All
            </button>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {hits.map(product => (
              <ProductCard key={product.id} product={product} onNavigate={onNavigate} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gradient-to-r from-amber-950/30 to-black">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-amber-900/20 to-black border border-amber-500/30 p-8 sm:p-12 flex flex-col sm:flex-row items-center gap-6 justify-between rounded-lg">
            <div>
              <p className="text-amber-500 text-[10px] tracking-[0.5em] uppercase mb-2">SPECIAL OFFER</p>
              <h2 className="text-3xl sm:text-4xl text-white mb-2">Seasonal Sales</h2>
              <p className="text-gray-400 text-sm">Up to 40% off selected fragrances</p>
            </div>
            <button
              onClick={() => onNavigate("sales")}
              className="flex-shrink-0 px-8 py-3.5 border border-amber-500 text-amber-500 text-xs uppercase tracking-wider hover:bg-amber-500 hover:text-black transition rounded"
            >
              View Sales
            </button>
          </div>
        </div>
      </section>

      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="text-amber-500 text-[10px] tracking-[0.5em] uppercase mb-2">BEST DEALS</p>
              <h2 className="text-4xl text-white">Sale Items</h2>
            </div>
            <button
              onClick={() => onNavigate("sales")}
              className="text-gray-400 text-xs uppercase tracking-wider hover:text-amber-500 transition border-b border-gray-700 hover:border-amber-500 pb-0.5"
            >
              View All
            </button>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {sales.map(product => (
              <ProductCard key={product.id} product={product} onNavigate={onNavigate} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 border-t border-gray-800">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="border border-gray-700 p-6 text-center rounded-lg bg-gray-900/50">
            <h3 className="text-xl text-amber-500 mb-2 font-serif">Free Shipping</h3>
            <p className="text-gray-400 text-xs tracking-wider">On orders over 5,000 ₽</p>
          </div>
          <div className="border border-gray-700 p-6 text-center rounded-lg bg-gray-900/50">
            <h3 className="text-xl text-amber-500 mb-2 font-serif">Authentic Products</h3>
            <p className="text-gray-400 text-xs tracking-wider">100% genuine fragrances</p>
          </div>
          <div className="border border-gray-700 p-6 text-center rounded-lg bg-gray-900/50">
            <h3 className="text-xl text-amber-500 mb-2 font-serif">14 Day Returns</h3>
            <p className="text-gray-400 text-xs tracking-wider">No questions asked</p>
          </div>
        </div>
      </section>
    </div>
  );
}