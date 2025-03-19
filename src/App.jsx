import React from "react";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
//import Navigation from "./components/Navigation";
//import HeroSection from "./components/hero";
import Shop from "./components/shop"; // Import the Shop page
import Cart from "./components/cart";
import Header from "./components/header";

const App = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (shoe) => {
    setCart([...cart, shoe]);
  };

  // Function to remove items from the cart
  const removeFromCart = (index) => {
    setCart(cart.filter((_, i) => i !== index));
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/shop" element={<Shop addToCart={addToCart} />} />
        <Route
          path="/cart"
          element={<Cart cart={cart} removeFromCart={removeFromCart} />}
        />
      </Routes>
      <nav>
        <Link to="/cart">🛒 ({cart.length})</Link>
      </nav>
    </Router>
  );
};

export default App;
