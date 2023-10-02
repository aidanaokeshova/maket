import React from "react";
import "./About.scss";
import abouticon from "../../img/abouticon.png";
import aboutimg from "../../img/aboutimg.png";

const About = () => {
  return (
    <div>
      <section id="about">
        <div className="container">
          <div className="about">
            <div className="about_main">
              <div className="about_title">
                <h1>Virtual Reality Business Solutions</h1>
                <p className="about_p">
                  We have over 15 year exprience in business consultting arena.
                  We have over 15 year exprience in business consultting arena
                  and artficial intelligence.
                </p>
                <div className="btn_vid">
                  <div>
                    <button className="btn_about">Join Us</button>
                  </div>
                  <div>
                    <img src={abouticon} alt="icon" />
                  </div>

                  <div>
                    {" "}
                    <p className="p2">Watch video</p>
                  </div>
                </div>
              </div>
              <div className="about_img">
                <img src={aboutimg} alt="img" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
