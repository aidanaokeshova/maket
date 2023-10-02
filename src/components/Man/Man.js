import React from "react";
import "./Man.scss";
import man from "../../img/virtualman.png";
import man2 from "../../img/man2.png";

const Man = () => {
  return (
    <section id="man">
      <div className="container">
        <div className="man">
          <div className="man_title">
            <div className="main_img">
              <img src={man} alt="" />
            </div>
            <div className="main_p">
              <p className="man_p1">
                We complete every projects <br /> extra care as customer need{" "}
              </p>
              <p className="man_p2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at
                dictum risus, <br /> non suscipit arcu. Quisque aliquam posuere
                tortor, sit amet convallis nuncoe <br /> scelerisque in. orem
                ipsum dolor sit amet, consectetur adipisicing elit. Labore{" "}
                <br /> eius molestiae facere, natus reprehenderit eaque eum,
                autem ipsam. Magfini, <br /> error. Tempora odit laborum iure
                inventore possimus laboriosam qui nam.
              </p>
              <button>Read more</button>
            </div>
          </div>
          <div className="man_title">
            <div className="main_p1">
              <p className="man_p1">
                We complete every projects <br /> extra care as customer need{" "}
              </p>
              <p className="man_p2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at
                dictum risus, <br /> non suscipit arcu. Quisque aliquam posuere
                tortor, sit amet convallis nuncoe <br /> scelerisque in. orem
                ipsum dolor sit amet, consectetur adipisicing elit. Labore{" "}
                <br /> eius molestiae facere, natus reprehenderit eaque eum,
                autem ipsam. Magfini, <br /> error. Tempora odit laborum iure
                inventore possimus laboriosam qui nam.
              </p>
              <button>Read more</button>
            </div>
            <div className="main_img">
              <img src={man2} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Man;
