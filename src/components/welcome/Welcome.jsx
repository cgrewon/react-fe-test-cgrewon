import React from "react";
import "./Welcome.css";

export default function Welcome({}) {
  return (
    <div className="welcome-container">
      <div className="main-container">
        <div className="left-container">
          <img src={"/images/welcome.svg"} />
          <a href="/create" className="btn-main btn-create-left">
            🎉 Create my event
          </a>
        </div>

        <div className="right-container">
          <h1 className="main-title">
            Imagine if <br />
            <span className="snapchat-brand">Snapchat</span>
            <br />
            had events.
          </h1>
          <p>
            Easily host and share event with your  <br /> friends
           across any social media.
          </p>
          <a href="/create" className="btn-main btn-create-right">
            🎉 Create my event
          </a>
        </div>
      </div>
    </div>
  );
}
