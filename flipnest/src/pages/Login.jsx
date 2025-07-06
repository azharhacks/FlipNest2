import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/styles.css';
import '../styles/modern.css';
import { saveLoggedInUser, getLoggedInUser } from '../utils/auth';
 

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];

    const matchedUser = storedUsers.find(
      (user) => user.email === email && user.password === password
    );

    if (matchedUser) {
      localStorage.setItem('loggedInUser', JSON.stringify(matchedUser)); // save current user
      navigate('/profile'); // redirect to profile or home
    } else {
      setError('Invalid email or password.');
    }
  };

  return (
    <>
      <Header />
      <section className="auth-section">
        <div className="container">
          <div className="auth-form-container">
            <h2>Login to FlipNest</h2>

            {error && <p style={{ color: 'red' }}>{error}</p>}

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              <button type="submit" className="btn btn-primary">Login</button>
            </form>

            <p className="auth-switch">
              Don't have an account? <a href="/register">Register here</a>
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Login;
