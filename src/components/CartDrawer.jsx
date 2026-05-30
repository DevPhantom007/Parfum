import { useCart } from "../context/CartContext";

export default function CartDrawer() {
  const { cartItems, isCartOpen, setIsCartOpen, removeFromCart, updateQty, totalPrice } = useCart();

  return (
    <>
      {isCartOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-40 backdrop-blur-sm"
          onClick={() => setIsCartOpen(false)}
        />
      )}

      <div className={`fixed top-0 right-0 h-full w-full sm:w-[420px] bg-black z-50 flex flex-col transition-transform duration-300 border-l border-gray-800 ${isCartOpen ? "translate-x-0" : "translate-x-full"}`}>
        <div className="flex items-center justify-between px-6 py-5 border-b border-gray-800">
          <h2 className="text-xl text-white tracking-wider">
            Cart
            {cartItems.length > 0 && (
              <span className="ml-2 text-amber-600">({cartItems.length})</span>
            )}
          </h2>
          <button
            onClick={() => setIsCartOpen(false)}
            className="w-8 h-8 flex items-center justify-center text-gray-500 hover:text-white transition"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {cartItems.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center gap-4 text-center px-8">
            <div className="w-16 h-16 border border-gray-700 flex items-center justify-center">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#444" strokeWidth="1">
                <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/>
                <line x1="3" y1="6" x2="21" y2="6"/>
                <path d="M16 10a4 4 0 01-8 0"/>
              </svg>
            </div>
            <p className="text-gray-500 text-sm">Your cart is empty</p>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
              {cartItems.map(item => (
                <div key={item.id} className="flex gap-4 py-4 border-b border-gray-800">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-16 h-20 object-cover flex-shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <p className="text-gray-500 text-[10px] tracking-wider uppercase">{item.brand}</p>
                    <h4 className="text-white text-base leading-tight mt-0.5 truncate">
                      {item.name}
                    </h4>
                    <p className="text-gray-600 text-[10px] mt-0.5">{item.ml} ml</p>
                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center gap-2 border border-gray-700">
                        <button
                          onClick={() => updateQty(item.id, -1)}
                          className="w-7 h-7 flex items-center justify-center text-gray-500 hover:text-white transition"
                        >
                          <svg width="10" height="2" viewBox="0 0 10 2" fill="currentColor"><rect width="10" height="2" rx="1"/></svg>
                        </button>
                        <span className="text-white text-xs w-4 text-center">{item.qty}</span>
                        <button
                          onClick={() => updateQty(item.id, 1)}
                          className="w-7 h-7 flex items-center justify-center text-gray-500 hover:text-white transition"
                        >
                          <svg width="10" height="10" viewBox="0 0 10 10" fill="currentColor">
                            <rect x="4" y="0" width="2" height="10" rx="1"/>
                            <rect x="0" y="4" width="10" height="2" rx="1"/>
                          </svg>
                        </button>
                      </div>
                      <span className="text-amber-600 text-sm font-medium">
                        {(item.price * item.qty).toLocaleString()} ₽
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-gray-600 hover:text-red-500 transition flex-shrink-0 mt-1"
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14H6L5 6"/>
                      <path d="M10 11v6M14 11v6"/><path d="M9 6V4h6v2"/>
                    </svg>
                  </button>
                </div>
              ))}
            </div>

            <div className="px-6 py-5 border-t border-gray-800">
              <div className="flex justify-between items-center mb-4">
                <span className="text-gray-400 text-sm">Total</span>
                <span className="text-white text-xl">
                  {totalPrice.toLocaleString()} ₽
                </span>
              </div>
              <button className="w-full py-3.5 bg-amber-600 text-black text-xs uppercase font-bold hover:bg-amber-500 transition">
                Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
}