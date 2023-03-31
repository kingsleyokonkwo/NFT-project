import React from "react";
import greenangle from "../../../../data/greenangle.png";
import arrowdown from "../../../../data/arrow-down.png";
import classes from './BtcPrice.module.css'

export default function BtcPrice() {
  return (
    <div className={classes.btc__price}>
      <p className={classes.btc__priceP}>Bitcoin Price</p>
      <span className={classes.price__span}>
        <h3 className={classes.price__spanH3}>49,000,830</h3>
        <img className={classes.price__spanImg} src={greenangle} alt="angle" />
        <p className={classes.price__spanP}>+62.50%</p>
      </span>
      <div className={classes.btc__range}>
        <span>Low: $42,0000</span>
        <span>High: $42,0000</span>
      </div>
      <div className={classes.range}>
        <input type="range" min="0" max="100" value="65" id={classes.slider} />
        <div className={classes.selector}>
          <div className={classes.selectBtn}></div>
        </div>
      </div>
      <span className={classes.time__span}>
        24 Hr <img className={classes.btclink__arrow} src={arrowdown} alt="arrow" />
      </span>
    </div>
  );
}
