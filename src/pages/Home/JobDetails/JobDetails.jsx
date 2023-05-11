import React from "react";
import "./JobDetails.css";
import dolorIcon from "../../../assets/images/icons/Frame.png";

const JobDetails = () => {
  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col">
            <h2 className="heading_secondary text-capitalize">job details</h2>
          </div>
        </div>

        <div className="row">
          <div className="col-md-8">
            <div>
              <p>
                <strong>Job Description:</strong> A UI/UX (User Interface/User Experience) designer is responsible for designing and creating engaging
                and effective interfaces for software and web applications. This includes designing the layout, visual design, and interactivity of
                the user interface.
              </p>

              <p>
                <strong>Job Responsibility:</strong> Collaborating with cross-functional teams: UI/UX designers often work closely with other teams,
                including product management, engineering, and marketing, to ensure that the user interface is aligned with business and technical
                requirements. You will need to be able to effectively communicate your design ideas and gather feedback from other team members.
              </p>

              <p>
                <strong>Educational Requirements:</strong>{" "}
              </p>

              <p>Bachelor degree to complete any reputational university.</p>

              <p>
                <strong>Experiences:</strong>
              </p>

              <p>2-3 Years in this field.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div>
              <p>
                <strong>Job Details</strong>
              </p>
              <hr className="h_line"></hr>
              <div>
                <div>
                  <span>
                    <img src={dolorIcon} alt="dolor icon" />{" "}
                  </span>
                  <p>
                    <strong>Salary :</strong>100K - 150K (Per Month)
                  </p>
                </div>
                <p>
                  <strong>Job Title :</strong> Product Designer
                </p>
              </div>

              <p>
                <strong>Contact Information</strong>
              </p>
              <hr className="h_line"></hr>
              <div>
                <div>
                  <span>
                    <img src={dolorIcon} alt="dolor icon" />{" "}
                  </span>
                  <p>
                    <strong>Phone :</strong>101750-00 00 00
                  </p>
                </div>
                <div>
                  <span>
                    <img src={dolorIcon} alt="dolor icon" />{" "}
                  </span>
                  <p>
                    <strong>Email :</strong> info@gmail.com
                  </p>
                </div>

                <div>
                  <span>
                    <img src={dolorIcon} alt="dolor icon" />{" "}
                  </span>
                  <p>
                    <strong>Address :</strong>Dhanmondi 32, Sukrabad Dhaka, Bangladesh
                  </p>
                </div>
              </div>
              <div>
                <button className="btn btn_full">Apply Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JobDetails;
