import React from "react";
import coin from "../../../data/stacked-coin.png";
import { Link } from "react-router-dom";
import classes from './NoTransaction.module.css'

export default function NoTransaction() {
  return (
    <div className={classes.NT__container}>
      <img src={coin} alt="stacked coins" />
      <p>No Transactions Yet</p>
      <Link className={classes.seeCryptosLink}>See Cryptocurrencies</Link>
    </div>
  );
}
