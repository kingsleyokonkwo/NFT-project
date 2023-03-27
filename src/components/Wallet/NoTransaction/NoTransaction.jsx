import React from "react";
import coin from "../../../data/stacked-coin.png";
import { Link } from "react-router-dom";
import './NoTransaction.css'

export default function NoTransaction() {
  return (
    <div className="NT-container">
      <img src={coin} alt="stacked coins" />
      <p>No Transactions Yet</p>
      <Link className="see-cryptos-link">See Cryptocurrencies</Link>
    </div>
  );
}
