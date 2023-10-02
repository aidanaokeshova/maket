import React from "react";
import "./Team.scss";
import team1 from "../../img/team1.svg";
import skype from "../../img/skype.svg";
import linkedin from "../../img/linkedin.svg";
import twitter from "../../img/twitter.svg";
import Frame from "../../img/Frame.svg";

const Team = () => {
  return (
    <section id="team">
      <div className="container">
        <div className="team">
          <div className="team_title">
            <p className="team_p1">Met Our Team</p>
            <p className="team_p2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis{" "}
              <br />
              accumsan nisi Ut ut felis congue nisl hendrerit commodo.
            </p>
          </div>
          <div className="team_block1">
            <div className="team_block">
              <img src={team1} alt="indus" />
              <p className="team_p3">Sunny Khan</p>
              <p className="team_p4">Executive officer</p>
              <div className="team_icons">
                <img src={skype} alt="skype" />
                <img src={linkedin} alt="" />
                <img src={twitter} alt="" />
                <img src={Frame} alt="" />
              </div>
            </div>
            <div className="team_block">
              <img src={team1} alt="indus" />
              <p className="team_p3">Sunny Khan</p>
              <p className="team_p4">Executive officer</p>
              <div className="team_icons">
                <img src={skype} alt="skype" />
                <img src={linkedin} alt="" />
                <img src={twitter} alt="" />
                <img src={Frame} alt="" />
              </div>
            </div>
            <div className="team_block">
              <img src={team1} alt="indus" />
              <p className="team_p3">Sunny Khan</p>
              <p className="team_p4">Executive officer</p>
              <div className="team_icons">
                <img src={skype} alt="skype" />
                <img src={linkedin} alt="" />
                <img src={twitter} alt="" />
                <img src={Frame} alt="" />
              </div>
            </div>
            <div className="team_block">
              <img src={team1} alt="indus" />
              <p className="team_p3">Sunny Khan</p>
              <p className="team_p4">Executive officer</p>
              <div className="team_icons">
                <img src={skype} alt="skype" />
                <img src={linkedin} alt="" />
                <img src={twitter} alt="" />
                <img src={Frame} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
