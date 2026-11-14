import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-bottom">
          <span className="footer-credit">
            Built with React by{" "}
            <span className="footer-name">Kishlaya Kesarwani</span>
          </span>
          <span className="footer-copyright">
            &copy; {currentYear} All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
