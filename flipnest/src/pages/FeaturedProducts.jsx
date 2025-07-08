// src/components/FeaturedProducts.jsx
import React, { useEffect, useState } from 'react';

const sampleProducts = [
  {
    id: 1,
    title: 'Apple MacBook Pro 2020',
    description: 'Barely used MacBook Pro with M1 chip, 8GB RAM, 256GB SSD. In excellent condition.',
    price: 89999,
    seller: 'Azhar Abeid',
    location: 'Nairobi, NBO',
    date: '2025-05-20',
    category: 'electronics',
    image: 'images/apple mackbook.jpg',
    condition: 'Like New',
  },
  {
    id: 2,
    title: 'Vintage Leather Sofa',
    description: 'Beautiful vintage leather sofa in brown. Some wear but in good condition. Very comfortable.',
    price: 35000,
    seller: 'Sarah Murigi',
    location: 'Mombasa, MSA',
    date: '2025-05-18',
    category: 'furniture',
    image: 'images/vintagesofa.jpg',
    condition: 'Good',
  },
  {
        id: 3,
        title: "Canon EOS 5D Mark IV",
        description: "Professional DSLR camera with 24-70mm lens. Low shutter count, includes carrying case.",
        price: 120000,
        seller: "Mumtaaz Abdinur",
        location: "Mandera",
        date: "2025-05-21",
        category: "electronics",
        image: "images/camera.jpg",
        condition: "Excellent"
    },
    {
        id: 4,
        title: "Designer Dress - Size M",
        description: "Brand name designer dress, only worn once for a special occasion. Original price 30000 ksh.",
        price: 8500,
        seller: "Stacy Wanjiku",
        location: "Kisumu, KSM",
        date: "2025-05-19",
        category: "clothing",
        image: "images/dress.jpg",
        condition: "Like New"
    },
    {
        id: 5,
        title: "Harry Potter Complete Book Set",
        description: "All 7 Harry Potter books in hardcover. Some minor wear on the covers but pages are in perfect condition.",
        price: 6500,
        seller: "Affan Abubakar",
        location: "Nairobi, NBO",
        date: "2025-05-17",
        category: "books",
        image: "images/books.jpg",
        condition: "Good"
    },
    {
        id: 6,
        title: "Dining Table with 4 Chairs",
        description: "Solid wood dining table set. Table is 60\" x 36\" and comes with 4 matching chairs.",
        price: 22000,
        seller: "Ralph Mwangi",
        location: "Thika, THK",
        date: "2025-05-16",
        category: "furniture",
        image: "images/diningtable.jpg",
        condition: "Good"
    }
];

const FeaturedProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(sampleProducts);
    updateCartCount(); // Optional: update cart badge on load
  }, []);

  const addToCart = (product) => {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const existingIndex = cart.findIndex((item) => item.id === product.id);

    if (existingIndex !== -1) {
      cart[existingIndex].quantity += 1;
    } else {
      cart.push({ ...product, quantity: 1 });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${product.title} added to cart!`);
    updateCartCount();
  };

  const updateCartCount = () => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const total = cart.reduce((sum, item) => sum + item.quantity, 0);
    const countElement = document.querySelector('.cart-count');
    if (countElement) {
      countElement.textContent = total;
      countElement.style.display = total > 0 ? 'inline-block' : 'none';
    }
  };

  return (
    <div id="featured-products" className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
      {products.map((product) => {
        const formattedPrice = `KSH ${product.price.toLocaleString()}`;
        const formattedDate = new Date(product.date).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'short',
          day: 'numeric',
        });

        return (
          <div key={product.id} className="border rounded-xl overflow-hidden shadow-md product-card">
            <div className="relative">
              <img
                src={product.image}
                alt={product.title}
                onError={(e) => (e.target.src = 'https://via.placeholder.com/300x220?text=Product+Image')}
                className="w-full h-48 object-cover"
              />
              <div className="absolute bottom-2 right-2 bg-black text-white text-xs px-2 py-1 rounded">
                {formattedPrice}
              </div>
            </div>
            <div className="p-4 space-y-2">
              <h3 className="font-semibold text-lg">{product.title}</h3>
              <p className="text-sm text-gray-600">{product.description.substring(0, 100)}...</p>
              <p className="text-sm text-gray-500">Seller: {product.seller}</p>
              <p className="text-sm text-gray-500">
                <i className="fas fa-map-marker-alt"></i> {product.location} |{' '}
                <i className="far fa-calendar-alt"></i> {formattedDate}
              </p>
              <p className="text-sm">Condition: {product.condition}</p>
              <div className="flex gap-2 mt-2">
                <a
                  href={`product-details.html?id=${product.id}`}
                  className="px-4 py-1 bg-blue-600 text-white text-sm rounded"
                >
                  View Details
                </a>
                <button
                  onClick={() => addToCart(product)}
                  className="px-4 py-1 bg-green-600 text-white text-sm rounded"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FeaturedProducts;
