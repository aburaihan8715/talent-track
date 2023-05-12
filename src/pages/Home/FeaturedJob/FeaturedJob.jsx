import React from "react";
import "./FeaturedJob.css";
import locationIcon from "../../../assets/images/icons/Location Icon.png";
import dolorIcon from "../../../assets/images/icons/Frame.png";
import { Link } from "react-router-dom";

const FeaturedJob = ({ job }) => {
  const { job_type, job_time, logo, job_title, company, location, salary } = job;
  return (
    <div className="col ">
      <div className="featured_job_item">
        <div className="company_logo_box">
          <img className="company_logo" src={logo} alt="company logo" />
        </div>

        <div className="featured_content">
          <h3 className="heading_tertiary">{job_title}</h3>
          <p className="secondary_p">{company}</p>
          <div className="featured_btn_box">
            <a className="btn btn_outline" href="#">
             { job_type}
            </a>
            <a className="btn btn_outline" href="#">
             { job_time}
            </a>
          </div>

          <div className="featured_text_box secondary_p">
            <div className="featured_location_box">
              <span className="location_icon_box">
                <img className="location_icon" src={locationIcon} alt="location icon" />
              </span>
              <span className="location">{location}</span>
            </div>

            <div className="featured_salary_box">
              <span className="dolor_icon_box">
                <img className="dolor_icon" src={dolorIcon} alt="dolor icon" />
              </span>
              <span className="salary_text">Salary :</span>
              <span className="salary_amount">{salary}</span>
            </div>
          </div>

          <Link className="btn btn_full featured_full_btn" to="/jobDetails">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FeaturedJob;
