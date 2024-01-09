import React from "react";
import "./navbarL.css";
// import Logo from "../images/Byteproc-logo-sub.png";
import Logo from "../images/blue-logo.png";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

export default function NavbarL({ handleSidebar }) {
  return (
    <div className="navbar-lg ">
      <div className="nav-logo">
        <img src={Logo} alt="byteproc-logo" />
      </div>

      <div className="nav-options">
        <div>
          <ScrollLink to="/home" smooth={true} duration={500}>
            Home
          </ScrollLink>
        </div>
        <div>
          <ScrollLink>About Us</ScrollLink>
        </div>
        <div>
          <ScrollLink>Services</ScrollLink>
        </div>
        <div>
          <ScrollLink>Testimonials</ScrollLink>
        </div>
        <div>
          <ScrollLink>Contact Us</ScrollLink>
        </div>
      </div>
      <span
        className="material-symbols-outlined hamburger-logo"
        onClick={() => {
          handleSidebar();
        }}
      >
        menu
      </span>
    </div>
  );
}
