import React from "react";
import greenangle from "../../../data/greenangle.png";
import arrowdown from "../../../data/arrow-down.png";

export default function BtcPrice() {
  return (
    <div className="btc-price">
      <p className="btcprice-p">Bitcoin Price</p>
      <span className="price-span">
        <h3 className="pricespan-h3">49,000,830</h3>
        <img className="pricespan-img" src={greenangle} alt="angle" />
        <p className="pricespan-p">+62.50%</p>
      </span>
      <div className="btc-range">
        <span>Low: $42,0000</span>
        <span>High: $42,0000</span>
      </div>
      <div className="range">
        <input type="range" min="0" max="100" value="65" id="slider" />
        <div className="selector">
          <div className="selectBtn"></div>
        </div>
      </div>
      <span className="time-span">
        24 Hr <img className="btclink-arrow" src={arrowdown} alt="arrow" />
      </span>
    </div>
  );
}
