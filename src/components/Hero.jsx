export default function Hero({ onNavigate }) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <img 
        src="https://images.unsplash.com/photo-1594035910387-fea47794261f?w=1600"
        alt="Perfume"
        className="absolute inset-0 w-full h-full object-cover"
      />
      
      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 text-center px-4">
        <p className="text-amber-400 tracking-[0.3em] text-xs uppercase mb-4">
          2025 COLLECTION
        </p>

        <h1 className="text-5xl sm:text-7xl font-light text-white leading-tight mb-4">
          THE ART
          <br />
          <span className="text-amber-400 italic">OF FRAGRANCE</span>
        </h1>

        <p className="text-gray-200 text-sm max-w-md mx-auto mb-8">
          Discover luxury perfumes from the world's finest fragrance houses
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => onNavigate("catalog")}
            className="px-8 py-3 bg-amber-500 text-black text-xs uppercase font-semibold hover:bg-amber-400 transition rounded"
          >
            VIEW CATALOG
          </button>
          <button
            onClick={() => onNavigate("sales")}
            className="px-8 py-3 border border-white/40 text-white text-xs uppercase hover:border-amber-400 hover:text-amber-400 transition rounded"
          >
            SALES
          </button>
        </div>
      </div>
    </section>
  );
}