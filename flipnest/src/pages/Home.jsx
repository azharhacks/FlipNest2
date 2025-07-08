import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import Header from '../components/Header'; // Import Header
import Footer from '../components/Footer'; // Import Footer
import '../styles/styles.css';
import '../styles/modern.css';
import FeaturedProducts from './FeaturedProducts';




const Home = () => {
  return (
    <>
    
        <Header />
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h2>Buy and Sell Second-Hand Items</h2>
            <p>Find great deals on used items or sell your unused stuff!</p>
            <div className="hero-buttons">
              <Link to="/browse" className="btn btn-primary">Browse Items</Link>
              <Link to="/sell" className="btn btn-secondary">Start Selling</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="categories">
        <div className="container">
          <h2 className="section-title">Browse Categories</h2>
          <div className="category-grid">
            {[
              { name: "Electronics", img: "electronics.jpg" },
              { name: "Furniture", img: "furniture.jpg" },
              { name: "Clothing", img: "clothes.jpg" },
              { name: "Books", img: "books.jpg" }
            ].map((cat, index) => (
              <div className="category-card" key={index}>
                <img
                  src={process.env.PUBLIC_URL + "/images/" + cat.img}
                  alt={cat.name}
                  onError={(e) => {
                    e.target.src = `https://via.placeholder.com/300x180?text=${cat.name}`;
                  }}
                />
                <h3>{cat.name}</h3>
                <Link to={`/categories?category=${cat.name.toLowerCase()}`} className="btn btn-small">Browse</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="featured-products">
        <div className="container">
          <h2 className="section-title">Featured Items</h2>
          
            <FeaturedProducts />
          
        </div>
      </section>

      {/* How It Works */}
      <section className="how-it-works">
        <div className="container">
          <h2 className="section-title">How It Works</h2>
          <div className="steps">
            {[
              { icon: "fa-user-plus", title: "Create an Account", desc: "Sign up for free and join our community of buyers and sellers." },
              { icon: "fa-camera", title: "List Your Items", desc: "Take photos, set prices, and create listings for your unused items." },
              { icon: "fa-comments", title: "Connect with Buyers", desc: "Communicate with interested buyers through our messaging system." },
              { icon: "fa-dollar-sign", title: "Get Paid", desc: "Complete the sale and receive payment securely through our platform." }
            ].map((step, i) => (
              <div className="step" key={i}>
                <div className="step-icon">
                  <i className={`fas ${step.icon}`}></i>
                </div>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials">
        <div className="container">
          <h2 className="section-title">What Our Users Say</h2>
          <div className="testimonial-slider">
            {[
              {
                text: `"I sold my old laptop in just 2 days! The process was so easy and the buyer was great."`,
                img: "user1.jpg",
                name: "Sarah Johnson",
                role: "Seller"
              },
              {
                text: `"Found a barely used coffee machine for half the retail price. Excellent condition and fast shipping!"`,
                img: "user2.jpg",
                name: "Michael Brown",
                role: "Buyer"
              }
            ].map((review, i) => (
              <div className="testimonial" key={i}>
                <div className="testimonial-content">
                  <p>{review.text}</p>
                </div>
                <div className="testimonial-author">
                  <img
                    src={process.env.PUBLIC_URL + "/images/" + review.img}
                    alt="User"
                    onError={(e) => {
                      e.target.src = "https://via.placeholder.com/50x50?text=User";
                    }}
                  />
                  <div className="author-info">
                    <h4>{review.name}</h4>
                    <p>{review.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
    </>
  );
};

export default Home;
