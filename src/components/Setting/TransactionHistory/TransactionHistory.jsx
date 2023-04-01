import React from "react";
import classes from "./TransactionHistory.module.css";
import { receivedItems, withdrawItems } from "../../../data/data";

export default function TransactionHistory() {
  const receivedList = (props) => {
    return (
      <div className={classes.transaction}>
        <img
          className={`${classes.transaction__img} ${
            props.received ? `${classes.received}` : `${classes.withdraw}`
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

  const withdrawList = (props) => {
    return (
      <div className={classes.transaction}>
        <img
          className={`${classes.transaction__img} ${
            props.received ? `${classes.received}` : `${classes.withdraw}`
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
    <div className={classes.TransactionHistory__container}>
      <div className={classes.received__container}>
        <h3 className={classes.TransactionHistory__title}>Received</h3>
        <div className={classes.received__transactions}>
          {receivedItems.map(receivedList)}
        </div>
      </div>

      <div className={classes.withdraw__container}>
        <h3 className={classes.TransactionHistory__title}>Withdraw</h3>
        <div className={classes.received__transactions}>
          {withdrawItems.map(withdrawList)}
        </div>
      </div>
    </div>
  );
}
