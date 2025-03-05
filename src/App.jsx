import React from "react";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Navigation from "./components/Navigation";
import HeroSection from "./components/hero";
import Shop from "./components/shop"; // Import the Shop page
import Cart from "./components/cart";
/*const App = () => {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/Shop" element={<Shop />} />
      </Routes>
    </Router>
  );
};
export default App;*/
const App = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (shoe) => {
    setCart([...cart, shoe]);
  };

  return (
    <Router>
      <Navigation />

      <nav>
        <Link to="/shop">Shop</Link>
        <Link to="/cart">Cart ({cart.length})</Link>
      </nav>
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/shop" element={<Shop addToCart={addToCart} />} />
        <Route path="/cart" element={<Cart cart={cart} />} />
      </Routes>
    </Router>
  );
};

export default App;
