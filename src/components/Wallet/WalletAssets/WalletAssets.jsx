import React, { useState } from "react";
import more from "../../../data/more.png";
import withdraw from "../../../data/send-sqaure-2.png";
import deposit from "../../../data/receive-square-2.png";
import cancel from "../../../data/cancel.png";
import { assets } from "../../../data/data";
import classes from "./WalletAssets.module.css";

export default function WalletAssets() {
  const [dropdown, setDropdown] = useState(false);

  const assetItem = (props) => {
    return (
      <div className={classes.asset__item}>
        <img
          className={classes.asset__img}
          src={props.img}
          alt="asset symbol"
        />
        <div className={classes.asset__detail}>
          <p className={classes.asset__name}>{props.name}</p>
          <p className={classes.asset__short}>{props.short}</p>
        </div>
        <span className={classes.asset__balance}>{props.balance}</span>
        <span
          className={`${classes.asset__change} ${
            props.loss ? `${classes.loss}` : `${classes.gain}`
          }`}
        >
          {props.change}
        </span>
        <span className={classes.asset__price}>{props.marketPrice}</span>
        <img
          className={classes.more__sign}
          src={more}
          alt="more..."
          onMouseEnter={() => setDropdown(true)}
          onClick={() => setDropdown(false)}
        />
      </div>
    );
  };

  return (
    <div className={classes.asset__items}>
      {assets.map(assetItem)}
      {dropdown && (
        <div className={classes.asset__dropdown}>
          <span>
            <img src={withdraw} alt="withdrawal logo" /> Withdraw
          </span>
          <span>
            <img src={deposit} alt="deposit logo" /> Deposit
          </span>
          <span onClick={() => setDropdown(false)}>
            <img src={cancel} alt="cancel" /> Cancel
          </span>
        </div>
      )}
    </div>
  );
}
