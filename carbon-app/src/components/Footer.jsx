import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="global-footer">
      <div className="footer-container">
        {/* Logo */}
        <div className="footer-logo">
          <img src="/earth-day-svgrepo-com.svg" alt="Carbon Tracker Logo" className="footer-logo-img" />
        </div>

        {/* Social Links */}
        <div className="footer-links">
          <Link to="https://www.linkedin.com/in/chris-pickreign-0305041bb/" target="_blank" className="footer-link">
            🔗 LinkedIn
          </Link>
          <Link to="https://github.com/ChrisPickreign" target="_blank" className="footer-link">
            🐙 GitHub
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

