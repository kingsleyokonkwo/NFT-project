import React from "react";
import redangle from "../../../../data/redangle.png";
import greenangle from "../../../../data/greenangle.png";
import classes from "./BtcStats.module.scss";
import Button from "../../../UI/Button/Button";

export default function BtcStats() {
  return (
    <div className={classes.stat__container}>
      <h3>BTC Price Statistics</h3>
      <div className={classes.stat}>
        <div className={classes.change}>
          <p className={classes.change__p}>Price Change</p>
          <p className={classes.change__24}>24h</p>
        </div>
        <div className={classes.value}>
          <p>$49,0920,029</p>
        </div>
      </div>

      <div className={classes.stat}>
        <div className={classes.change}>
          <p className={classes.change__p}>Price Change</p>
          <p className={classes.change__24}>24h</p>
        </div>
        <div className={classes.value}>
          <p>$49,0920,029</p>
          <span>
            <img src={greenangle} alt="arrow" />
            +62.50%{" "}
          </span>
        </div>
      </div>

      <div className={classes.stat}>
        <div className={classes.change}>
          <p className={classes.change__p}>Price Change</p>
          <p className={classes.change__24}>24h</p>
        </div>
        <div className={classes.value}>
          <p>$49,0920,029</p>
          <span>
            <img src={redangle} alt="arrow" />
            -22.50%{" "}
          </span>
        </div>
      </div>

      <div className={classes.stat}>
        <div className={classes.change}>
          <p className={classes.change__p}>Price Change</p>
          <p className={classes.change__24}>24h</p>
        </div>
        <div className={classes.value}>
          <p>$49,0920,029</p>
          <span>
            <img src={redangle} alt="arrow" />
            -22.50%{" "}
          </span>
        </div>
      </div>

      <div className={classes.stat}>
        <div className={classes.change}>
          <p className={classes.change__p}>Price Change</p>
          <p className={classes.change__24}>24h</p>
        </div>
        <div className={classes.value}>
          <p>$49,0920,029</p>
          <span>
            <img src={redangle} alt="arrow" />
            -22.50%{" "}
          </span>
        </div>
      </div>

      <div className={classes.stat}>
        <div className={classes.change}>
          <p className={classes.change__p}>Price Change</p>
          <p className={classes.change__24}>24h</p>
        </div>
        <div className={classes.value}>
          <p>$49,0920,029</p>
          <span>
            <img src={redangle} alt="arrow" />
            -22.50%{" "}
          </span>
        </div>
      </div>

      <div className={classes.stat}>
        <div className={classes.change}>
          <p className={classes.change__p}>Price Change</p>
          <p className={classes.change__24}>24h</p>
        </div>
        <div className={classes.value}>
          <p>#1</p>
        </div>
      </div>
      <Button className={classes.btn__stat}>Show More</Button>
    </div>
  );
}
