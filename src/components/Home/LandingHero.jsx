import React from "react";
import classes from "./Landing.module.scss";
import diamond from "../../data/DiamondBig.png";
import check from "../../data/check.png";
import Reward from "./Reward/Reward";
import Button from "../UI/Button/Button";

export default function LandingHero() {
  return (
    <div className={classes.landing__container}>
      <div className={classes.landing__hero}>
        <div className={classes.balance}>
          <p className={classes.account__bal}>Account balance</p>
          <div className={classes.balance__detail}>
            <img src={diamond} alt="diamond icon" />
            <h3>36</h3>
            <p>Sapphire earned</p>
          </div>
        </div>
        <div className={classes.completed__task}>
          <img src={check} alt="diamond icon" />
          <h3>56</h3>
          <p>Completed Task</p>
        </div>
        <div
          className={classes.get__started}
        >
          <h3 className={classes.getStarted__landing}>
            Get Started with Cryptocurrency
          </h3>
          <Button>List Nft Project</Button>
        </div>
      </div>
      <div
        className={classes.landing__ad}
      >
        <h3>Get more insght on new information on Nft </h3>
        <Button>Join Us</Button>
      </div>
      <Reward />
    </div>
  );
}
