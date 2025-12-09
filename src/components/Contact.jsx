/** @format */

import React, { useState } from "react";
import { Icon } from "@iconify/react";

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div id="contact" className="contact">
      <div className="contact-container">
        <span className="contact-heading">Contact</span>
        <form
          className="contact-form"
          action="https://getform.io/f/agdvyweb"
          method="POST"
        >
          <div className="form-group">
            <label htmlFor="fullName">Full Name</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Enter your full name"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email address"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Enter your message"
              rows="5"
              required
            ></textarea>
          </div>

          <button type="submit" className="submit-btn">
            Send Message
            <Icon icon="carbon:send-alt-filled" width="24" height="24" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
