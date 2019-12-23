import React, { Component } from "react";
import job from "../assets/job.png";
import styles from "./home.css";

export default class Home extends Component {
  render() {
    return (
      <div className="main">
        <div className="row">
          <h1 className="heading">InterHelp</h1>
          <div className="col">
            <div class="adjust">
              <div className="image"></div>
              <p className="set"> Tanuja Nailwal</p>
            </div>
          </div>
          <p className="text">
            An Initiative to guide you through how companies hire! We are here
            to do our best to provide you with some resources we can avail to
            make you understand how the industry works.
          </p>
        </div>
        <div class="svg"></div>
        <div
          className="scroller"
          onClick={() => {
            window.scroll({
              top: 800,

              behavior: "smooth"
            });
          }}
        >
          <strong>Click for Videos</strong>
        </div>
      </div>
    );
  }
}
