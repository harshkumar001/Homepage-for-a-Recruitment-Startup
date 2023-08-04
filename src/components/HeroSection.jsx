import React from "react";
import "./HeroSection.scss";
const HeroSection = () => {
  return (
    <div className="hero-container">
      <div className="hero-content">
        <h1>Your Dream Job Awaits - Discover and Apply Now!</h1>
        <p>
          Unlock your potential with HireGenius – India's premier recruitment
          platform connecting leading technology companies with YOU
        </p>
        <div className="hero-search">
          <input type="text" placeholder="Search Jobs" />
          <button>Search</button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
