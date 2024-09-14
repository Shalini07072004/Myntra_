// src/Footer.js
import React from 'react';
import './Footer.css';
// import facebook from './Images/facebook.png';
// import twitter from './Images/twitter.jpg';
// import instagram from './Images/instagram.jpg';
// import youtube from './Images/youtube.jpg';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h2>About Us</h2>
          <p>Myntra is a one-stop shop for all your fashion and lifestyle needs. Being India's largest e-commerce store for fashion and lifestyle products, Myntra aims at providing a hassle-free and enjoyable shopping experience to shoppers across the country with the widest range of brands and products on its portal.</p>
        </div>

        <div className="footer-section links">
          <h2>Quick Links</h2>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#shop">Shop</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li> 
          </ul>
        </div>

        <div className="footer-section contact">
          <h2>Contact Us</h2>
          <ul>
            <li>Email: support@myntra.com</li>
            <li>Phone: +91 123-456-7890</li>
            <li>Address: 123 Fashion Street, Bangalore, India</li>
          </ul>
        </div>

        {/* <div className="footer-section social">
          <h2>Follow Us</h2>
          <div className="social-icons">
          </div>
        </div> */}
      </div>

      <div className="footer-bottom">
        <p>&copy; 2024 Myntra. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
