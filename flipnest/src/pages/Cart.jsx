import React, { useState, useEffect } from 'react';
import Header from '../components/Header'; // Correct import path
import Footer from '../components/Footer'; // Correct import path

import '../styles/styles.css';
import '../styles/cart.css';
import '../styles/modern.css';

const Cart = () => {
    return (
        <>
        <body>
            <Header />

           <section class="cart-section">
        <div class="cart-container">
            <div class="cart-header">
                <h2>Shopping Cart</h2>
                <div class="cart-count-badge"><span id="header-cart-count">0</span> items</div>
            </div>
            
            <div id="cart-content">
                {/* Cart items will be loaded dynamically --> */}
                <div class="loading">Loading cart items...</div>
            </div>
        </div>
    </section>

            <Footer />
            </body>
        </>
    );
};

export default Cart;