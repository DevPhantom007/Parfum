export default function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800 py-12 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <p className="text-2xl text-amber-600 tracking-[0.3em] uppercase mb-3 font-serif">
            SCENTIQUE
          </p>
          <p className="text-gray-500 text-xs tracking-wider leading-relaxed">
            Luxury perfumes from around the world. Delivery across Russia.
          </p>
        </div>
        <div>
          <p className="text-gray-600 text-[10px] tracking-[0.3em] uppercase mb-4">Navigation</p>
          {["Catalog", "Hits", "Sales", "New Arrivals"].map(item => (
            <p key={item} className="text-gray-500 text-xs tracking-wider mb-2 hover:text-amber-600 cursor-pointer transition">
              {item}
            </p>
          ))}
        </div>
        <div>
          <p className="text-gray-600 text-[10px] tracking-[0.3em] uppercase mb-4">Brands</p>
          {["Maison Elite", "Arabian Nights", "Lumière Dorée", "Black Label"].map(brand => (
            <p key={brand} className="text-gray-500 text-xs tracking-wider mb-2 hover:text-amber-600 cursor-pointer transition">
              {brand}
            </p>
          ))}
        </div>
        <div>
          <p className="text-gray-600 text-[10px] tracking-[0.3em] uppercase mb-4">Contacts</p>
          <p className="text-gray-500 text-xs tracking-wider mb-2">info@scentique.ru</p>
          <p className="text-gray-500 text-xs tracking-wider mb-2">+7 (800) 123-45-67</p>
          <p className="text-gray-500 text-xs tracking-wider">Mon–Sun: 9:00 – 21:00</p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-10 pt-6 border-t border-gray-900 text-center">
        <p className="text-gray-700 text-[10px] tracking-[0.3em] uppercase">
          © 2025 SCENTIQUE. All rights reserved.
        </p>
      </div>
    </footer>
  );
}