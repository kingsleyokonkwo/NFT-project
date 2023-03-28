import React, { useState } from "react";
import Button from "../UI/Button/Button";
import "./Crypto.css";
import CryptoAll from "./CryptoAll";
import WatchList from "./WatchList";

export default function Crypto() {
  const [active, setActive] = useState("crypto");
  console.log(active);
  return (
    <div className="cryto-container">
      <div className="crypto-title">
        <h3>Cryptocurreny</h3>
        <span
          className={`crypto-all ${active === "crypto" ? "active" : ""}`}
          onClick={() => setActive("crypto")}
        >
          All
        </span>
        <span
          className={`crypto-watchlist ${
            active === "watchlist" ? "active" : ""
          }`}
          onClick={() => setActive("watchlist")}
        >
          Watchlist
        </span>
      </div>
      <div className="crypto-desc">
        <span className="hashtag">#</span>
        <span className="desc-name">Name</span>
        <span className="desc-price">Price</span>
        <span className="desc-24">24h Change</span>
        <span className="desc-markrt">Market Price</span>
        <span className="desc-chart">Chart</span>
      </div>
      {active === "crypto" && <CryptoAll />}
      {active === "watchlist" && <WatchList />}
      <Button className="btn-main--reward crypto">Load More</Button>
    </div>
  );
}
