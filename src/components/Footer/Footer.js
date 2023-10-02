import React from "react";
import "./Footer.scss";
import logo from "../../img/virtual_logo.svg";
import loation from "../../img/Location.png";
import call from "../../img/Calling.png";
import massage from "../../img/Message.png";
import sosmed from "../../img/sosmed.svg";

const Footer = () => {
  return (
    <div>
      <footer id="footer">
        <div className="container">
          <div className="footer">
            <div className="nav_title">
              <div className="logo">
                <div>
                  <img src={logo} alt="" />
                </div>
                <div>
                  <p className="zone">Zone.</p>
                </div>
              </div>
              <div className="nav1">
                <img src={loation} alt="" />
                <a href="#">Dhaka, Bangladesh</a>
              </div>
              <div className="nav1">
                <img src={call} alt="" />
                <a href="#">0943833399</a>
              </div>
              <div className="nav1">
                <img src={massage} alt="" />
                <a href="#">support@zone.com</a>
              </div>
              <div className="footer_logo">
                <img src={sosmed} alt="" />
              </div>
            </div>
            <div className="footer_block">
              <p>
                Service <br /> Order Management <br />
                Social Assistant <br />
                Crypto Platform <br /> Analyzer of the News
              </p>
            </div>
            <div className="footer_block">
              Company <br />
              About <br />
              Us News
              <br /> Our trusted partner
              <br /> New users FAQ
            </div>
            <div className="footer_block">
              Supports
              <br /> Help center <br />
              Feedbcak <br />
              Contact us
              <br /> Terms conditins
            </div>
            <div className="footer_block">
              Resources
              <br /> Download app
              <br /> Blog
              <br /> What’s new
              <br /> Sitemap
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
