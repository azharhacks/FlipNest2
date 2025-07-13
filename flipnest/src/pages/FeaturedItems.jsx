import React, { useEffect, useState } from 'react';
import '../styles/styles.css';
import '../styles/modern.css';

function FeaturedItems() {
  const [items, setItems] = useState([]);
  const [addedToCart, setAddedToCart] = useState([]);

  // Demo featured items that will always be displayed
  const demoItems = [
    {
      id: 'demo-1',
      title: 'iPhone 13 Pro',
      price: '85,000',
      location: 'Nairobi',
      condition: 'Like New',
      seller: 'John Doe',
      date: '2025-07-01',
      description: 'Barely used iPhone 13 Pro, 256GB storage, with original accessories.',
      images: ['https://images.unsplash.com/photo-1632661674596-df8be070a5c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aXBob25lJTIwMTMlMjBwcm98ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60']
    },
    {
      id: 'demo-2',
      title: 'Sony PlayStation 5',
      price: '65,000',
      location: 'Mombasa',
      condition: 'Good',
      seller: 'Jane Smith',
      date: '2025-07-02',
      description: 'PS5 console with 2 controllers and 3 games included.',
      images: ['https://images.unsplash.com/photo-1607853202273-797f1c22a38e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGxheXN0YXRpb24lMjA1fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60']
    },
    {
      id: 'demo-3',
      title: 'Wooden Dining Table',
      price: '25,000',
      location: 'Kisumu',
      condition: 'Excellent',
      seller: 'Mike Johnson',
      date: '2025-07-03',
      description: 'Solid mahogany dining table with 6 chairs, minimal wear.',
      images: ['https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZGluaW5nJTIwdGFibGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60']
    },
    {
      id: 'demo-4',
      title: 'MacBook Air M2',
      price: '120,000',
      location: 'Nakuru',
      condition: 'New',
      seller: 'Sarah Williams',
      date: '2025-07-04',
      description: 'Brand new MacBook Air with M2 chip, 16GB RAM, 512GB SSD.',
      images: ['https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bWFjYm9vayUyMGFpcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60']
    },
    {
      id: 'demo-5',
      title: 'Canon EOS R5 Camera',
      price: '350,000',
      location: 'Eldoret',
      condition: 'Like New',
      seller: 'David Chen',
      date: '2025-07-05',
      description: 'Professional mirrorless camera with 45MP sensor and 8K video recording.',
      images: ['https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2Fub24lMjBjYW1lcmF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60']
    },
    {
      id: 'demo-6',
      title: 'Leather Sofa Set',
      price: '75,000',
      location: 'Nairobi',
      condition: 'Good',
      seller: 'Emily Wong',
      date: '2025-07-06',
      description: 'Genuine leather 3-seater sofa with two matching armchairs.',
      images: ['https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c29mYXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60']
    }
  ];

  useEffect(() => {
    // Get any additional items from localStorage
    const storedItems = localStorage.getItem('listedItems');
    let parsedItems = [];
    
    if (storedItems) {
      try {
        parsedItems = JSON.parse(storedItems);
      } catch (error) {
        console.error('Error parsing stored items:', error);
      }
    }
    
    // Combine demo items with any items from localStorage
    // Only take the first 4 items from localStorage to keep the display manageable
    const combinedItems = [...demoItems, ...parsedItems.slice(0, 4)];
    setItems(combinedItems);

    // Track already added cart items
    const cart = JSON.parse(localStorage.getItem('cartItems')) || [];
    const addedIds = cart.map(item => item.id);
    setAddedToCart(addedIds);
  }, []);

  const handleAddToCart = (item) => {
    const cart = JSON.parse(localStorage.getItem('cartItems')) || [];
    
    // Prevent duplicate addition
    const alreadyAdded = cart.find(i => i.id === item.id);
    if (alreadyAdded) return;
    
    cart.push(item);
    localStorage.setItem('cartItems', JSON.stringify(cart));
    setAddedToCart([...addedToCart, item.id]);
    alert(`${item.title} added to cart`);
  };

  // Styles for the container and cards
  const sectionStyle = {
    padding: '40px 0',
    textAlign: 'center'
  };

  const headingStyle = {
    textAlign: 'center',
    marginBottom: '30px',
    fontSize: '24px',
    fontWeight: '500'
  };

  const cardContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: '20px',
    padding: '20px 0'
  };

  const cardStyle = {
    width: '220px',
    height: '350px',
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    cursor: 'pointer',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column'
  };

  const imageContainerStyle = {
    height: '160px',
    overflow: 'hidden'
  };

  const imageStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'transform 0.5s ease'
  };

  const contentStyle = {
    padding: '12px',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    flex: 1
  };

  const titleStyle = {
    fontSize: '16px',
    fontWeight: '500',
    margin: '0 0 8px 0',
    color: '#333'
  };

  const buttonStyle = {
    backgroundColor: '#ff6b6b',
    color: 'white',
    border: 'none',
    padding: '6px 12px',
    borderRadius: '4px',
    fontWeight: '500',
    textTransform: 'uppercase',
    fontSize: '12px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease'
  };

  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <section style={sectionStyle}>
      <div className="container">
        <h2 style={headingStyle}>Featured Items</h2>
        
        <div style={cardContainerStyle}>
          {items.map((item) => (
            <div 
              key={item.id} 
              style={{
                ...cardStyle,
                ...(hoveredCard === item.id ? { transform: 'translateY(-5px)', boxShadow: '0 5px 15px rgba(0,0,0,0.1)' } : {})
              }}
              onMouseEnter={() => setHoveredCard(item.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div style={imageContainerStyle}>
                {item.images && item.images.length > 0 && (
                  <img 
                    src={item.images[0]} 
                    alt={item.title} 
                    style={{
                      ...imageStyle,
                      transform: hoveredCard === item.id ? 'scale(1.05)' : 'scale(1)'
                    }} 
                  />
                )}
              </div>
              <div style={contentStyle}>
                <h3 style={titleStyle}>{item.title}</h3>
                <p style={{ margin: '2px 0', color: '#666', fontSize: '13px' }}><strong>Price:</strong> Ksh {item.price}</p>
                <p style={{ margin: '2px 0', color: '#666', fontSize: '13px' }}><strong>Location:</strong> {item.location}</p>
                <p style={{ margin: '2px 0', color: '#666', fontSize: '13px' }}><strong>Condition:</strong> {item.condition}</p>
                
                <button
                  style={{
                    ...buttonStyle,
                    backgroundColor: addedToCart.includes(item.id) ? '#4CAF50' : '#ff6b6b',
                    opacity: addedToCart.includes(item.id) ? 0.8 : 1,
                    marginTop: 'auto'
                  }}
                  onClick={() => handleAddToCart(item)}
                  disabled={addedToCart.includes(item.id)}
                >
                  {addedToCart.includes(item.id) ? 'Added to Cart' : 'Add to Cart'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedItems;
