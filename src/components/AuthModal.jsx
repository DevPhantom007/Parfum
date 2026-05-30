import { useState } from "react";
import { useCart } from "../context/CartContext";

export default function AuthModal() {
  const { isAuthOpen, setIsAuthOpen, login } = useCart();
  const [isRegister, setIsRegister] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password);
  };

  if (!isAuthOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={() => setIsAuthOpen(false)}
      />
      <div className="relative bg-black border border-gray-800 w-full max-w-md p-8">
        <button
          onClick={() => setIsAuthOpen(false)}
          className="absolute top-4 right-4 text-gray-500 hover:text-white transition"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        <div className="mb-8">
          <p className="text-amber-600 text-[10px] tracking-[0.4em] uppercase mb-2">SCENTIQUE</p>
          <h2 className="text-3xl text-white">
            {isRegister ? "Register" : "Sign In"}
          </h2>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {isRegister && (
            <div>
              <label className="text-gray-500 text-[10px] tracking-[0.3em] uppercase block mb-2">Name</label>
              <input
                type="text"
                value={name}
                onChange={e => setName(e.target.value)}
                className="w-full bg-black border border-gray-700 text-white px-4 py-3 text-sm focus:outline-none focus:border-amber-600 transition"
                placeholder="Your name"
              />
            </div>
          )}
          <div>
            <label className="text-gray-500 text-[10px] tracking-[0.3em] uppercase block mb-2">Email</label>
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
              className="w-full bg-black border border-gray-700 text-white px-4 py-3 text-sm focus:outline-none focus:border-amber-600 transition"
              placeholder="your@email.com"
            />
          </div>
          <div>
            <label className="text-gray-500 text-[10px] tracking-[0.3em] uppercase block mb-2">Password</label>
            <input
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
              className="w-full bg-black border border-gray-700 text-white px-4 py-3 text-sm focus:outline-none focus:border-amber-600 transition"
              placeholder="••••••••"
            />
          </div>
          <button
            type="submit"
            className="w-full py-3.5 bg-amber-600 text-black text-xs tracking-[0.3em] uppercase font-bold hover:bg-amber-500 transition mt-2"
          >
            {isRegister ? "Create Account" : "Sign In"}
          </button>
        </form>

        <div className="mt-6 text-center">
          <button
            onClick={() => setIsRegister(!isRegister)}
            className="text-gray-500 text-xs hover:text-amber-600 transition"
          >
            {isRegister
              ? "Already have an account? Sign In"
              : "No account? Register"}
          </button>
        </div>
      </div>
    </div>
  );
}