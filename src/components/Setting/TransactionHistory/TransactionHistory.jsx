import React from "react";
import "./TransactionHistory.css";
import { receivedItems, withdrawItems } from "../../../data/data";

export default function TransactionHistory() {
  const receivedList = (props) => {
    return (
      <div className="transaction">
        <img
          className={`transaction__img ${props.received ? "received" : "withdraw"}`}
          src={props.img}
          alt="transfer"
        />
        <div className="transaction-detail">
          <p className="transaction-amt">{props.amount}</p>
          <p className="transaction-time">{props.time}</p>
        </div>
      </div>
    );
  };

  const withdrawList = (props) => {
    return (
      <div className="transaction">
        <img
          className={`transaction__img ${props.received ? "received" : "withdraw"}`}
          src={props.img}
          alt="transfer"
        />
        <div className="transaction-detail">
          <p className="transaction-amt">{props.amount}</p>
          <p className="transaction-time">{props.time}</p>
        </div>
      </div>
    );
  };

  return (
    <div className="TransactionHistory-container">
      <div className="received-container">
        <h3 className="TransactionHistory-title">Received</h3>
        <div className="received-transactions">
          {receivedItems.map(receivedList)}
        </div>
      </div>

      <div className="withdraw-container">
        <h3 className="TransactionHistory-title">Withdraw</h3>
        <div className="received-transactions">
          {withdrawItems.map(withdrawList)}
        </div>
      </div>
    </div>
  );
}
