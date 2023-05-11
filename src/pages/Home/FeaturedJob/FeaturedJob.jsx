import React from "react";
import "./FeaturedJob.css";

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

        <div className="row">
          <div className="col-md-6">
            <div>col 6</div>
          </div>
          <div className="col-md-6">
            <div>col 6</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedJob;
