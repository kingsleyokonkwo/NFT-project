import React from "react";
import classes from "./Crypto.module.css";
import { Cryptocurrency } from "../../data/data";
import { NavLink } from "react-router-dom";

export default function CryptoAll() {
  const crypoItem = (props) => {
    return (
      <NavLink
        to={`${props.name}`}
        className={classes.crypo__item}
        key={props.id}
      >
        <span className={classes.crypto__itemId}>{props.id}</span>
        <div className={classes.crypto__detail}>
          <img
            className={classes.crypto__detailImg}
            src={props.img}
            alt="crypto symbol"
          />
          <div className={classes.coin__desc}>
            <p className={classes.coin__descName}>{props.name}</p>
            <p className={classes.coin__descShort}>{props.short}</p>
          </div>
        </div>
        <span className={classes.crypto__itemPrice}>{props.price}</span>
        <span
          className={`${classes.crypto__itemChange} ${
            props.loss ? `${classes.loss}` : `${classes.gain}`
          }`}
        >
          {props.change}
        </span>
        <span className={classes.crypto__itemMarketPrice}>{props.marketPrice}</span>
        <img className={classes.crypto__itemCryptoChart} src={props.chart} alt="chart" />
        <img src={props.star} alt="chart" />
      </NavLink>
    );
  };

  return (
    <div className={classes.cryptoItems}>{Cryptocurrency.map(crypoItem)}</div>
  );
}
