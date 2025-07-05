import React, { useState, useEffect } from 'react';
import Header from '../components/Header'; // Correct import path
import Footer from '../components/Footer'; // Correct import path
import CartItem from '../components/CartItem';
import '../styles/styles.css';
import '../styles/cart.css';
import '../styles/modern.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faBoxOpen, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const Cart = () => {
    const [cartItems, setCartItems] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCartItems = async () => {
            setLoading(true);
            await new Promise(resolve => setTimeout(resolve, 1000));
            const dummyCartItems = [
                { id: 1, title: 'Vintage Leather Handbag', seller: 'FashionFinds', price: 75.00, quantity: 1, image: 'https://via.placeholder.com/120' },
                { id: 2, title: 'Rare Comic Book Collection', seller: 'CollectiblesHub', price: 120.00, quantity: 1, image: 'https://via.placeholder.com/120' },
                { id: 3, title: 'Handmade Ceramic Mug', seller: 'ArtisanCrafts', price: 25.50, quantity: 2, image: 'https://via.placeholder.com/120' },
            ];
            setCartItems(dummyCartItems);
            setLoading(false);
        };

        fetchCartItems();
    }, []);

    const handleQuantityChange = (id, newQuantity) => {
        if (newQuantity < 1) return;
        setCartItems(prevItems =>
            prevItems.map(item =>
                item.id === id ? { ...item, quantity: newQuantity } : item
            )
        );
    };

    const handleRemoveItem = (id) => {
        setCartItems(prevItems => prevItems.filter(item => item.id !== id));
    };

    const calculateSubtotal = () => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    const shippingCost = cartItems.length > 0 ? 5.00 : 0;
    const totalCost = calculateSubtotal() + shippingCost;

    return (
        <>
            <Header />

            <section className="cart-section">
                <div className="cart-container">
                    <div className="cart-header">
                        <h2>Shopping Cart</h2>
                        <div className="cart-count-badge">
                            <span id="header-cart-count">{cartItems.length}</span> items
                        </div>
                    </div>

                    <div id="cart-content">
                        {loading ? (
                            <div className="loading">Loading cart items...</div>
                        ) : cartItems.length === 0 ? (
                            <div className="cart-empty">
                                <FontAwesomeIcon icon={faBoxOpen} />
                                <h3>Your cart is empty</h3>
                                <p>Looks like you haven't added anything to your cart yet. Start Browse to find great deals!</p>
                                <a href="/browse" className="checkout-btn" style={{ maxWidth: '200px', margin: '20px auto' }}>
                                    <FontAwesomeIcon icon={faArrowLeft} /> Start Shopping
                                </a>
                            </div>
                        ) : (
                            <>
                                <div className="cart-items">
                                    {cartItems.map(item => (
                                        <CartItem
                                            key={item.id}
                                            item={item}
                                            onQuantityChange={handleQuantityChange}
                                            onRemoveItem={handleRemoveItem}
                                        />
                                    ))}
                                </div>

                                <div className="cart-summary">
                                    <h3>Order Summary</h3>
                                    <div className="summary-row">
                                        <span>Subtotal ({cartItems.length} items)</span>
                                        <span>${calculateSubtotal().toFixed(2)}</span>
                                    </div>
                                    <div className="summary-row">
                                        <span>Shipping</span>
                                        <span>${shippingCost.toFixed(2)}</span>
                                    </div>
                                    <div className="summary-row total">
                                        <span>Total</span>
                                        <span>${totalCost.toFixed(2)}</span>
                                    </div>
                                    <button className="checkout-btn">Proceed to Checkout</button>
                                    <a href="/browse" className="continue-shopping">
                                        <FontAwesomeIcon icon={faArrowLeft} /> Continue Shopping
                                    </a>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
};

export default Cart;