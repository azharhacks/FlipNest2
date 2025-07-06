import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/styles.css';
import '../styles/modern.css';
import '../styles/auth.css';
import { saveLoggedInUser, getLoggedInUser } from '../utils/auth';


function Register() {
  const navigate = useNavigate();

  // Form state
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreeTerms: false,
  });

  // Error message state
  const [error, setError] = useState('');

  // Handle input changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    const { firstName, lastName, email, password, confirmPassword, agreeTerms } = formData;

    // Basic validation
    if (!firstName || !lastName || !email || !password || !confirmPassword) {
      return setError('Please fill in all fields.');
    }

    if (password !== confirmPassword) {
      return setError('Passwords do not match.');
    }

    if (!agreeTerms) {
      return setError('You must agree to the terms.');
    }

    // Check if email already exists
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const emailExists = users.some((u) => u.email === email);

    if (emailExists) {
      return setError('Email already exists.');
    }

    // Save new user
    const newUser = {
      id: Date.now(),
      firstName,
      lastName,
      email,
      password, 
    };

    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));

    // Redirect to login
    navigate('/login');
  };

  return (
    <>
      <Header />

      <section className="auth-section">
        <div className="container">
          <div className="auth-container">
            <div className="auth-header">
              <h2>Create an Account</h2>
              <p>Join our community to buy and sell second-hand items!</p>
            </div>

            {error && <div className="error-message show">{error}</div>}

            <form id="register-form" className="auth-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="first-name">First Name</label>
                <input type="text" id="first-name" name="firstName" value={formData.firstName} onChange={handleChange} required />
              </div>

              <div className="form-group">
                <label htmlFor="last-name">Last Name</label>
                <input type="text" id="last-name" name="lastName" value={formData.lastName} onChange={handleChange} required />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
              </div>

              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} required />
              </div>

              <div className="form-group">
                <label htmlFor="confirm-password">Confirm Password</label>
                <input type="password" id="confirm-password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} required />
              </div>

              <div className="form-group terms">
                <div className="remember-me">
                  <input type="checkbox" id="agree-terms" name="agreeTerms" checked={formData.agreeTerms} onChange={handleChange} required />
                  <label htmlFor="agree-terms">
                    I agree to the <a href="/terms">Terms and Conditions</a> and <a href="/privacy">Privacy Policy</a>
                  </label>
                </div>
              </div>
              {error && <div className="error-message show">{error}</div>}

              <button type="submit" className="btn btn-primary btn-block">Create Account</button>
            </form>
             

            <div className="auth-divider">
              <span>Or sign up with</span>
            </div>

            <div className="social-login">
              <button className="social-login-btn google-btn">
                <i className="fab fa-google"></i> Google
              </button>
              <button className="social-login-btn facebook-btn">
                <i className="fab fa-facebook-f"></i> Facebook
              </button>
            </div>

            <div className="auth-footer">
              <p>
                Already have an account? <a href="/login">Login</a>
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Register;
