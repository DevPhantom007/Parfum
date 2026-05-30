import { useState } from "react";
import { CartProvider, useCart } from "./context/CartContext";
import Navbar from "./components/Navbar";
import Catalog from "./pages/Catalog";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
import CartDrawer from "./components/CartDrawer";
import AuthModal from "./components/AuthModal";
import Footer from "./components/Footer";

function AppContent() {
  const [currentPage, setCurrentPage] = useState("home");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [filterMode, setFilterMode] = useState(null);

  const handleNavigate = (page, product = null) => {
    if (page === "product") {
      setSelectedProduct(product);
      setCurrentPage("product");
    } else if (page === "catalog") {
      setFilterMode(null);
      setCurrentPage("catalog");
    } else if (page === "hits") {
      setFilterMode("hits");
      setCurrentPage("catalog");
    } else if (page === "sales") {
      setFilterMode("sales");
      setCurrentPage("catalog");
    } else {
      setCurrentPage(page);
      setSelectedProduct(null);
      setFilterMode(null);
    }
  };

  const renderPage = () => {
    if (currentPage === "home") {
      return <Home onNavigate={handleNavigate} />;
    }
    if (currentPage === "catalog") {
      return <Catalog onNavigate={handleNavigate} filterMode={filterMode} />;
    }
    if (currentPage === "product" && selectedProduct) {
      return <ProductDetail product={selectedProduct} onNavigate={handleNavigate} />;
    }
    return <Home onNavigate={handleNavigate} />;
  };

  return (
    <>
      <Navbar onNavigate={handleNavigate} currentPage={currentPage} />
      {renderPage()}
      <Footer />
      <CartDrawer />
      <AuthModal />
    </>
  );
}

function App() {
  return (
    <CartProvider>
      <AppContent />
    </CartProvider>
  );
}

export default App;