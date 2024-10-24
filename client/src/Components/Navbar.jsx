import React from "react";

export default function Navbar() {
  return (
    <header className="nep-navbar">
      <div className="container-nav nep-navbar-content">
        <div className="nep-navbar-logo">
          {/* <img src="/placeholder.svg" alt="Future Fit" /> */}
          <span className="nep-navbar-brand">Future Fit</span>
        </div>
        <nav className="nep-navbar-links">
          <a href="#" className="nep-navbar-link">Home</a>
          <a href="#" className="nep-navbar-link">Info of NEP</a>
          <a href="#" className="nep-navbar-link">Features</a>
          <a href="#" className="nep-navbar-link">Testimonials</a>
          <a href="#" className="nep-navbar-link">About Us</a>
        </nav>
        <a href="#" className="nep-navbar-cta">
          Login/SignUp
        </a>
      </div>
    </header>
  );
}