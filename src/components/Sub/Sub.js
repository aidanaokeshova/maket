import React from "react";
import "./Sub.scss";
import mass from "../../img/mass.svg";

const Sub = () => {
  return (
    <section id="sub">
      <div className="container">
        <div className="sub">
          <div>
            <p className="sub_title">Subscribe to get the Latest News</p>
            <p className="sub_p1">
              We recommended you to subscribe to our newspaper,drop your email
              below to get daily update about us
            </p>
          </div>
          <div className="sub_btn">
            <p className="btn_p">Enter your email addres</p>
            <button>
              <p>Subscribe</p>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sub;
