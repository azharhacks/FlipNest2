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
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'images') {
      // Create object URLs for image preview
      setFormData({ ...formData, images: Array.from(files).map(file => URL.createObjectURL(file)) });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Generate a unique ID for the item
    const itemId = `item-${Date.now()}-${Math.floor(Math.random() * 1000)}`;
    
    // Get current date in ISO format
    const currentDate = new Date().toISOString().split('T')[0];
    
    // Get user info from localStorage (if available)
    const user = JSON.parse(localStorage.getItem('loggedInUser')) || { name: 'Anonymous Seller' };
    
    // Create the new item with all required fields
    const newItem = {
      id: itemId,
      title: formData.title,
      category: formData.category,
      condition: formData.condition,
      description: formData.description,
      price: formData.price,
      location: formData.location,
      contactPreference: formData.contactPreference,
      images: formData.images,
      seller: user.name,
      date: currentDate
    };

    // Add to localStorage
    const storedItems = JSON.parse(localStorage.getItem('listedItems')) || [];
    storedItems.push(newItem);
    localStorage.setItem('listedItems', JSON.stringify(storedItems));

    // Show success message and reset form
    setSubmitSuccess(true);
    setIsSubmitting(false);
    
    setTimeout(() => {
      setSubmitSuccess(false);
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
    }, 3000);
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

            {submitSuccess && (
              <div className="success-message">
                <p>Your item has been listed successfully! It will now appear in the listings.</p>
              </div>
            )}

            <form className="sell-form" onSubmit={handleSubmit}>
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
                  placeholder="Describe your item in detail. Include features, defects, age, etc."
                ></textarea>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="price">Price (Ksh)*</label>
                  <input
                    type="text"
                    name="price"
                    value={formData.price}
                    onChange={handleChange}
                    required
                    placeholder="e.g., 25,000"
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
                    placeholder="e.g., Nairobi"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="contactPreference">Contact Preference</label>
                <select name="contactPreference" value={formData.contactPreference} onChange={handleChange}>
                  <option value="app-messaging">App Messaging</option>
                  <option value="email">Email</option>
                  <option value="phone">Phone</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="images">Upload Images</label>
                <input
                  type="file"
                  name="images"
                  onChange={handleChange}
                  multiple
                  accept="image/*"
                />
                <small>You can upload multiple images. First image will be the main image.</small>
              </div>

              {formData.images.length > 0 && (
                <div className="image-preview">
                  {formData.images.map((image, index) => (
                    <img key={index} src={image} alt={`Preview ${index + 1}`} />
                  ))}
                </div>
              )}

              <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
                {isSubmitting ? 'Listing Item...' : 'List Item'}
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
