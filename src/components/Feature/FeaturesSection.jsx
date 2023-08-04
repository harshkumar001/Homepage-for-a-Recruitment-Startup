import React from "react";
import "./FeaturesSection.scss";
import jobsearch from "../../assets/job-search.png";
import applicantscreen from "../../assets/applicant-screening.png";
import candidanalytics from "../../assets/candidate-analytics.png";
const FeaturesSection = () => {
  return (
    <div className="features-container">
      <h2>What can HireGenius help you with?</h2>
      <div className="features-content">
        <div className="feature">
          <div className="up">
            <img src={jobsearch} alt="Advanced Job Search" />
            <h3>Advanced Job Search</h3>
          </div>
          <p>
            Showcasing an intelligent job search mechanism to connect companies
            with the right talent.
          </p>
        </div>
        <div className="feature">
          <div className="up">
            <img src={applicantscreen} alt="Applicant Screening" />
            <h3>Applicant Screening</h3>
          </div>
          <p>
            Streamlining the hiring process by pre-screening applicants based on
            skills and qualifications.
          </p>
        </div>
        <div className="feature">
          <div className="up">
            <img src={candidanalytics} alt="Candidate Analytics" />
            <h3>Candidate Analytics</h3>
          </div>
          <p>
            Utilizing data-driven insights to help companies make better hiring
            decisions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
