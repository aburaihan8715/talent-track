import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header_area">
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <Link className="navbar_brand" to="/">
            TalentTrack
          </Link>
          <button
            className="navbar-toggler navbar_toggler_btn"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon toggler_icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav_item">
                <Link className="nav_link" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav_item">
                <Link className="nav_link" to="statistics">
                Statistics
                </Link>
              </li>
              <li className="nav_item">
                <Link className="nav_link" to="appliedJobs">
                Applied Jobs
                </Link>
              </li>
              <li className="nav_item">
                <Link className="nav_link" to="blogs">
                Blog
                </Link>
              </li>
            </ul>
            <button className="btn btn_full" type="submit">
              Start Applying
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
