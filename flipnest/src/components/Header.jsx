import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faEnvelope, faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons';
import '../styles/styles.css';
function Header (){
    return(
        <header>
        <div class="container">
            <div class="logo">
                <h1><a href="index.html">FlipNest</a></h1>
            </div>
            <div class="search-bar">
                <form action="search.html" method="get">
                    <input type="text" name="query" placeholder="Search for items..."/>
                    <button type="submit"><i class="fas fa-search"></i></button>
                </form>
            </div>
            <nav>
                <ul>
                    <li><Link to="/Home">Home</Link></li>
                    <li><Link to ="/Categories">Categories</Link></li>
                    <li><Link to="/Sell">Sell</Link></li>
                    <li><Link to="/Messages"><i class="fas fa-envelope"></i> Messages</Link></li>
                    <li><Link to="/Cart"><i class="fas fa-shopping-cart"></i> Cart</Link></li>
                    <li><Link to="/Login" id="login-btn">Login</Link></li>
                    <li><Link to="/Register" id="register-btn">Register</Link></li>
                    <li class="user-profile hidden"><Link to ="/Profile"><i class="fas fa-user"></i> <span id="username">Profile</span></Link></li>
                </ul>
            </nav>
        </div>
    </header>

    );
}
export default Header;