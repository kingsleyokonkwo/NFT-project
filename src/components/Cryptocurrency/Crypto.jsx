import React, { useState } from "react";
import Button from "../UI/Button/Button";
import classes from "./Crypto.module.css";
import CryptoAll from "./CryptoAll";
import WatchList from "./WatchList";

export default function Crypto() {
  const [active, setActive] = useState("crypto");
  return (
    <div className={classes.cryto__container}>
      <div className={classes.crypto__title}>
        <h3>Cryptocurreny</h3>
        <span
          className={`${classes.crypto__all} ${
            active === "crypto" ? `${classes.active}` : ""
          }`}
          onClick={() => setActive("crypto")}
        >
          All
        </span>
        <span
          className={`${classes.crypto__watchlist} ${
            active === "watchlist" ? `${classes.active}` : ""
          }`}
          onClick={() => setActive("watchlist")}
        >
          Watchlist
        </span>
      </div>
      <div className={classes.crypto__desc}>
        <span className={classes.hashtag}>#</span>
        <span className={classes.desc__name}>Name</span>
        <span className={classes.desc__price}>Price</span>
        <span className={classes.desc__24}>24h Change</span>
        <span className={classes.desc__market}>Market Price</span>
        <span className={classes.desc__chart}>Chart</span>
      </div>
      {active === "crypto" && <CryptoAll />}
      {active === "watchlist" && <WatchList />}
      <Button className="btn-main--reward crypto">Load More</Button>
    </div>
  );
}
