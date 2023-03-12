import React from "react";
import "./Crypto.css";
import { Cryptocurrency } from "../../data/data";
import { NavLink } from "react-router-dom";

export default function CryptoAll() {
  const crypoItem = (props) => {
    return (
      <NavLink to={`${props.name}`} className="crypo-item" key={props.id}>
        <span className="crypto-id">{props.id}</span>
        <div className="crypto-detail">
          <img className="crypto-img" src={props.img} alt="crypto symbol" />
          <div className="cryto-detail">
            <p className="crypto-name">{props.name}</p>
            <p className="crypto-short">{props.short}</p>
          </div>
        </div>
        <span className="crypto-price">{props.price}</span>
        <span
          className="crypto-change"
          style={{ color: props.loss ? "#EF4444" : "#10B981" }}
        >
          {props.change}
        </span>
        <span className="market-price">{props.marketPrice}</span>
        <img className="crypto-chart" src={props.chart} alt="chart" />
        <img src={props.star} alt="chart" />
      </NavLink>
    );
  };

  return <div className="cryptoItems">{Cryptocurrency.map(crypoItem)}</div>;
}


  /* <Bitcoin /> stay here for now mate. I think it should be rendered when bitcoin is clicked... */

