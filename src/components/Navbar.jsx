import { useState } from "react";
import { useCart } from "../context/CartContext";

export default function Navbar({ onNavigate, currentPage }) {
  const { totalCount, setIsCartOpen, setIsAuthOpen, user, logout } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          <button
            onClick={() => onNavigate("home")}
            className="text-2xl tracking-wider text-amber-400 font-serif"
          >
            SCENTIQUE
          </button>

          <div className="hidden md:flex items-center gap-8">
            {[
              { label: "Home", page: "home" },
              { label: "Catalog", page: "catalog" },
              { label: "Hits", page: "hits" },
              { label: "Sales", page: "sales" },
            ].map(({ label, page }) => (
              <button
                key={page}
                onClick={() => onNavigate(page)}
                className={`text-sm tracking-wide uppercase transition ${
                  currentPage === page ? "text-amber-400" : "text-white/80 hover:text-amber-400"
                }`}
              >
                {label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-4">
            {user ? (
              <div className="hidden md:flex items-center gap-3">
                <span className="text-sm text-amber-400">{user.name}</span>
                <button onClick={logout} className="text-sm text-white/70 hover:text-white">
                  Logout
                </button>
              </div>
            ) : (
              <button
                onClick={() => setIsAuthOpen(true)}
                className="hidden md:block text-sm text-white/80 hover:text-amber-400"
              >
                Sign In
              </button>
            )}

            <button
              onClick={() => setIsCartOpen(true)}
              className="relative w-10 h-10 flex items-center justify-center border border-white/40 hover:border-amber-400 transition rounded-full"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-white">
                <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/>
                <line x1="3" y1="6" x2="21" y2="6"/>
                <path d="M16 10a4 4 0 01-8 0"/>
              </svg>
              {totalCount > 0 && (
                <span className="absolute -top-2 -right-2 w-5 h-5 bg-amber-500 text-black text-xs font-bold rounded-full flex items-center justify-center">
                  {totalCount}
                </span>
              )}
            </button>

            <button className="md:hidden text-white" onClick={() => setMenuOpen(!menuOpen)}>
              <div className="space-y-1.5">
                <span className={`block w-6 h-0.5 bg-white transition ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
                <span className={`block w-6 h-0.5 bg-white transition ${menuOpen ? "hidden" : ""}`} />
                <span className={`block w-6 h-0.5 bg-white transition ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
              </div>
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="md:hidden py-4 bg-black/90 backdrop-blur-md rounded-lg mt-2 flex flex-col gap-3 px-4">
            {[
              { label: "Home", page: "home" },
              { label: "Catalog", page: "catalog" },
              { label: "Hits", page: "hits" },
              { label: "Sales", page: "sales" },
            ].map(({ label, page }) => (
              <button
                key={page}
                onClick={() => { onNavigate(page); setMenuOpen(false); }}
                className="text-left text-white/80 hover:text-amber-400 py-1"
              >
                {label}
              </button>
            ))}
            {user ? (
              <button onClick={logout} className="text-left text-amber-400 py-1">Logout ({user.name})</button>
            ) : (
              <button onClick={() => { setIsAuthOpen(true); setMenuOpen(false); }} className="text-left text-white/80 hover:text-amber-400 py-1">
                Sign In
              </button>
            )}
          </div>
        )}
      </div>
    </nav>
  );
}