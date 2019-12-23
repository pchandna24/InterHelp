import React, { Component } from "react";
import styles from "./videos.css";
import Video from "../db.js";

export default class Videos extends Component {
  render() {
    return (
      <div>
        {Video.map((item, idx) => {
          return (
            <div className="Videos">
              <div
                className="rows"
                style={{
                  position: "relative"
                }}
              >
                <iframe
                  style={{
                    borderRadius: "10px",
                    position: "absolute",
                    left: "50%",
                    transform: "translate(-50%,0)",
                    top: "-50px",
                    boxShadow: "5px 5px 10px rgba(0,0,0,0.3)"
                  }}
                  className="Player"
                  src={item.link}
                  frameBorder="0"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                  title="video"
                />
                <div className="details">
                  <div className="name">
                    {" "}
                    <p>
                      {" "}
                      <strong>Name:</strong> {item.title}{" "}
                    </p>
                  </div>
                  <div className="company">
                    {" "}
                    <p>
                      {" "}
                      <strong>Company:</strong> {item.company}{" "}
                    </p>
                  </div>
                </div>{" "}
              </div>{" "}
            </div>
          );
        })}

        <div className="footer">
          <div>
            <p class="help">
              Email us :) @{" "}
              <a
                style={{ color: "#36454f" }}
                href="mailto:pchandna24@gmail.com"
              >
                Tanuja Nailwal
              </a>
            </p>
            <p class="help">
              Made by
              <a style={{ color: "#36454f" }} href="https://parthchandna.tech">
                {" "}
                Parth Chandna
              </a>{" "}
            </p>
          </div>
        </div>
      </div>
    );
  }
}
