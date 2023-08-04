import React from "react";
import Logo from "../assets/logo.png";

import "./Header.scss";
import { useEffect, useState } from "react";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    // console.log(offset);
    if (offset > 200) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`main-header ${scrolled ? "sticky-header" : ""}`}>
      <div className="header-content">
        <div className="left">
          <img src={Logo} alt="Your Recruitment Startup" width="150" />
          <span className="logo-title">HireGenius</span>
        </div>

        <ul className="center">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#about">About Us</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>

        <div className="right">
          <button type="button" className="btn post-job-button">
            Post a Job
          </button>

          <div className="login-signup">
            <button type="button" className="login btn btn-primary">
              Login
            </button>
            <button type="button" className="signup btn btn-success">
              Sign up
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
