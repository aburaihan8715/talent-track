import React from "react";
import "./AppliedJobs.css";
import AppliedJob from "./AppliedJob/AppliedJob";

const AppliedJobs = () => {
  return (
    <section className="applied_job_area">
      <div className="container">
        <h2 className="heading_secondary text-center text-capitalize mt-5">applied jobs</h2>
        <div className="text-end mt-5 mb-5">
          <select name="" id="">
            <option value="">Filter By</option>
            <option value="onsite">Onsite</option>
            <option value="remote">Remote</option>
          </select>
        </div>

          <div className="row">
            <AppliedJob></AppliedJob>
            <AppliedJob></AppliedJob>
            <AppliedJob></AppliedJob>
            <AppliedJob></AppliedJob>
          </div>
      </div>
    </section>
  );
};

export default AppliedJobs;
