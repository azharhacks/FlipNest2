import React from 'react';
import Header from '../components/Header'; // Import Header
import Footer from '../components/Footer'; // Import Footer
import '../styles/styles.css';
import '../styles/modern.css';
// import home-specific CSS if you have one, e.g., '../styles/home.css';

const Home = () => {
  return (
    <>
    <body>
      <Header />
      <section className="hero-section">
        <div className="container">
          <h1>Declutter Your Life, Discover New Treasures</h1>
          <p>Buy and sell pre-loved items easily and sustainably.</p>
          <div className="hero-actions">
            <a href="/browse" className="btn btn-primary">Browse Items</a>
            <a href="/sell" className="btn btn-secondary">Sell Your Items</a>
          </div>
        </div>
      </section>

      <section className="features-section">
        <div className="container">
          <h2>Why Choose FlipNest?</h2>
          <div className="feature-grid">
            <div className="feature-card">
              <h3>Sustainable Shopping</h3>
              <p>Give items a second life and reduce waste.</p>
            </div>
            <div className="feature-card">
              <h3>Easy Selling</h3>
              <p>List your items in minutes with our user-friendly tools.</p>
            </div>
            <div className="feature-card">
              <h3>Community Focused</h3>
              <p>Connect with local buyers and sellers.</p>
            </div>
          </div>
        </div>
      </section>
      {/* Add more home page sections as needed */}
      <Footer />
      </body>
    </>
  );
};

export default Home;