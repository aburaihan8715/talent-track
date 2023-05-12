import React from "react";
import "./FeaturedJobs.css";
import FeaturedJob from "../FeaturedJob/FeaturedJob";

const FeaturedJobs = ({ jobs }) => {
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
          {jobs.map((job) => (
            <FeaturedJob key={job._id} job={job}></FeaturedJob>
          ))}
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

export default FeaturedJobs;
