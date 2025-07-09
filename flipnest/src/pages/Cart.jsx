import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // for navigation
import Header from '../components/Header';
import Footer from '../components/Footer';

import '../styles/styles.css';
import '../styles/cart.css';
import '../styles/modern.css';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const storedCart = localStorage.getItem('cartItems');
    if (storedCart) {
      setCartItems(JSON.parse(storedCart));
    }
  }, []);

  const handleCheckout = () => {
    if (cartItems.length === 0) {
      alert("Your cart is empty!");
      return;
    }
    navigate('/checkout'); // redirect to checkout page
  };

  return (
    <>
      <Header />

      <section className="cart-section">
        <div className="cart-container">
          <div className="cart-header">
            <h2>Shopping Cart</h2>
            <div className="cart-count-badge">
              <span id="header-cart-count">{cartItems.length}</span> {cartItems.length === 1 ? 'item' : 'items'}
            </div>
          </div>

          <div id="cart-content">
            {cartItems.length === 0 ? (
              <div className="empty-cart">Your cart is empty.</div>
            ) : (
              cartItems.map((item, index) => (
                <div className="cart-item" key={`${item.id}-${index}`}>
                  {item.images && item.images.length > 0 && (
                    <img src={item.images[0]} alt={item.title} className="cart-item-image" />
                  )}
                  <div className="cart-item-details">
                    <h3>{item.title}</h3>
                    <p><strong>Price:</strong> Ksh {item.price}</p>
                    <p><strong>Location:</strong> {item.location}</p>
                    <p><strong>Condition:</strong> {item.condition}</p>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Go to Checkout Button */}
          <div className="cart-actions">
            <button
              className="btn btn-primary"
              onClick={handleCheckout}
              disabled={cartItems.length === 0}
            >
              Go to Checkout
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Cart;
