import React from "react";
const index = 1;

const Cart = ({ cart }) => {
  return (
    <div className="cart-container">
      <h1>Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="cart-items">
          {cart.map((item, index) => (
            <div key={index} className="cart-item">
              <img src={item.image} alt={item.name} />
              <h3>{item.name}</h3>
              <p>{item.price}</p>
              <button
                className="remove-btn"
                onClick={() => removeFromCart(index)}
              >
                {" "}
                Remove{" "}
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
