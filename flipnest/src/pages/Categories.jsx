import React from 'react';
import Header from '../components/Header'; // Import Header
import Footer from '../components/Footer'; // Import Footer
import '../styles/styles.css';
import '../styles/modern.css';
// import categories-specific CSS if you have one, e.g., '../styles/categories.css';

const Categories = () => {
  return (
    <>
      <Header />
      <section className="categories-section">
        <div className="container">
          <h2>Categories</h2>
          <p>Explore items by category.</p>
          {/* Add your categories content here */}
          <div className="category-grid">
            <div className="category-card">
              <h3>Electronics</h3>
              <p>Smartphones, Laptops, Gadgets</p>
            </div>
            <div className="category-card">
              <h3>Furniture</h3>
              <p>Sofas, Tables, Chairs</p>
            </div>
            <div className="category-card">
              <h3>Clothing</h3>
              <p>Apparel, Accessories, Footwear</p>
            </div>
            {/* Add more category cards */}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Categories;