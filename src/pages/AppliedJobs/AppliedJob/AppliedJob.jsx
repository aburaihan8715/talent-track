import React from "react";
import "./AppliedJob.css";
import netflixLogo from "../../../assets/images/others/netflix-4 1.png";

import locationIcon from "../../../assets/images/icons/Frame-4.png";
import dolorIcon from "../../../assets/images/icons/Frame.png";

const AppliedJob = () => {
  return (
    <div className="col-12 mb-5">
      <div className="row border rounded p-5 align-items-center">
        <div className="col-md-3">
          <div className="h-100">
            <img src={netflixLogo} alt="company logo" />
          </div>
        </div>

        <div className="col-md-7">
          <div className="d-flex flex-column gap-4">
            <h3 className="heading_tertiary">Senior Product Designer</h3>
            <p className="secondary_p">Netflix</p>

            <div className="d-flex gap-3">
              <a className="btn btn_outline" href="#">
                Onsite
              </a>
              <a className="btn btn_outline" href="#">
                Remote
              </a>
            </div>

            <div className="d-flex gap-5">
              <div className="d-flex gap-3">
                <span>
                  <img src={locationIcon} alt="location icon" />
                </span>
                <span>Dhaka, Bangladesh</span>
              </div>
              <div className="d-flex gap-3">
                <span>
                  <img src={dolorIcon} alt="dolor icon" />
                </span>
                <span>
                  Salary : <span>100K - 150K</span>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-2">
          <div className="h-100">
            <button className="btn btn_full">View Details</button>
          </div>
        </div>
      </div>

      {/* <div className="col-md-3">
        <div>
          <img src={netflixLogo} alt="company logo" />
        </div>
      </div>

      <div className="col-md-7">
        <div className="d-flex flex-column gap-4">
          <h3 className="heading_tertiary">Senior Product Designer</h3>
          <p className="secondary_p">Netflix</p>

          <div className="d-flex gap-3">
            <a className="btn btn_outline" href="#">
              Onsite
            </a>
            <a className="btn btn_outline" href="#">
              Remote
            </a>
          </div>

          <div className="d-flex gap-5">
            <div className="d-flex gap-3">
              <span>
                <img src={locationIcon} alt="location icon" />
              </span>
              <span>Dhaka, Bangladesh</span>
            </div>
            <div className="d-flex gap-3">
              <span>
                <img src={dolorIcon} alt="dolor icon" />
              </span>
              <span>
                Salary : <span>100K - 150K</span>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-2">
        <div>
          <button className="btn btn_full">View Details</button>
        </div>
      </div> */}
    </div>
  );
};

export default AppliedJob;
