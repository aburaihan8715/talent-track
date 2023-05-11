import React from "react";
import "./Footer.css";
import facebookIcon from "../../assets/images/icons/Frame.png";

const Footer = () => {
  return (
    <footer className="footer_area">
      <div className="container">
        <div className="row mb-5">
          <div className="col-md-3">
            <h3 className="heading_tertiary heading_tertiary_light">CareerHub</h3>
            <p className="primary_p primary_p_light">
              There are many variations of passages of Lorem Ipsum , but the majority have suffered alteration in some form.
            </p>
            <div className="social_icons_box">
              <span className="social_icon_box">
                <img className="social_icon" src={facebookIcon} alt="facebook icon" />
              </span>
              <span className="social_icon_box">
                <img className="social_icon" src={facebookIcon} alt="facebook icon" />
              </span>
              <span className="social_icon_box">
                <img className="social_icon" src={facebookIcon} alt="facebook icon" />
              </span>
            </div>
          </div>
          <div className="col-md-2">
            <h4 className="heading_quaternary">Company</h4>
            <ul className="footer_list">
              <a className="footer_link" href="#">
                About us
              </a>
              <a className="footer_link" href="#">
                work
              </a>
              <a className="footer_link" href="#">
                Latest News
              </a>
              <a className="footer_link" href="#">
                Careers
              </a>
            </ul>
          </div>

          <div className="col-md-2">
            <h4 className="heading_quaternary">Product</h4>
            <ul className="footer_list">
              <a className="footer_link" href="#">
                Prototype
              </a>
              <a className="footer_link" href="#">
                Plans & Pricing
              </a>
              <a className="footer_link" href="#">
                Customers
              </a>
              <a className="footer_link" href="#">
                Integrations
              </a>
            </ul>
          </div>

          <div className="col-md-2">
            <h4 className="heading_quaternary">Support</h4>
            <ul className="footer_list">
              <a className="footer_link" href="#">
                Help Desk
              </a>
              <a className="footer_link" href="#">
                Sales
              </a>
              <a className="footer_link" href="#">
                Become a Partner
              </a>
              <a className="footer_link" href="#">
                Developers
              </a>
            </ul>
          </div>

          <div className="col-md-3">
            <h4 className="heading_quaternary">Contact</h4>
            <ul className="footer_list">
              <p className="primary_p primary_p_light">524 Broadway , NYC</p>
              <a className="footer_link" href="#">
                +1 777 - 978 - 5570
              </a>
            </ul>
          </div>
        </div>
        <div className="h_line"></div>

        <div className="d-flex justify-content-between">
            <p>@2023 CareerHub. All Rights Reserved</p>
            <p className="">Powered by CareerHub</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
