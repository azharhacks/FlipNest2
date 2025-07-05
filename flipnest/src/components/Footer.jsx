import React from 'react';
import { Link } from 'react-router-dom'; // Correct import for Link
// Ensure these Font Awesome packages are installed by running:
// npm install @fortawesome/fontawesome-svg-core @fortawesome/react-fontawesome @fortawesome/free-solid-svg-icons @fortawesome/free-brands-svg-icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'; // Solid icons
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'; // Brand icons

// Ensure these CSS files exist at 'src/styles/' and your project dependencies are installed.
// You need to run 'npm install' or 'yarn install' in your project's root directory
// to resolve all module dependencies.
import '../styles/styles.css'; // Assuming global styles are here
import '../styles/modern.css'; // Assuming modern styles are here

function Footer() {
    return (
        <footer>
            <div className="container"> {/* Changed class to className */}
                <div className="footer-content"> {/* Changed class to className */}
                    <div className="footer-section about"> {/* Changed class to className */}
                        <h3>About FlipNest</h3>
                        <p>FlipNest is a platform for buying and selling second-hand items. Our mission is to promote sustainability by giving items a second life.</p>
                        <div className="social-links"> {/* Changed class to className */}
                            {/* External links remain <a> tags, but use FontAwesomeIcon */}
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFacebook} /></a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faTwitter} /></a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram} /></a>
                        </div>
                    </div>
                    <div className="footer-section links"> {/* Changed class to className */}
                        <h3>Quick Links</h3>
                        <ul>
                            {/* Internal navigation links use <Link to="..."> */}
                            <li><Link to="/about">About Us</Link></li>
                            <li><Link to="/terms">Terms & Conditions</Link></li>
                            <li><Link to="/privacy">Privacy Policy</Link></li>
                            <li><Link to="/contact">Contact Us</Link></li>
                        </ul>
                    </div>
                    <div className="footer-section contact"> {/* Changed class to className */}
                        <h3>Contact Us</h3>
                        <p><FontAwesomeIcon icon={faEnvelope} /> support@flipnest.com</p>
                        <p><FontAwesomeIcon icon={faPhone} /> +254715008671</p>
                    </div>
                </div>
                <div className="footer-bottom"> {/* Changed class to className */}
                    <p>&copy; 2025 FlipNest. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
