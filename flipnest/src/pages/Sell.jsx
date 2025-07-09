import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/styles.css';
import '../styles/modern.css';
import '../styles/sell.css';

function Sell() {
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    condition: '',
    description: '',
    price: '',
    location: '',
    contactPreference: 'app-messaging',
    images: []
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'images') {
      setFormData({ ...formData, images: Array.from(files).map(file => URL.createObjectURL(file)) });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const storedItems = JSON.parse(localStorage.getItem('listedItems')) || [];
    storedItems.push(formData);
    localStorage.setItem('listedItems', JSON.stringify(storedItems));

    alert("Item listed successfully!");
    setFormData({
      title: '',
      category: '',
      condition: '',
      description: '',
      price: '',
      location: '',
      contactPreference: 'app-messaging',
      images: []
    });
  };

  return (
    <>
      <Header />
      <section className="sell-section">
        <div className="container">
          <div className="sell-container">
            <div className="sell-header">
              <h2>Sell Your Item</h2>
              <p>Fill out the form below to list your item for sale.</p>
            </div>

            <form className="sell-form" onSubmit={handleSubmit}>
              {/* Input Fields (same as before) */}
              <div className="form-group">
                <label htmlFor="title">Item Title*</label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  required
                  placeholder="e.g., Apple MacBook Pro 2020"
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="category">Category*</label>
                  <select name="category" value={formData.category} onChange={handleChange} required>
                    <option value="" disabled>Select a category</option>
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

                <div className="form-group">
                  <label htmlFor="condition">Condition*</label>
                  <select name="condition" value={formData.condition} onChange={handleChange} required>
                    <option value="" disabled>Select condition</option>
                    <option value="New">New</option>
                    <option value="Like New">Like New</option>
                    <option value="Excellent">Excellent</option>
                    <option value="Good">Good</option>
                    <option value="Fair">Fair</option>
                    <option value="Poor">Poor</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="description">Description*</label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  required
                  placeholder="Describe your item in detail"
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="price">Price (Ksh)*</label>
                  <input
                    type="number"
                    name="price"
                    value={formData.price}
                    onChange={handleChange}
                    min="0.00"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="location">Location*</label>
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label>Photos (Up to 5)*</label>
                <input
                  type="file"
                  name="images"
                  accept="image/*"
                  multiple
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="contactPreference">Contact Preference</label>
                <select name="contactPreference" value={formData.contactPreference} onChange={handleChange}>
                  <option value="app-messaging">App Messaging (Default)</option>
                  <option value="email">Email</option>
                  <option value="phone">Phone</option>
                </select>
              </div>

              <button type="submit" className="btn btn-primary btn-block">
                List Item for Sale
              </button>
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Sell;
