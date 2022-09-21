import React from "react";
import { FiChevronRight } from "react-icons/fi";

import "./Event.css";

export default function Event({}) {
  return (
    <div className="event-container">
      <div className="event-main-wrapper">
        <div className="event-left-container">
          <h1>Birthday Bash</h1>
          <p>
            Hosted by <span>Elysia</span>
          </p>
          <div className="item">
            <div className="row">
              <div className="event-icon-wrapper">
                <img className="item-icon" src="/images/calendar.png" />
              </div>
              <div className="event-date-text-wrapper">
                <span className="from-date event-date-text">
                  18 August 6:00PM
                </span>
                <span className="to-date">
                  to <span className="event-date-text">19 August 1:00PM</span>{" "}
                  UTC +10
                </span>
              </div>
            </div>
            <div className="arrow-right-container">
              <FiChevronRight />
            </div>
          </div>
          <div className="item">
            <div className="row">
              <div className="event-icon-wrapper">
                <img className="item-icon" src="/images/location.png" />
              </div>
              <div className="event-location-text-wrapper">
                <span className="address-line1">Street name</span>
                <span className="address-line2">Suburb, State, Postcode</span>
              </div>
            </div>
            <div className="arrow-right-container">
              <FiChevronRight />
            </div>
          </div>
        </div>
        <div className="event-right-container">
          <img src="/images/cake.png" alt="cake" />
        </div>
      </div>
    </div>
  );
}
