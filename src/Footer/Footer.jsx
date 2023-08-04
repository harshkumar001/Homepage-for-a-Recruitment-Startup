import React from "react";
import "./Footer.scss";
import {
  FaLocationArrow,
  FaMobileAlt,
  FaEnvelope,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import Payment from "../assets/payments.png";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="col">
          <div className="title">About</div>
          <div className="text">
            Our platform connects the top 2% of tech professionals with
            innovative companies, making the hiring process dead simple and
            efficient. Join us to find your dream team or your dream job today!
          </div>
        </div>
        <div className="col">
          <div className="title">Jobs by location</div>
          <span className="text">Startup Jobs in India</span>
          <span className="text">Startup Jobs in Bangalore</span>
          <span className="text">Startup Jobs in Delhi/Gurgaon/Noida</span>
          <span className="text">Startup Jobs in Pune</span>
          <span className="text">Startup Jobs in Hyderabad</span>
        </div>

        <div className="col">
          <div className="title">Technology Jobs</div>
          <span className="text">Android Developer Jobs</span>
          <span className="text">iOS Development Jobs</span>
          <span className="text">Frontend Developer Jobs</span>
          <span className="text">Backend Developer Jobs</span>
          <span className="text">DevOps Jobs</span>
        </div>

        <div className="col">
          <div className="title">Top Companies Hiring</div>
          <span className="text">Meesho Jobs</span>
          <span className="text">Paytm Jobs</span>
          <span className="text">Vedantu Jobs</span>
          <span className="text">MX Player Jobs</span>
          <span className="text">Truemeds India Jobs</span>
        </div>

        <div className="col">
          <div className="title">Top Companies in India</div>
          <span className="text">EdTech Companies</span>
          <span className="text">B2B Companies</span>
          <span className="text">B2C Companies</span>
          <span className="text">Fintech Companies</span>
          <span className="text">HR Companies</span>
        </div>

        <div className="col">
          <div className="title">Contact</div>
          <div className="c-item">
            <FaLocationArrow />
            <div className="text">V.P.O. Kaimla, Gharaunda, Karnal, 132114</div>
          </div>
          <div className="c-item">
            <FaMobileAlt />
            <div className="text">Phone: +91 9817581856</div>
          </div>
          <div className="c-item">
            <FaEnvelope />
            <div className="text">Email: sainikaimla001@gmail.com</div>
          </div>
        </div>
      </div>
      <div className="bottom-bar">
        <div className="bottom-bar-content">
          <div className="text">© HireGenius LTD 2023 All Rights Reserved</div>
          <div className="social-icons">
            <FaFacebookF className="iconfb icon" />
            <FaTwitter className="icontw icon" />
            <FaInstagram className="iconinst icon" />
            <FaLinkedinIn className="iconlink icon" />
          </div>
          <img src={Payment} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
