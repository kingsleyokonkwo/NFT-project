import React, { useState } from "react";
import more from "../../../data/more.png";
import withdraw from "../../../data/send-sqaure-2.png";
import deposit from "../../../data/receive-square-2.png";
import cancel from "../../../data/cancel.png";
import { assets } from "../../../data/data";
import './WalletAssets.css'

export default function WalletAssets() {
  const [dropdown, setDropdown] = useState(false);

  const assetItem = (props) => {
    return (
      <div className="asset-item">
        <img className="asset-img" src={props.img} alt="asset symbol" />
        <div className="asset-detail">
          <p className="asset-name">{props.name}</p>
          <p className="asset-short">{props.short}</p>
        </div>
        <span className="asset-balance">{props.balance}</span>
        <span
          className={`asset-change ${props.loss ? "loss" : "gain"}`}
        >
          {props.change}
        </span>
        <span className="asset-price">{props.marketPrice}</span>
        <img
          className="more-sign"
          src={more}
          alt="more..."
          onMouseEnter={() => setDropdown(true)}
          onClick={() => setDropdown(false)}
        />
      </div>
    );
  };

  return (
    <div className="asset-items">
      {assets.map(assetItem)}
      {dropdown && (
        <div className="asset-dropdown">
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
