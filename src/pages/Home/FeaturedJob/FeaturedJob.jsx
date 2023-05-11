import React from "react";
import "./FeaturedJob.css";
import teslaLogo from "../../../assets/images/others/tesla-9 1.png";
import locationIcon from "../../../assets/images/icons/Location Icon.png";
import dolorIcon from "../../../assets/images/icons/Frame.png";

const FeaturedJob = () => {
  return (
    <section className="featured_job_area">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="text-center">
              <h2 className="heading_secondary mb-4">Featured Jobs</h2>
              <p className="primary_p mb-5">Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
          </div>
        </div>

        <div className="row row-cols-1 row-cols-md-2 g-4">
          {/* **********featured job item********* */}
          <div className="col ">
            <div className="featured_job_item">
              <div className="company_logo_box">
                <img className="company_logo" src={teslaLogo} alt="company logo" />
              </div>

              <div className="featured_content">
                <h4 className="heading_tertiary">Technical Database Engineer</h4>
                <p className="secondary_p">Google LLC</p>
                <div className="featured_btn_box">
                  <a className="btn btn_outline" href="#">
                    Remote
                  </a>
                  <a className="btn btn_outline" href="#">
                    Full Time
                  </a>
                </div>

                <div className="featured_text_box secondary_p">
                  <div className="featured_location_box">
                    <span className="location_icon_box">
                      <img className="location_icon" src={locationIcon} alt="location icon" />
                    </span>
                    <span className="location">Dhaka, Bangladesh</span>
                  </div>

                  <div className="featured_salary_box">
                    <span className="dolor_icon_box">
                      <img className="dolor_icon" src={dolorIcon} alt="dolor icon" />
                    </span>
                    <span className="salary_text">Salary :</span>
                    <span className="salary_amount">100K - 150K</span>
                  </div>
                </div>

                <a className="btn btn_full featured_full_btn" href="#">
                  View Details
                </a>
              </div>
            </div>
          </div>
          {/* **********featured job item********* */}

          {/* **********featured job item********* */}
          <div className="col ">
            <div className="featured_job_item">
              <div className="company_logo_box">
                <img className="company_logo" src={teslaLogo} alt="company logo" />
              </div>

              <div className="featured_content">
                <h4 className="heading_tertiary">Technical Database Engineer</h4>
                <p className="secondary_p">Google LLC</p>
                <div className="featured_btn_box">
                  <a className="btn btn_outline" href="#">
                    Remote
                  </a>
                  <a className="btn btn_outline" href="#">
                    Full Time
                  </a>
                </div>

                <div className="featured_text_box secondary_p">
                  <div className="featured_location_box">
                    <span className="location_icon_box">
                      <img className="location_icon" src={locationIcon} alt="location icon" />
                    </span>
                    <span className="location">Dhaka, Bangladesh</span>
                  </div>

                  <div className="featured_salary_box">
                    <span className="dolor_icon_box">
                      <img className="dolor_icon" src={dolorIcon} alt="dolor icon" />
                    </span>
                    <span className="salary_text">Salary :</span>
                    <span className="salary_amount">100K - 150K</span>
                  </div>
                </div>

                <a className="btn btn_full featured_full_btn" href="#">
                  View Details
                </a>
              </div>
            </div>
          </div>
          {/* **********featured job item********* */}

          {/* **********featured job item********* */}
          <div className="col">
            <div className="featured_job_item">
              <div className="company_logo_box">
                <img className="company_logo" src={teslaLogo} alt="company logo" />
              </div>

              <div className="featured_content">
                <h4 className="heading_tertiary">Technical Database Engineer</h4>
                <p className="secondary_p">Google LLC</p>
                <div className="featured_btn_box">
                  <a className="btn btn_outline" href="#">
                    Remote
                  </a>
                  <a className="btn btn_outline" href="#">
                    Full Time
                  </a>
                </div>

                <div className="featured_text_box secondary_p">
                  <div className="featured_location_box">
                    <span className="location_icon_box">
                      <img className="location_icon" src={locationIcon} alt="location icon" />
                    </span>
                    <span className="location">Dhaka, Bangladesh</span>
                  </div>

                  <div className="featured_salary_box">
                    <span className="dolor_icon_box">
                      <img className="dolor_icon" src={dolorIcon} alt="dolor icon" />
                    </span>
                    <span className="salary_text">Salary :</span>
                    <span className="salary_amount">100K - 150K</span>
                  </div>
                </div>

                <a className="btn btn_full featured_full_btn" href="#">
                  View Details
                </a>
              </div>
            </div>
          </div>
          {/* **********featured job item********* */}

          {/* **********featured job item********* */}
          <div className="col">
            <div className="featured_job_item">
              <div className="company_logo_box">
                <img className="company_logo" src={teslaLogo} alt="company logo" />
              </div>

              <div className="featured_content">
                <h4 className="heading_tertiary">Technical Database Engineer</h4>
                <p className="secondary_p">Google LLC</p>
                <div className="featured_btn_box">
                  <a className="btn btn_outline" href="#">
                    Remote
                  </a>
                  <a className="btn btn_outline" href="#">
                    Full Time
                  </a>
                </div>

                <div className="featured_text_box secondary_p">
                  <div className="featured_location_box">
                    <span className="location_icon_box">
                      <img className="location_icon" src={locationIcon} alt="location icon" />
                    </span>
                    <span className="location">Dhaka, Bangladesh</span>
                  </div>

                  <div className="featured_salary_box">
                    <span className="dolor_icon_box">
                      <img className="dolor_icon" src={dolorIcon} alt="dolor icon" />
                    </span>
                    <span className="salary_text">Salary :</span>
                    <span className="salary_amount">100K - 150K</span>
                  </div>
                </div>

                <a className="btn btn_full featured_full_btn" href="#">
                  View Details
                </a>
              </div>
            </div>
          </div>
          {/* **********featured job item********* */}
        </div>
        <div className="row mt-5">
          <div className="col text-center">
            <button className="btn btn_full text-capitalize">See all jobs</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedJob;
