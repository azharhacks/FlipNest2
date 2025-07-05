import React from 'react';
import Header from '../components/Header'; // Import Header
import Footer from '../components/Footer'; // Import Footer
import '../styles/styles.css';
import '../styles/modern.css';
// import login-specific CSS if you have one, e.g., '../styles/auth.css';

const Login = () => {
  return (
    <>
    <body>
      <Header />
      <section className="auth-section">
        <div className="container">
          <div className="auth-form-container">
            <h2>Login to FlipNest</h2>
            <form>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" required />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password" required />
              </div>
              <button type="submit" className="btn btn-primary">Login</button>
            </form>
            <p className="auth-switch">Don't have an account? <a href="/register">Register here</a></p>
          </div>
        </div>
      </section>
      <Footer />
      </body>
    </>
  );
};

export default Login;