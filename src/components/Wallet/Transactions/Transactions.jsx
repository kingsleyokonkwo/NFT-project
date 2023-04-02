import React from "react";
import { Link } from "react-router-dom";
import { transactionItems } from "../../../data/data";
import classes from "./Transaction.module.scss";

export default function Transactions() {
  const transactionList = (props) => {
    return (
      <div className={classes.transaction}>
        <img
          className={`${classes.transaction__img} ${
            props.received ? `${classes.received}` : `${classes.sent}`
          }`}
          src={props.img}
          alt="transfer"
        />
        <div className={classes.transaction__detail}>
          <p className={classes.transaction__amt}>{props.amount}</p>
          <p className={classes.transaction__time}>{props.time}</p>
        </div>
      </div>
    );
  };

  return (
    <div className={classes.transactions__container}>
      <div className={classes.transactions}>
        {transactionItems.map(transactionList)}
      </div>
      <Link className={classes.seeCryptosLink}>See all Transaction</Link>
    </div>
  );
}
