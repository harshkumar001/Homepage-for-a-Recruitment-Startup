import React from "react";
import "./Process.scss";
import process1 from "../../assets/process1.png";
import process2 from "../../assets/process2.png";
import process3 from "../../assets/process3.png";
const Process = () => {
  return (
    <div className="services-container">
      <div className="service">
        <div className="image">
          <img src={process1} alt="" />
        </div>

        <h3>STEP 1: COMPLETE PROFILE</h3>
        <p>
          Once you are approved, we showcase you to leading Indian technology
          startups.
        </p>
      </div>
      <div className="service">
        <div className="image">
          <img src={process2} alt="" />
        </div>
        <h3>STEP 2: RECEIVE JOB OFFERS</h3>
        <p>
          Companies start sending interview requests. Talk to only the ones you
          like.
        </p>
      </div>
      <div className="service">
        <div className="image">
          <img src={process3} alt="" />
        </div>
        <h3>STEP 3: ACCEPT DREAM JOB</h3>
        <p>
          Get hired for the career you've always wanted in your dream company.
        </p>
      </div>
    </div>
  );
};

export default Process;
