import React from "react";
import "./Header.scss";
import virtual_logo from "../../img/virtual_logo.svg";
const Header = () => {
  return (
    <div>
      <header id="header">
        <div className="container">
          <div className="header">
            <div className="main">
              <div className="logo">
                <img src={virtual_logo} alt="logo" />
                <h2>Zone.</h2>
              </div>
              <div className="header_nav">
                <nav>
                  <li>Home</li>
                  <li>About Us</li>
                  <li>Service</li>
                  <li>Pricing</li>
                  <li>Blog</li>
                </nav>
              </div>
              <div className="header_btn">
                <button className="btn1">Contact Us</button>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
