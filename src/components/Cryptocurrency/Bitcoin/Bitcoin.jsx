import React, { useState } from "react";
import white from "../../../data/white.png";
import map from "../../../data/map.png";
import Chart from "./Charts/Chart";
import Roadmap from "./Roadmap/Roadmap";
import Review from "./Review/Review";
import classes from "./Bitcoin.module.scss";
import ReviewIpad from "./Review/ReviewIpad";
import BtcProps from "./BtcProps/BtcProps";
import BtcPrice from "./BtcPrice/BtcPrice";
import BtcRating from "./BtcRating/BtcRating";
import BtcMarket from "./BtcMarket/BtcMarket";

export default function Bitcoin() {
  const [info, setInfo] = useState("chart");

  return (
    <div className={classes.bitcoin__container}>
      <div className={classes.bitcoin__details}>
        <div className={classes.btc__detail}>
          <BtcProps />
          <BtcPrice />
        </div>
        <BtcRating />
        <BtcMarket />
        <div className={classes.bitcoin__info}>
          <div className={classes.bitcoin__infoTitle}>
            <div className={classes.overview}>
              <div
                className={classes.overview__header}
                onClick={() => {
                  setInfo("chart");
                }}
              >
                <img src={white} alt="star" />
                <h3>Overview</h3>
              </div>
              {info === "chart" && <hr className={classes.straight__line} />}
            </div>
            <div className={classes.overview}>
              <div
                className={classes.overview__header}
                onClick={() => {
                  setInfo("roadmap");
                }}
              >
                <img src={map} alt="map" />
                <h3>Roadmap</h3>
              </div>
              {info === "roadmap" && <hr className={classes.straight__line} />}
            </div>

            <div className={classes.review__button}>
              <div
                className={classes.review__btnInner}
                onClick={() => {
                  setInfo("review");
                }}
              >
                <p className={classes.review__btnReview}>Review</p>
                <p className={classes.review__btnNumber}>4</p>
              </div>
            </div>
          </div>
          <hr className={classes.horizontal__line} />
          {info === "chart" && <Chart />}
          {info === "roadmap" && <Roadmap />}
          {info === "review" && <ReviewIpad />}
        </div>
      </div>
      <div className={classes.review}>
        <Review />
      </div>
    </div>
  );
}