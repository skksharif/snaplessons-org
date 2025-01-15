import React from "react";
import "./Footer.css";
import { NavLink } from "react-router-dom";
import { FaFacebookF, FaLinkedinIn, FaYoutube, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <img
            src="./images/snaplessons.png"
            alt="Snaplessons Logo"
            className="footer-logo"
          />
          
          <div className="social-media">
            <a
              href="https://api.whatsapp.com/send?phone=9910154144/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="./images/whatsapp.png" alt="WhatsApp" />
            </a>
            <a
              href="https://www.instagram.com/talentnest_technology_"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="./images/instagram.png" alt="Instagram" />
            </a>
            <a href="mailto:Hr@talentnesttechnology.com">
              <img src="./images/email.png" alt="Email" />
            </a>
            <a
              href="https://www.linkedin.com/company/104736805/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="./images/linkedin.png" alt="LinkedIn" />
            </a>
          </div>
          <p className="copyright">
            Copyright © 2024 Snaplessons. All rights reserved.
          </p>
        </div>

        <div className="footer-links">
          <div className="footer-column">
            <NavLink to="/services">Services</NavLink>
            <NavLink to="/corporate">Corporate</NavLink>
            <a href="https://snaplessons.in">Products</a>
            <NavLink to="/contact">Contact Us</NavLink>
          </div>
        </div>
        <address className="footer-address">
            <p>Plot.No.8, 1st Floor, Vasista Bhavan,</p>
            <p>APHB Colony, Indira Nagar,</p>
            <p>Gachibowli, Hyderabad, Telangana - 500032</p>
            <p>
              <strong>Email:</strong>{" "}
              <a href="mailto:teamhr@snaplessons.in">teamhr@snaplessons.in</a>
            </p>
            <p>
              <strong>Phone:</strong> +91 8985175753, +91 8500796763
            </p>
        </address>
      </div>
    </footer>
  );
};

export default Footer;
