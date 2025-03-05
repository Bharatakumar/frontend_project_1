import React, { useState } from "react";
//import react from react
import { Link } from "react-router-dom";

const Navigation = () => {
  const [showModal, setShowModal] = useState(false); // State to control modal visibility
  return (
    <nav className="container">
      <div className="logo">
        <img src="images\brand_logo.png" alt="logo"></img>
      </div>
      <ul>
        <li href="#">menu</li>
        <li href="#">location</li>
        <li href="#">about</li>
      </ul>
      <button className="log" onClick={() => setShowModal(true)}>
        Login
      </button>

      {/* Modal Popup */}
      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <h2>Sign In</h2>
            <input type="text" placeholder="Username" className="modal-input" />
            <input
              type="password"
              placeholder="Password"
              className="modal-input"
            />
            <button className="modal-button">Register</button>
            <button
              className="close-button"
              onClick={() => setShowModal(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};
export default Navigation;
