import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./ContactForm.css";

const ContactForm = () => {
  return (
    <div className="contact-form1">
      <h1>Let's Connect</h1>
      <p>
        Contact us and we'll have a Business Development Representative contact
        you within 24 business hours.
      </p>
      <form data-aos="zoom-in-up">
        <div className="form-group">
          <div className="input-container">
            <label>First Name *</label>
            <input type="text" placeholder="First Name" required />
          </div>
          <div className="input-container">
            <label>Last Name *</label>
            <input type="text" placeholder="Last Name" required />
          </div>
        </div>
        <div className="form-group">
          <div className="input-container">
            <label>Business Email Address *</label>
            <input type="email" placeholder="Business Email Address" required />
          </div>
          <div className="input-container">
            <label>Company Name *</label>
            <input type="text" placeholder="Company Name" required />
          </div>
        </div>
        <div className="form-group">
          <div className="input-container">
            <label>Phone Number *</label>
            <input type="tel" placeholder="Phone Number" required />
          </div>
          <div className="input-container">
            <label>Country / Region *</label>
            <select required>
              <option value="">Select...</option>
              <option value="cn">China</option>
              <option value="jp">Japan</option>
              <option value="in">India</option>
              <option value="kr">South Korea</option>
              <option value="sg">Singapore</option>
              <option value="th">Thailand</option>
              <option value="my">Malaysia</option>
              <option value="id">Indonesia</option>
              <option value="ph">Philippines</option>
              <option value="vn">Vietnam</option>
            </select>
          </div>
        </div>
        <div className="input-container">
          <label>Industry *</label>
          <select required>
            <option value="">Select...</option>
            <option value="technology">Technology</option>
            <option value="finance">Finance</option>
            {/* Add more options as needed */}
          </select>
        </div>
        <button type="submit" className="submit-btn">
          Submit →
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
