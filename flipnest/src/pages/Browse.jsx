import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/styles.css';
import '../styles/browse.css';
import '../styles/modern.css';




const Browse = () => {
  const [products, setProducts] = useState([]);
  const [filters, setFilters] = useState({
    category: 'all',
    condition: 'all',
    sort: 'newest',
    minPrice: '',
    maxPrice: '',
    search: ''
  });
  const [cartCount, setCartCount] = useState(0);
  const [user, setUser] = useState(null);

  // Load products and user on mount
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    setUser(storedUser);

    const storedProducts = JSON.parse(localStorage.getItem('products')) || [];
    setProducts(storedProducts.length ? storedProducts : window.sampleProducts || []);

    updateCartCount();
  }, []);

  useEffect(() => {
    updateCartCount();
  }, [products]);

  const updateCartCount = () => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const count = cart.reduce((total, item) => total + item.quantity, 0);
    setCartCount(count);
  };

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters(prev => ({ ...prev, [name]: value }));
  };

  const filteredProducts = () => {
    return products
      .filter(product => {
        const { category, condition, minPrice, maxPrice, search } = filters;
        if (category !== 'all' && product.category !== category) return false;
        if (condition !== 'all' && product.condition !== condition) return false;
        if (minPrice && product.price < parseFloat(minPrice)) return false;
        if (maxPrice && product.price > parseFloat(maxPrice)) return false;
        if (search && !product.title.toLowerCase().includes(search.toLowerCase()) &&
            !product.description.toLowerCase().includes(search.toLowerCase())) return false;
        return true;
      })
      .sort((a, b) => {
        switch (filters.sort) {
          case 'price-asc': return a.price - b.price;
          case 'price-desc': return b.price - a.price;
          case 'newest': default: return b.id - a.id;
        }
      });
  };

  const addToCart = (productId) => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const existing = cart.find(item => item.id === productId);
    if (existing) {
      existing.quantity += 1;
    } else {
      const product = products.find(p => p.id === productId);
      if (product) {
        cart.push({ ...product, quantity: 1 });
      }
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    alert('Item added to cart!');
  };

  return (
    <div className="browse-page">
      <div className="filters">
        <input name="search" placeholder="Search..." value={filters.search} onChange={handleFilterChange} />
        <select name="category" value={filters.category} onChange={handleFilterChange}>
          <option value="all">All Categories</option>
          <option value="Electronics">Electronics</option>
          <option value="Clothing">Clothing</option>
          {/* Add more options */}
        </select>
        <select name="condition" value={filters.condition} onChange={handleFilterChange}>
          <option value="all">All Conditions</option>
          <option value="new">New</option>
          <option value="used">Used</option>
        </select>
        <input name="minPrice" type="number" placeholder="Min Price" value={filters.minPrice} onChange={handleFilterChange} />
        <input name="maxPrice" type="number" placeholder="Max Price" value={filters.maxPrice} onChange={handleFilterChange} />
        <select name="sort" value={filters.sort} onChange={handleFilterChange}>
          <option value="newest">Newest</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
        </select>
      </div>

      <div className="cart-count">Cart: {cartCount}</div>

      <div className="product-grid">
        {filteredProducts().length === 0 ? (
          <div className="no-results">No items found.</div>
        ) : (
          filteredProducts().map(product => (
            <div className="product-card" key={product.id}>
              <img src={product.image} alt={product.title} onError={(e) => (e.target.src = 'https://via.placeholder.com/300x200?text=FlipNest')} />
              <h3>{product.title}</h3>
              <p>Seller: {product.seller}</p>
              <p>Condition: {product.condition}</p>
              <p>${product.price.toFixed(2)}</p>
              <button onClick={() => addToCart(product.id)}>Add to Cart</button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Browse;

