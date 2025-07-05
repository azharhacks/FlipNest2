import React from 'react';
import Header from '../components/Header'; // Import Header
import Footer from '../components/Footer'; // Import Footer
import '../styles/styles.css';
import '../styles/modern.css';
import '../styles/categories.css'; // Import categories-specific CSS
// import categories-specific CSS if you have one, e.g., '../styles/categories.css';

const Categories = () => {
  return (
    <>
    <body>

      <Header />
    <section className="category-header">
        <div className="container">
          <h1 id="category-title">All Categories</h1>
          <div className="category-filters">
            <div className="filter-group">
              <label htmlFor="sort-by"><i className="fas fa-sort"></i> Sort By:</label>
              <select id="sort-by">
                <option value="newest">Newest First</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="popular">Most Popular</option>
              </select>
            </div>
            <div className="filter-group">
              <label htmlFor="condition"><i className="fas fa-tag"></i> Condition:</label>
              <select id="condition">
                <option value="all">All Conditions</option>
                <option value="new">New</option>
                <option value="like-new">Like New</option>
                <option value="good">Good</option>
                <option value="fair">Fair</option>
                <option value="poor">Poor</option>
              </select>
            </div>
            <div className="filter-group">
              <label htmlFor="price-range"><i className="fas fa-dollar-sign"></i> Price Range:</label>
              <select id="price-range">
                <option value="all">All Prices</option>
                <option value="0-50">0 - 5000</option>
                <option value="50-100">5000 - 10000</option>
                <option value="100-500">10000 - 50000</option>
                <option value="500-1000">50000 - 100000</option>
                <option value="1000+">100000+</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Categories List */}
      <section className="categories-list" id="all-categories">
        <div className="container">
          <div className="category-grid">

            {/* Category Cards */}
            {[
              {
                title: "Electronics",
                count: 42,
                img: "images/electronics.jpg",
                desc: "Computers, phones, TVs, and other electronic devices",
                link: "electronics"
              },
              {
                title: "Furniture",
                count: 28,
                img: "images/furniture.jpg",
                desc: "Sofas, tables, chairs, beds, and other home furniture",
                link: "furniture"
              },
              {
                title: "Clothing",
                count: 35,
                img: "images/clothing.jpg",
                desc: "Men's, women's, and children's clothing and accessories",
                link: "clothing"
              },
              {
                title: "Books",
                count: 19,
                img: "images/books.jpg",
                desc: "Fiction, non-fiction, textbooks, and more",
                link: "books"
              },
              {
                title: "Home & Garden",
                count: 23,
                img: "images/home-garden.jpg",
                desc: "Kitchen items, garden tools, and home decor",
                link: "home-garden"
              },
              {
                title: "Toys & Games",
                count: 17,
                img: "images/toys.jpg",
                desc: "Children's toys, board games, and collectibles",
                link: "toys"
              },
              {
                title: "Sports & Outdoors",
                count: 31,
                img: "images/sports.jpg",
                desc: "Sporting equipment, outdoor gear, and fitness items",
                link: "sports"
              },
              {
                title: "Automotive",
                count: 14,
                img: "images/automotive.jpg",
                desc: "Car parts, accessories, and tools",
                link: "automotive"
              }
            ].map((category, index) => (
              <div className="category-card" key={index}>
                <div className="category-count">
                  <i className="fas fa-box"></i> {category.count} items
                </div>
                <img
                  src={category.img}
                  alt={category.title}
                  onError={(e) =>
                    (e.target.src = `https://via.placeholder.com/300x180?text=${encodeURIComponent(category.title)}`)
                  }
                />
                <h3>{category.title}</h3>
                <p>{category.desc}</p>
                <a href={`categories.html?category=${category.link}`} className="btn btn-primary">
                  Browse {category.title}
                </a>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* Category Products (when selected) */}
      <section className="category-products" id="category-products-section">
        <div className="container">
          <div className="product-grid" id="category-products">
            {/* Products will be loaded dynamically */}
            <div className="loading">
              <i className="fas fa-spinner fa-spin"></i> Loading products...
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </body>
    </>
  );
};

export default Categories;