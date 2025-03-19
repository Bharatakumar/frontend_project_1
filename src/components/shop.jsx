import React from "react";

const Shop = ({ addToCart }) => {
  const shoes = [
    { id: 1, name: "Nike Air Max", image: "images/shoe1.png", price: "$120" },
    {
      id: 2,
      name: "Adidas Ultraboost",
      image: "images/shoe2.png",
      price: "$140",
    },
    { id: 3, name: "Puma RS-X", image: "images/shoe3.png", price: "$100" },
    { id: 4, name: "Woodland", image: "images/shoe4.png", price: "$125" },
    { id: 5, name: "Marvelstreet", image: "images/shoe5.png", price: "$150" },
    { id: 6, name: "Asian", image: "images/shoe6.png", price: "$190" },
  ];

  return (
    <div className="shop-container">
      <h1>Shop Your Favorite Shoes</h1>

      <div className="shoe-grid">
        {shoes.map((shoe) => (
          <div key={shoe.id} className="shoe-card">
            <img src={shoe.image} alt={shoe.name} />
            <h3>{shoe.name}</h3>
            <p>{shoe.price}</p>
            <button onClick={() => addToCart(shoe)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;
