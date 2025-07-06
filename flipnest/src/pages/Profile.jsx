import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/styles.css';
import '../styles/modern.css';
import '../styles/profile.css';
import { saveLoggedInUser, getLoggedInUser } from '../utils/auth';


function Profile() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('loggedInUser'));
    if (!storedUser) {
      navigate('/register'); // redirect to login if no user is logged in
     
    } else {
      setUser(storedUser);
    }
  }, [navigate]);

  if (!user) return null;

  return (
    <>
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
                    <h2 id="profile-name">{user.firstName} {user.lastName}</h2>
                    <p id="profile-email">{user.email}</p>
                  </div>
                </div>

                <div className="profile-actions">
                  <button className="btn btn-primary">
                    <i className="fas fa-user-edit"></i> Edit Profile
                  </button>
                  <button className="btn btn-secondary">
                    <i className="fas fa-store"></i> Become a Seller
                  </button>
                </div>
              </div>

              <div className="profile-nav">
                <ul>
                  <li><a href="#" className="active"><i className="fas fa-list"></i> My Listings</a></li>
                  <li><a href="#"><i className="fas fa-shopping-bag"></i> Purchases</a></li>
                  <li><a href="#"><i className="fas fa-heart"></i> Favorites</a></li>
                  <li><Link to="/messages"><i className="fas fa-envelope"></i> Messages</Link></li>
                  <li><a href="#"><i className="fas fa-cog"></i> Settings</a></li>
                </ul>
              </div>
            </div>

            {/* Profile Content */}
            <div className="profile-content">
              <div className="tab-content active" id="my-listings">
                <div className="profile-card">
                  <h3 className="section-title">
                    My Listings
                    <Link to="/sell" className="btn btn-primary btn-small">
                      <i className="fas fa-plus"></i> Add New
                    </Link>
                  </h3>
                  <div className="listings-grid">
                    <p className="no-listings">You don't have any listings yet.</p>
                  </div>
                </div>
              </div>
              {/* You can add tabs for Purchases, Favorites, etc., like before */}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Profile;
