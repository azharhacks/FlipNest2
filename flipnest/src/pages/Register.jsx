import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/styles.css';
import '../styles/modern.css';
import '../styles/auth.css'; // Import auth-specific CSS

function Register(){
    return (
        <>
        <body>
            <Header/>

         {/* Register Section */}
      <section className="auth-section">
        <div className="container">
          <div className="auth-container">
            <div className="auth-header">
              <h2>Create an Account</h2>
              <p>Join our community to buy and sell second-hand items!</p>
            </div>

            <form id="register-form" className="auth-form">
              <div className="form-group">
                <label htmlFor="first-name">First Name</label>
                <input type="text" id="first-name" name="firstName" required />
              </div>
              <div className="form-group">
                <label htmlFor="last-name">Last Name</label>
                <input type="text" id="last-name" name="lastName" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" required />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password" required />
              </div>
              <div className="form-group">
                <label htmlFor="confirm-password">Confirm Password</label>
                <input
                  type="password"
                  id="confirm-password"
                  name="confirmPassword"
                  required
                />
              </div>
              <div className="form-group terms">
                <div className="remember-me">
                  <input
                    type="checkbox"
                    id="agree-terms"
                    name="agreeTerms"
                    required
                  />
                  <label htmlFor="agree-terms">
                    I agree to the{' '}
                    <a href="/terms">Terms and Conditions</a> and{' '}
                    <a href="/privacy">Privacy Policy</a>
                  </label>
                </div>
              </div>
              <button type="submit" className="btn btn-primary btn-block">
                Create Account
              </button>
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
        </body>
        </>
    );
};
export default Register;