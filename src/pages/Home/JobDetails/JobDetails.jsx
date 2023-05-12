import React, { useEffect, useState } from "react";
import "./JobDetails.css";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faDollarSign, faPhone, faEnvelope, faCalendar } from "@fortawesome/free-solid-svg-icons";

const JobDetails = () => {
  const [jobsData, setJobsData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetch("/jobs.json")
      .then((res) => res.json())
      .then((data) => setJobsData(data));
  }, []);
  const searchedData = jobsData?.find((jobData) => jobData._id === id);
  console.log(searchedData);
  return (
    <section className="job_details_area">
      <div className="container">
        <div className="row mt-5">
          <div className="col">
            <h2 className="heading_secondary text-capitalize text-center mt-5 mb-5">job details</h2>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-md-8">
            <div>
              <p className="mb-5">
                <strong>Job Description:</strong> {searchedData?.job_description}
              </p>

              <p className="mb-5">
                <strong>Job Responsibility:</strong> {searchedData?.job_responsibility}
              </p>

              <p>
                <strong>Educational Requirements:</strong>{" "}
              </p>

              <p>{searchedData?.education}.</p>

              <p>
                <strong>Experiences:</strong>
              </p>

              <p>{searchedData?.experience}.</p>
            </div>
          </div>

          <div className="col-md-4">
            <div>
              <div className="bg-light p-5 rounded mb-5">
                <p className="heading_quaternary mb-5">
                  <strong>Job Details</strong>
                </p>
                <hr className="h_line"></hr>
                <div className="mt-5">
                  <div className="d-flex gap-3">
                    <span className="icon_box">
                      <FontAwesomeIcon icon={faDollarSign} />
                    </span>
                    <p>
                      <strong>Salary :</strong>
                      {searchedData?.salary}(Per Month)
                    </p>
                  </div>
                  <div className="d-flex gap-3">
                    <span className="icon_box">
                      <FontAwesomeIcon icon={faCalendar} />
                    </span>

                    <p>
                      <strong>Job Title :</strong> {searchedData?.job_title}
                    </p>
                  </div>
                </div>

                <p className="heading_quaternary mt-4">
                  <strong>Contact Information</strong>
                </p>
                <hr className="h_line mt-5"></hr>
                <div className="mt-5 d-flex flex-column gap-3">
                  <div className="d-flex gap-3">
                    <span className="icon_box">
                      <FontAwesomeIcon icon={faPhone} />
                    </span>
                    <p>
                      <strong>Phone :</strong>
                      {searchedData?.contact_info[1]}
                    </p>
                  </div>

                  <div className="d-flex gap-3">
                    <span className="icon_box">
                      <FontAwesomeIcon icon={faEnvelope} />
                    </span>
                    <p>
                      <strong>Email :</strong> {searchedData?.contact_info[0]}
                    </p>
                  </div>

                  <div className="d-flex gap-3">
                    <span className="icon_box">
                      <FontAwesomeIcon icon={faLocationDot} />
                    </span>

                    <p>
                      <strong>Address :</strong>
                      {searchedData?.location}
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <button className="btn btn_full w-100">Apply Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JobDetails;
