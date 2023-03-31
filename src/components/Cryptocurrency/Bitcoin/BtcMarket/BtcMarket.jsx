import React from "react";
import greenangle from "../../../../data/greenangle.png";
import redangle from "../../../../data/redangle.png";
import classes from './BtcMarket.module.css'

export default function BtcMarket() {
  return (
    <div className={classes.bitcoin__market}>
      <div className={classes.col__1}>
        <div className={classes.market__cap}>
          <span>
            <img src={greenangle} alt="angle" /> +62.50%
          </span>
          <p className={classes.market__capPrice}>$831,056,257</p>
          <p className={classes.market__capName}>Market Cap</p>
        </div>
        <div className={classes.market__cap}>
          <span>
            <img src={redangle} alt="angle" /> -22.50%
          </span>
          <p className={classes.market__capPrice}>$2,831,056,257</p>
          <p className={classes.market__capName}>Fully Diluted Market Cap</p>
        </div>
      </div>
      <div className={classes.col__2}>
        <div className={classes.market__cap}>
          <span>
            <img src={redangle} alt="angle" />
            -22.50%
          </span>
          <p className={classes.market__capPrice}>$8,572,500</p>
          <div className={classes.vol}>
            <p className={classes.market__capName}>Volume</p>
            <p className={classes.vol__time}>24h</p>
          </div>
        </div>
        <div className={classes.vol__cap}>
          <p className={classes.market__capPrice}>0.012</p>
          <div className={classes.vol}>
            <p className={classes.market__capName}>Volume/Market Cap</p>
            <p className={classes.vol__time}>24h</p>
          </div>
        </div>
      </div>
      <div className={classes.col__3}>
        <p className={classes.market__capPrice}>188,572,500 BTC</p>
        <p className={classes.market__capName}> Circulating Supply </p>
      </div>
      <div className={classes.col__4}>
        <div className={classes.max__supply}>
          <p className={classes.market__capPrice}>188,572,500 BTC</p>
          <p className={classes.market__capName}>Max Supply</p>
        </div>
        <div className="min-supply">
          <p className={classes.market__capPrice}>188,572,500 BTC</p>
          <p className={classes.market__capName}>Min Supply</p>
        </div>
      </div>
    </div>
  );
}
