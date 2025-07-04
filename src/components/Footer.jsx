import React from 'react';
import '../styles/styles.css';
import link from 'react-router-dom';
function Footer(){
    return(
        <footer>
        <div class="container">
            <div class="footer-content">
                <div class="footer-section about">
                    <h3>About FlipNest</h3>
                    <p>FlipNest is a platform for buying and selling second-hand items. Our mission is to promote sustainability by giving items a second life.</p>
                    <div class="social-links">
                        <a href="#"><i class="fab fa-facebook"></i></a>
                        <a href="#"><i class="fab fa-twitter"></i></a>
                        <a href="#"><i class="fab fa-instagram"></i></a>
                    </div>
                </div>
                <div class="footer-section links">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="about.html">About Us</a></li>
                        <li><a href="terms.html">Terms & Conditions</a></li>
                        <li><a href="privacy.html">Privacy Policy</a></li>
                        <li><a href="contact.html">Contact Us</a></li>
                    </ul>
                </div>
                <div class="footer-section contact">
                    <h3>Contact Us</h3>
                    <p><i class="fas fa-envelope"></i> support@flipnest.com</p>
                    <p><i class="fas fa-phone"></i> +254715008671</p>
                </div>
            </div>
            <div class="footer-bottom">
                <p>&copy; 2025 FlipNest. All rights reserved.</p>
            </div>
        </div>
    </footer>

    );
}
export default Footer;