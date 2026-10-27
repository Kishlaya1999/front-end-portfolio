import React, { useState } from "react";
import { Icon } from "@iconify/react";

const infoCards = [
  {
    icon: "mdi:email-outline",
    label: "Email",
    value: "kishlaya1999@gmail.com",
    href: "mailto:kishlaya1999@gmail.com",
  },
  {
    icon: "mdi:phone-outline",
    label: "Phone",
    value: "+91 7651985596",
    href: "tel:+917651985596",
  },
];

const socialLinks = [
  {
    icon: "mdi:linkedin",
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/kishlaya1999/",
  },
  {
    icon: "mdi:github",
    label: "GitHub",
    href: "https://github.com/Kishlaya1999",
  },
];

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
    <section id="contact" className="contact">
      <div className="contact-container">
        <h2 className="contact-heading" data-aos="fade-up">
          <span className="section-number">05.</span>Contact
        </h2>
        <p className="contact-intro" data-aos="fade-up" data-aos-delay="100">
          Have a question or want to work together? Feel free to reach out!
        </p>

        <div className="contact-grid">
          <div className="contact-form-wrapper" data-aos="fade-up" data-aos-delay="150">
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

              <div className="contact-form-footer">
                <button type="submit" className="submit-btn">
                  Send Message
                  <Icon icon="carbon:send-alt-filled" width="20" height="20" />
                </button>
              </div>
            </form>
          </div>

          <div className="contact-info" data-aos="fade-up" data-aos-delay="200">
            <div className="contact-info-cards">
              {infoCards.map((card) => (
                <a
                  key={card.label}
                  href={card.href}
                  className="contact-info-card"
                >
                  <div className="contact-info-card__icon">
                    <Icon icon={card.icon} />
                  </div>
                  <div className="contact-info-card__text">
                    <span className="contact-info-card__label">{card.label}</span>
                    <span className="contact-info-card__value">{card.value}</span>
                  </div>
                </a>
              ))}
            </div>
            <div className="contact-info-socials">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="contact-social-icon"
                  target="_blank"
                  rel="noreferrer"
                  title={link.label}
                >
                  <Icon icon={link.icon} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
