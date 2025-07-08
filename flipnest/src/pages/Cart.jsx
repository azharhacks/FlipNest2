import React, { useState, useEffect } from 'react';
import Header from '../components/Header'; // Correct import path
import Footer from '../components/Footer'; // Correct import path

import '../styles/styles.css';
import '../styles/cart.css';
import '../styles/modern.css';



const Cart = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(storedCart);
  }, []);

  const updateCartStorage = (updatedCart) => {
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    setCart(updatedCart);
  };

  const updateQuantity = (productId, quantity) => {
    const updatedCart = cart.map(item =>
      item.id === productId ? { ...item, quantity: Math.min(Math.max(quantity, 1), 10) } : item
    );
    updateCartStorage(updatedCart);
  };

  const removeFromCart = (productId) => {
    const updatedCart = cart.filter(item => item.id !== productId);
    updateCartStorage(updatedCart);
  };

  const checkout = () => {
    alert('Checkout functionality would be implemented here.');
    updateCartStorage([]);
  };

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const tax = subtotal * 0.1;
  const total = subtotal + tax;

  return (
    <div className="cart-page">
      <h2>Your Cart</h2>

      {cart.length === 0 ? (
        <div className="cart-empty">
          <i className="fas fa-shopping-cart"></i>
          <h3>Your cart is empty</h3>
          <a href="/" className="btn">Start Shopping</a>
        </div>
      ) : (
        <>
          <div className="cart-items">
            {cart.map(item => (
              <div className="cart-item" key={item.id}>
                <img src={item.image} alt={item.title} />
                <div>
                  <h3>{item.title}</h3>
                  <p>Seller: {item.seller}</p>
                  <p>Price: Ksh {item.price}</p>
                </div>
                <div className="actions">
                  <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                  <input
                    type="number"
                    value={item.quantity}
                    onChange={(e) => updateQuantity(item.id, Number(e.target.value))}
                    min="1"
                    max="10"
                  />
                  <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                  <button onClick={() => removeFromCart(item.id)}>Remove</button>
                </div>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <p>Subtotal: Ksh {subtotal.toFixed(2)}</p>
            <p>Tax (10%): Ksh {tax.toFixed(2)}</p>
            <h3>Total: Ksh {total.toFixed(2)}</h3>
            <button onClick={checkout} className="btn">Checkout</button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
