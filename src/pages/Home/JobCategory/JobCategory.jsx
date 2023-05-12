import React, { useEffect } from "react";
import "./JobCategory.css";
// import accountImg from "../../../assets/images/icons/accounts 1.png";
import { useState } from "react";

const JobCategory = () => {
  const [jobCategory, setJobCategory] = useState([]);

  useEffect(() => {
    fetch("category.json")
      .then((res) => res.json())
      .then((data) => setJobCategory(data));
  }, []);

  console.log(jobCategory);

  return (
    <section className="job_category_area">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="text-center">
              <h2 className="heading_secondary mb-4">Job Category List</h2>
              <p className="primary_p mb-5">Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
          </div>
        </div>

        <div className="row mt-5 gap-4 gap-md-0">
          {jobCategory?.map((category) => (
            <div key={category.id} className="col-md-3">
              <div className="job_category_item">
                <div className="icon_img_box">
                  <img className="icon_img" src={category.category_logo} alt="job category icon" />
                </div>
                <div>
                  <h3 className="heading_tertiary mb-3">{category.category_name}</h3>
                  <p className="primary_p">{category.job_available} Jobs Available</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JobCategory;
