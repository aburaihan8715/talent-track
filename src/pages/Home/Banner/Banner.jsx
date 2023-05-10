import React from "react";
import "./Banner.css";
import bannerImg from "../../../assets/images/others/banner1.png";

const Banner = () => {
  return (
    <section className="banner_area">
      <div className="container">
        <div className="row">
          <div className="col-md-6 mb-4 mb-md-0">
            <div className="banner_text_box">
              <h1 className="heading_primary mb-5">
                One Step
                <br />
                Closer To Your
                <br />
                <span className="text_bright">Dream Job</span>
              </h1>
              <p className="primary_p mb-4">
                Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job
                application from start to finish.
              </p>
              <a className="btn btn_full" href="#">
                Get Started
              </a>
            </div>
          </div>

          <div className="col-md-6">
            <div className="banner_img_box">
              <img className="banner_img" src={bannerImg} alt="banner photo" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
