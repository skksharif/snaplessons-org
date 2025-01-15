import React, { useState, useEffect } from "react";
import "../App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { NavLink } from "react-router-dom";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const closeMenu = () => {
    setMenuOpen(false);
  };
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      <header>
       {/*
        <div className="social-media phone">
          <a
            href="https://api.whatsapp.com/send?phone=9910154144/"
            target="_blank"
          >
            <img src="./images/whatsapp.png" alt="" />
          </a>
          <a
            href="https://www.instagram.com/talentnest_technology_?igsh=MWt3MGhqOTA4eGZnZg%3D%3D&utm_source=qr"
            target="_blank"
          >
            <img src="./images/instagram.png" alt="" />
          </a>
          <a href="mailto:Hr@talentnesttechnology.com">
            <img src="./images/email.png" alt="" />
          </a>
          <a href="https://www.linkedin.com/company/104736805/admin/dashboard/">
            <img src="./images/linkedin.png" alt="" />
          </a>
        </div>
       */}

        <div className="navbar1" id="mynav">
          <div className="responsive">
            <NavLink to="/" onClick={closeMenu}>
              <div className="logo-mobile">
                <img src="./images/snaplessons.png" alt="Snap Lessons Logo" />
              </div>
            </NavLink>
            <div
              className={`menu-icon ${menuOpen ? "close" : ""}`}
              onClick={toggleMenu}
            >
              <div className="bar"></div>
              <div className="bar1"></div>
              <div className="bar"></div>
            </div>
          </div>
          <nav className={menuOpen ? "show" : ""}>
            <NavLink to="/" className="show-navitems" onClick={closeMenu}>
              Home
            </NavLink>
            <NavLink
              to="/services"
              className="show-navitems"
              onClick={closeMenu}
            >
              Services
            </NavLink>
            <div className="dropdown show-navitems">
              <a href="#" className="show-navitems">
                Products
                <span id="arrow">&#9660;</span>
              </a>
              <div className="dropdown-content">
                <a href="https://www.snaplessons.in" onClick={closeMenu}>
                  E-Learning
                </a>
              </div>
            </div>
            <NavLink
              to="/corporate"
              className="show-navitems"
              onClick={closeMenu}
            >
              Corporate
            </NavLink>
            <NavLink
              to="/contact"
              className="show-navitems"
              onClick={closeMenu}
            >
              Contact Us
            </NavLink>
          </nav>
        </div>
      </header>
      <div className="navbar" id="mynav">
        <div className="responsive">
          <div
            className={`menu-icon ${menuOpen ? "close" : ""}`}
            onClick={toggleMenu}
          >
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
        </div>
        <NavLink to="/" onClick={closeMenu}>
          <div className="logo">
            <img src="./images/snaplessons.png" alt="Snap Lessons Logo" />
            <div className="logo-text"></div>
          </div>
        </NavLink>
        <nav className={menuOpen ? "show" : ""}>
          <NavLink to="/" className="show-navitems" onClick={closeMenu}>
            Home
          </NavLink>
          <NavLink to="/services" className="show-navitems" onClick={closeMenu}>
            Services
          </NavLink>
          <div className="dropdown">
            <a href="/" className="show-navitems">
              Products
              <span id="arrow">&#9660;</span>
            </a>
            <div className="dropdown-content">
              <a href="https://www.snaplessons.in" onClick={closeMenu}>
                E-Learning
              </a>
            </div>
          </div>

          <NavLink
            to="/corporate"
            className="show-navitems"
            onClick={closeMenu}
          >
            Corporate
          </NavLink>
          <NavLink to="/contact" className="show-navitems" onClick={closeMenu}>
            Contact Us
          </NavLink>
        </nav>
      </div>
    </>
  );
}
