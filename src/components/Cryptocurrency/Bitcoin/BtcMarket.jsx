import React from "react";
import greenangle from "../../../data/greenangle.png";
import redangle from "../../../data/redangle.png";

export default function BtcMarket() {
  return (
    <div className="bitcoin-market">
      <div className="col-1">
        <div className="market-cap">
          <span>
            <img src={greenangle} alt="angle" /> +62.50%
          </span>
          <p className="marketcap-price">$831,056,257</p>
          <p className="marketcap-name">Market Cap</p>
        </div>
        <div className="market-cap">
          <span>
            <img src={redangle} alt="angle" /> -22.50%
          </span>
          <p className="marketcap-price">$2,831,056,257</p>
          <p className="marketcap-name">Fully Diluted Market Cap</p>
        </div>
      </div>
      <div className="col-2">
        <div className="market-cap">
          <span>
            <img src={redangle} alt="angle" />
            -22.50%
          </span>
          <p className="marketcap-price">$8,572,500</p>
          <div className="vol">
            <p className="marketcap-name">Volume</p>
            <p className="time-24">24h</p>
          </div>
        </div>
        <div className="vol-cap">
          <p className="marketcap-price">0.012</p>
          <div className="vol">
            <p className="marketcap-name">Volume/Market Cap</p>
            <p className="time-24">24h</p>
          </div>
        </div>
      </div>
      <div className="col-3">
        <p className="marketcap-price">188,572,500 BTC</p>
        <p className="marketcap-name"> Circulating Supply </p>
      </div>
      <div className="col-4">
        <div className="max-supply">
          <p className="marketcap-price">188,572,500 BTC</p>
          <p className="marketcap-name">Max Supply</p>
        </div>
        <div className="min-supply">
          <p className="marketcap-price">188,572,500 BTC</p>
          <p className="marketcap-name">Min Supply</p>
        </div>
      </div>
    </div>
  );
}
