import React, { useState } from "react";
import white from "../../../data/white.png";
import map from "../../../data/map.png";
import Chart from "./Charts/Chart";
import Roadmap from "./Roadmap/Roadmap";
import Review from "./Review/Review";
import "./Bitcoin.css";
import ReviewIpad from "./Review/ReviewIpad";
import BtcProps from "./BtcProps";
import BtcPrice from "./BtcPrice";
import BtcRating from "./BtcRating";
import BtcMarket from "./BtcMarket";

export default function Bitcoin() {
  const [info, setInfo] = useState("chart");

  return (
    <div className="bitcoin-container">
      <div className="bitcoin-details">
        <div className="btc-detail">
          <BtcProps />
          <BtcPrice />
        </div>
        <BtcRating />
        <BtcMarket />
        <div className="bitcoin-info">
          <div className="info-title">
            <div className="overview">
              <div
                className="info-header"
                onClick={() => {
                  setInfo("chart");
                }}
              >
                <img src={white} alt="star" />
                <h3>Overview</h3>
              </div>
              {info === "chart" && <hr className="straight-line" />}
            </div>
            <div className="overview">
              <div
                className="info-header"
                onClick={() => {
                  setInfo("roadmap");
                }}
              >
                <img src={map} alt="map" />
                <h3>Roadmap</h3>
              </div>
              {info === "roadmap" && <hr className="straight-line" />}
            </div>

            <div className="review-button">
              <div
                className="reviewbtn-inner"
                onClick={() => {
                  setInfo("review");
                }}
              >
                <p className="reviewbtn-review">Review</p>
                <p className="review-button-number">4</p>
              </div>
            </div>
          </div>
          <hr className="horizontal-line" />
          {info === "chart" && <Chart />}
          {info === "roadmap" && <Roadmap />}
          {info === "review" && <ReviewIpad />}
        </div>
      </div>
      <div className="review">
        <Review />
      </div>
    </div>
  );
}
