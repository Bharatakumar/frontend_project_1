import React from "react";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();
  return (
    <main className="hero container">
      <div className="hero-content">
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>
          YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.
        </p>
        <div className="hero-btn">
          <button onClick={() => navigate("/Shop")}>Shop Now</button>
          <button className="secondary-btn">Category</button>
        </div>
        <div className="shopping">
          <p>Also Available On</p>
        </div>
        <div className="brand-icons">
          <img src="images/amazon.png" alt="amazon" />
          <img src="images/flipkart.png" alt="flipkart" />
        </div>
      </div>
      <div className="hero-image">
        <img src="images/shoe_image.png" alt="shoe_image" />
      </div>
    </main>
  );
};

export default HeroSection;
