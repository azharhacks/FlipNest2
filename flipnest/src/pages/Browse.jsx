import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/styles.css';
import '../styles/browse.css';
import '../styles/modern.css';

const Browse = () => {
  return (
    <>
      <Header />

     {/* Browse Section */}
       <section className="browse-section">
        <div className="container">
          <div className="browse-container">
            <div className="browse-header">
              <h2>Browse Items</h2>
              <p>Find great deals on second-hand items from our community of sellers.</p>
            </div>

            <div className="filters">
              <div className="filter-group">
                <label htmlFor="category-filter">Category</label>
                <select id="category-filter">
                  <option value="all">All Categories</option>
                  <option value="electronics">Electronics</option>
                  <option value="furniture">Furniture</option>
                  <option value="clothing">Clothing</option>
                  <option value="books">Books</option>
                  <option value="home-garden">Home & Garden</option>
                  <option value="toys">Toys & Games</option>
                  <option value="sports">Sports & Outdoors</option>
                  <option value="automotive">Automotive</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="filter-group">
                <label>Price Range</label>
                <div className="price-range">
                  <input type="number" id="min-price" placeholder="Min $" min="0" />
                  <input type="number" id="max-price" placeholder="Max $" min="0" />
                </div>
              </div>

              <div className="filter-group">
                <label htmlFor="condition-filter">Condition</label>
                <select id="condition-filter">
                  <option value="all">All Conditions</option>
                  <option value="New">New</option>
                  <option value="Like New">Like New</option>
                  <option value="Excellent">Excellent</option>
                  <option value="Good">Good</option>
                  <option value="Fair">Fair</option>
                  <option value="Poor">Poor</option>
                </select>
              </div>

              <div className="filter-group">
                <label htmlFor="sort-filter">Sort By</label>
                <select id="sort-filter">
                  <option value="newest">Newest First</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                </select>
              </div>
            </div>

            <div id="product-container">
              {/* Products will be loaded dynamically */}
            </div>

            <div className="pagination" id="pagination">
              {/* Pagination will be added dynamically */}
            </div>
          </div>
        </div>
      </section>

          {/* ... All your Browse content ... */}
        

      <Footer />
    </>
  );
};

export default Browse;
