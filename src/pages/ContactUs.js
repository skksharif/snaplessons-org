import React from 'react';
import './ContactUs.css';
import { FaUser, FaPhone, FaEnvelope, FaCommentDots, FaFacebookF, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const ContactUs = () => {
  return (
    <div className="contact-container">
      <h2>Contact Us</h2>
      <p className="contact-description">If you have questions, need support, or anything else, please fill out the form below. We are here to help you.</p>

      <div className="contact-content">
        <div className="contact-form">
          <h3>Have a Question? Write a Message</h3>
          <form>
            <div className="form-group">
              <label>
                <FaUser className="icon" /> 
                <input type="text" placeholder="Full Name*" required />
              </label>
              <label>
                <FaPhone className="icon" /> 
                <input type="tel" placeholder="Mobile Number*" required />
              </label>
            </div>
            <div className="form-group">
              <label>
                <FaEnvelope className="icon" /> 
                <input type="email" placeholder="Email Address*" required />
              </label>
            </div>
            <div className="form-group">
              <label>
              
                <textarea placeholder="Brief about the project*" required></textarea>
              </label>
            </div>

            <button type="submit" className="submit-button">Submit</button>
          </form>
        </div>

        <div className="contact-info">
          <h3>Let's get in touch</h3>
          <p>We will catch you as soon as we receive the message</p>
          <p className="contact-availability"><strong>Available 24/7</strong></p>
          <p className="contact-phone">📞 +91 8977010467</p>
          <p className="contact-email">✉️ teanhr@snaplessons.com</p>
          <div className="social-links">
            <a href="https://www.facebook.com/people/SnapLessons-Private-Limited/61570727458556/" className="social-icon facebook"><FaFacebookF /></a>
            <a href="https://www.linkedin.com/company/snaplessons-private-limited/posts/?feedView=all" className="social-icon linkedin"><FaLinkedinIn /></a>
            <a href="https://www.instagram.com/snaplessons_pvt_ltd/?hl=en" className="social-icon linkedin"><FaInstagram /></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
