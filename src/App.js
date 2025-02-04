import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Home } from "./pages/Home";
import { Menu } from "./pages/Menu";
import { Order } from "./pages/Order";
import NavBar from "./components/NavBar";
import QuotePage from "./pages/QuotePage";
import Gallery from "./pages/Gallery";
import BookingComp from "./components/BookingComp";
import Footer from "./components/Footer";
import ContactSection from "./components/Contact";

import "./App.css";

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (item, quantity) => {
    const existingItemIndex = cart.findIndex(
      (cartItem) => cartItem.id === item.id
    );
    if (existingItemIndex >= 0) {
      const updatedCart = [...cart];
      updatedCart[existingItemIndex].quantity += quantity;
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...item, quantity }]);
    }
  };

  const removeFromCart = (index) => {
    const newCart = cart.filter((_, i) => i !== index);
    setCart(newCart);
  };

  return (
    <Router>
      <div className="app">
        {/* NavBar is now a separate component */}
        <NavBar />
        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu addToCart={addToCart} />} />
          <Route
            path="/order"
            element={<Order cart={cart} removeFromCart={removeFromCart} />}
          />
          <Route path="/booking" element={<BookingComp />} />
          <Route path="/spa" element={<QuotePage />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
        <ContactSection />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
