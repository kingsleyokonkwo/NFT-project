import React from "react";
import { Link } from "react-router-dom";
import { transactionItems } from "../../../data/data";
import './Transaction.css'

export default function Transactions() {
  const transactionList = (props) => {
    return (
      <div className="transaction">
        <img
          className={`transaction-img ${props.received ? "received" : "sent"}`}
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
    <div className="transactions-container">
      <div className="transactions">
        {transactionItems.map(transactionList)}
      </div>
      <Link className="see-cryptos-link">See all Transaction</Link>
    </div>
  );
}
