import React from 'react';
import Header from '../components/Header'; // Import Header
import Footer from '../components/Footer'; // Import Footer
import '../styles/styles.css';
import '../styles/modern.css';
import '../styles/sell.css'; // Import sell-specific CSS
function Sell(){
    return(
        <>
        <body>
        <Header />

         {/* Sell Item Section */}
      <section className="sell-section">
        <div className="container">
          <div className="sell-container">
            <div className="sell-header">
              <h2>Sell Your Item</h2>
              <p>Fill out the form below to list your item for sale.</p>
            </div>

            <form id="sell-form" className="sell-form">
              <div className="form-group">
                <label htmlFor="title">Item Title*</label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  required
                  placeholder="e.g., Apple MacBook Pro 2020"
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="category">Category*</label>
                  <select id="category" name="category" required defaultValue="">
                    <option value="" disabled>
                      Select a category
                    </option>
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
                  <select id="condition" name="condition" required defaultValue="">
                    <option value="" disabled>
                      Select condition
                    </option>
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
                  id="description"
                  name="description"
                  required
                  placeholder="Describe your item in detail. Include features, specifications, any defects or wear, etc."
                ></textarea>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="price">Price (ksh)*</label>
                  <input
                    type="number"
                    id="price"
                    name="price"
                    min="0.01"
                    step="0.01"
                    required
                    placeholder="e.g., 99.99"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="location">Location*</label>
                  <input
                    type="text"
                    id="location"
                    name="location"
                    required
                    placeholder="e.g., New York, NY"
                  />
                </div>
              </div>

              <div className="form-group">
                <label>Photos (Up to 5)*</label>
                <div className="image-upload" id="image-upload-area">
                  <i className="fas fa-cloud-upload-alt"></i>
                  <p>Drag and drop images here or click to browse</p>
                  <p className="small">Recommended size: at least 800x600px</p>
                  <input
                    type="file"
                    id="item-images"
                    name="images"
                    accept="image/ "
                    multiple
                  />
                </div>
                <div className="image-preview" id="image-preview"></div>
              </div>

              <div className="form-group">
                <label htmlFor="contact-preference">Contact Preference</label>
                <select id="contact-preference" name="contactPreference">
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
        </body>
        </>
    );
};
export default Sell;