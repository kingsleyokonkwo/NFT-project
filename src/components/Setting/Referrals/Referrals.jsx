import React from "react";
import classes from "./Referrals.module.scss";
import diamond from "../../../data/diamond.png";
import { referralList } from "../../../data/data";

export default function Referrals() {
  const referralItems = (props) => {
    return (
      <div className={classes.referralItem}>
        <div className={classes.referralItem__details}>
          <img src={props.img} alt="profile pic" />
          <div className={classes.referralItem__detail}>
            <h3>
              You Referred <span className={classes.referral__name}>{props.name}</span>
            </h3>
            <p>
              {props.year} {props.time}
            </p>
          </div>
        </div>
        <span className={classes.referral__gem}>
          <img src={diamond} alt="diamond gem" />
          {props.reward}
        </span>
      </div>
    );
  };
  return (
    <div className={classes.Referrals__container}>
      <div className={classes.referral__recent}>
        <h3 className={classes.referral__time}>Today</h3>
        {referralList.map(referralItems)}
      </div>
      <div className={classes.referral__later}>
        <h3 className={classes.referral__time}>Aug 26th</h3>
        {referralList.slice(3).map(referralItems)}
      </div>
    </div>
  );
}