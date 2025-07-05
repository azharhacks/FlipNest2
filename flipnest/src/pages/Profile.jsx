import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom'; // Import Link for navigation
import Messages from './Messages';
import '../styles/styles.css';
import '../styles/modern.css';
import '../styles/profile.css'; // Import profile-specific CSS  
function Profile (){
    return (
        <>
        <body>
        <Header />
       <section className="profile-section">
        <div className="container">
          <div className="profile-container">
            {/* Profile Sidebar */}
            <div className="profile-sidebar">
              <div className="profile-card">
                <div className="profile-header">
                  <div className="profile-avatar">
                    <img
                      src="/images/avatar.jpg"
                      alt="Profile"
                      onError={(e) =>
                        (e.target.src =
                          'https://via.placeholder.com/100x100?text=User')
                      }
                    />
                  </div>
                  <div className="profile-info">
                    <h2 id="profile-name">Azhar Abeid</h2>
                    <p id="profile-email">azharabeid@gmail.com</p>
                  </div>
                </div>

                <div className="profile-stats">
                  <div className="stat-item">
                    <div className="stat-value" id="listings-count">0</div>
                    <div className="stat-label">Listings</div>
                  </div>
                  <div className="stat-item">
                    <div className="stat-value" id="sold-count">0</div>
                    <div className="stat-label">Sold</div>
                  </div>
                  <div className="stat-item">
                    <div className="stat-value" id="rating">0.0</div>
                    <div className="stat-label">Rating</div>
                  </div>
                </div>

                <div className="profile-actions">
                  <button className="btn btn-primary" id="edit-profile-btn">
                    <i className="fas fa-user-edit"></i> Edit Profile
                  </button>
                  <button className="btn btn-secondary" id="become-seller-btn">
                    <i className="fas fa-store"></i> Become a Seller
                  </button>
                </div>
              </div>

              <div className="profile-nav">
                <ul>
                  <li>
                    <a href="#" className="active" data-tab="my-listings">
                      <i className="fas fa-list"></i> My Listings
                    </a>
                  </li>
                  <li>
                    <a href="#" data-tab="purchases">
                      <i className="fas fa-shopping-bag"></i> Purchases
                    </a>
                  </li>
                  <li>
                    <a href="#" data-tab="favorites">
                      <i className="fas fa-heart"></i> Favorites
                    </a>
                  </li>
                  <li>
                        <li><Link to="/Messages"><i class="fas fa-envelope"></i> Messages</Link></li>
                      <i className="fas fa-envelope"></i> Messages
                    
                  </li>
                  <li>
                    <a href="#" data-tab="settings">
                      <i className="fas fa-cog"></i> Settings
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Profile Content */}
            <div className="profile-content">
              {/* My Listings Tab */}
              <div className="tab-content active" id="my-listings">
                <div className="profile-card">
                  <h3 className="section-title">
                    My Listings
                    <a href="/sell" className="btn btn-primary btn-small">
                      <i className="fas fa-plus"></i> Add New
                    </a>
                  </h3>
                  <div className="listings-grid" id="listings-grid">
                    <p className="no-listings">
                      You don't have any listings yet.
                    </p>
                  </div>
                </div>
              </div>

              {/* Purchases Tab */}
              <div className="tab-content" id="purchases">
                <div className="profile-card">
                  <h3 className="section-title">My Purchases</h3>
                  <div className="purchases-list" id="purchases-list">
                    <p className="no-purchases">
                      You haven't made any purchases yet.
                    </p>
                  </div>
                </div>
              </div>

              {/* Favorites Tab */}
              <div className="tab-content" id="favorites">
                <div className="profile-card">
                  <h3 className="section-title">My Favorites</h3>
                  <div className="listings-grid" id="favorites-grid">
                    <p className="no-favorites">
                      You don't have any favorites yet.
                    </p>
                  </div>
                </div>
              </div>

              {/* Messages Tab */}
              <div className="tab-content" id="messages">
                <div className="profile-card">
                  <h3 className="section-title">My Messages</h3>
                  <div className="messages-list" id="messages-list">
                    <p className="no-messages">
                      You don't have any messages yet.
                    </p>
                  </div>
                </div>
              </div>

              {/* Settings Tab */}
              <div className="tab-content" id="settings">
                <div className="profile-card">
                  <h3 className="section-title">Account Settings</h3>
                  <form id="settings-form">
                    <div className="form-row">
                      <div className="form-group">
                        <label htmlFor="first-name">First Name</label>
                        <input
                          type="text"
                          id="first-name"
                          name="firstName"
                          placeholder="Your first name"
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="last-name">Last Name</label>
                        <input
                          type="text"
                          id="last-name"
                          name="lastName"
                          placeholder="Your last name"
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Your email address"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="phone">Phone Number</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        placeholder="Your phone number"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="address">Address</label>
                      <textarea
                        id="address"
                        name="address"
                        rows="3"
                        placeholder="Your address"
                      ></textarea>
                    </div>
                    <div className="form-group">
                      <label htmlFor="current-password">Current Password</label>
                      <input
                        type="password"
                        id="current-password"
                        name="currentPassword"
                        placeholder="Enter your current password"
                      />
                    </div>
                    <div className="form-row">
                      <div className="form-group">
                        <label htmlFor="new-password">New Password</label>
                        <input
                          type="password"
                          id="new-password"
                          name="newPassword"
                          placeholder="Enter new password"
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="confirm-password">Confirm Password</label>
                        <input
                          type="password"
                          id="confirm-password"
                          name="confirmPassword"
                          placeholder="Confirm new password"
                        />
                      </div>
                    </div>
                    <button type="submit" className="btn btn-primary">
                      Save Changes
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
        <Footer />
        </body>
        </>
    );
};
export default Profile;