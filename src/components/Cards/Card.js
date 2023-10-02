import React from "react";
import "./Card.scss";
import card1 from "../../img/card1.png";
import learnmore from "..//../img/learnmore.svg";
import checklist from "..//../img/checklist.png";

const Card = () => {
  return (
    <section id="cards">
      <div className="container">
        <div className="cards">
          <div className="card_title">
            <div className="card1">
              <img src={card1} alt="icon" />
            </div>
            <div className="card2">
              {" "}
              <img src={checklist} alt="" />
            </div>
            <p className="card_p1">Order Management</p>
            <p className="card_p2">
              Lorem ipsum dolor sit amet, consectetur <br /> the adipiscing
              elit. Sed quis accumsan nisi <br /> Ut ut felis congue nisl
              hendrerit commodo.
            </p>
            <nav>
              <li>Learn more</li>
              <img src={learnmore} alt="" />
            </nav>
          </div>
        </div>
        <div className="cards">
          <div className="card_title">
            <div className="card1">
              <img src={card1} alt="icon" />
            </div>
            <div className="card2">
              {" "}
              <img src={checklist} alt="" />
            </div>
            <p className="card_p1">Order Management</p>
            <p className="card_p2">
              Lorem ipsum dolor sit amet, consectetur <br /> the adipiscing
              elit. Sed quis accumsan nisi <br /> Ut ut felis congue nisl
              hendrerit commodo.
            </p>
            <nav>
              <li>Learn more</li>
              <img src={learnmore} alt="" />
            </nav>
          </div>
        </div>
        <div className="cards">
          <div className="card_title">
            <div className="card1">
              <img src={card1} alt="icon" />
            </div>
            <div className="card2">
              {" "}
              <img src={checklist} alt="" />
            </div>
            <p className="card_p1">Order Management</p>
            <p className="card_p2">
              Lorem ipsum dolor sit amet, consectetur <br /> the adipiscing
              elit. Sed quis accumsan nisi <br /> Ut ut felis congue nisl
              hendrerit commodo.
            </p>
            <nav>
              <li>Learn more</li>
              <img src={learnmore} alt="" />
            </nav>
          </div>
        </div>
        <div className="cards">
          <div className="card_title">
            <div className="card1">
              <img src={card1} alt="icon" />
            </div>
            <div className="card2">
              {" "}
              <img src={checklist} alt="" />
            </div>
            <p className="card_p1">Order Management</p>
            <p className="card_p2">
              Lorem ipsum dolor sit amet, consectetur <br /> the adipiscing
              elit. Sed quis accumsan nisi <br /> Ut ut felis congue nisl
              hendrerit commodo.
            </p>
            <nav>
              <li>Learn more</li>
              <img src={learnmore} alt="" />
            </nav>
          </div>
        </div>
        <div className="cards">
          <div className="card_title">
            <div className="card1">
              <img src={card1} alt="icon" />
            </div>
            <div className="card2">
              {" "}
              <img src={checklist} alt="" />
            </div>
            <p className="card_p1">Order Management</p>
            <p className="card_p2">
              Lorem ipsum dolor sit amet, consectetur <br /> the adipiscing
              elit. Sed quis accumsan nisi <br /> Ut ut felis congue nisl
              hendrerit commodo.
            </p>
            <nav>
              <li>Learn more</li>
              <img src={learnmore} alt="" />
            </nav>
          </div>
        </div>
        <div className="cards">
          <div className="card_title">
            <div className="card1">
              <img src={card1} alt="icon" />
            </div>
            <div className="card2">
              {" "}
              <img src={checklist} alt="" />
            </div>
            <p className="card_p1">Order Management</p>
            <p className="card_p2">
              Lorem ipsum dolor sit amet, consectetur <br /> the adipiscing
              elit. Sed quis accumsan nisi <br /> Ut ut felis congue nisl
              hendrerit commodo.
            </p>
            <nav>
              <li>Learn more</li>
              <img src={learnmore} alt="" />
            </nav>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Card;
