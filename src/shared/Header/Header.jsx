import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="header_area">
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <a className="navbar_brand" href="#">
            TalentTrack
          </a>
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
                <a className="nav_link" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav_item">
                <a className="nav_link" href="#">
                Statistics
                </a>
              </li>
              <li className="nav_item">
                <a className="nav_link" href="#">
                Applied Jobs
                </a>
              </li>
              <li className="nav_item">
                <a className="nav_link" href="#">
                Blog
                </a>
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
