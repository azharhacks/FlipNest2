import React, { useEffect, useState } from 'react';
import '../styles/styles.css';
import '../styles/modern.css';



function FeaturedItems() {
  const [items, setItems] = useState([]);
  const [addedToCart, setAddedToCart] = useState([]);

  useEffect(() => {
    const stored = localStorage.getItem('listedItems');
    if (stored) {
      const parsedItems = JSON.parse(stored);
      setItems(parsedItems);
    }

    // Track already added cart items
    const cart = JSON.parse(localStorage.getItem('cartItems')) || [];
    const addedIds = cart.map(item => item.id);
    setAddedToCart(addedIds);
  }, []);

  const handleAddToCart = (item, index) => {
    const cart = JSON.parse(localStorage.getItem('cartItems')) || [];

    // Attach a unique ID if not already present
    const cartItem = {
      ...item,
      id: `${item.title}-${index}` // use title+index as unique ID
    };

    // Prevent duplicate addition
    const alreadyAdded = cart.find(i => i.id === cartItem.id);
    if (alreadyAdded) return;

    cart.push(cartItem);
    localStorage.setItem('cartItems', JSON.stringify(cart));
    setAddedToCart([...addedToCart, cartItem.id]);
    alert(`${item.title} added to cart`);
  };

  return (
    <>
     
      <section className="featured-section">
        <div className="container">
          <h2>Featured Items</h2>
          <div className="item-grid">
            {items.length === 0 ? (
              <p>No items listed yet.</p>
            ) : (
              items.map((item, index) => {
                const itemId = `${item.title}-${index}`;
                return (
                  <div className="item-card" key={itemId}>
                    {item.images && item.images.length > 0 && (
                      <img src={item.images[0]} alt="Item" className="item-image" />
                    )}
                    <h3>{item.title}</h3>
                    <p><strong>Price:</strong> Ksh {item.price}</p>
                    <p><strong>Location:</strong> {item.location}</p>
                    <p><strong>Condition:</strong> {item.condition}</p>
                    
                    <button
                      className="btn btn-sm btn-primary"
                      onClick={() => handleAddToCart(item, index)}
                      disabled={addedToCart.includes(itemId)}
                    >
                      {addedToCart.includes(itemId) ? 'Added to Cart' : 'Add to Cart'}
                    </button>
                  </div>
                );
              })
            )}
          </div>
        </div>
      </section>
      
    </>
  );
}

export default FeaturedItems;
