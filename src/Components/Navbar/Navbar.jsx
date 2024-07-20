import React, { useState } from "react";
import "../Navbar/Navbar.css";

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const handleMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  return (
    <>
      <div className="Nav-container">
        <div className="Nav-logo">Ramya Dev</div>
        <div className={`Nav-list ${isMobileMenuOpen ? "open" : ""}`}>
          <ul>
            <a href="#home">
              <li>Home</li>
            </a>
            <a href="#about">
              <li>About</li>
            </a>
            <a href="#education">
              <li>Education</li>
            </a>
            <a href="#projects">
              <li>Projects</li>
            </a>
            <a href="#skills">
              <li>Skills</li>
            </a>
            <a href="#contact">
              <li>Contact</li>
            </a>
          </ul>
        </div>
        <div>
          <button className="Contact-button">Contact Us</button>
          <button className="Nav-toggle" onClick={handleMenuToggle}>
            ☰
          </button>
        </div>
      </div>
    </>
  );
}

export default Navbar;
