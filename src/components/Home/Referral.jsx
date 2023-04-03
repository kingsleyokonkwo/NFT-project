import React from "react";
import copy from "../../data/copy.png";
import twitter from "../../data/twitter.png";
import facebook from "../../data/facebook.png";
import instagram from "../../data/instagram.png";
import classes from "./Referral.module.scss";

export default function Referral() {
  return (
    <div className={classes.referral__container}>
      <div className={classes.referral__link}>
        <h3>Referral Link</h3>
        <div className={classes.link}>
          <p>https://www.google.com/se...k&oq=</p>
          <img src={copy} alt="copy logo" />
        </div>
      </div>
      <p className={classes.referral__or}>Or</p>
      <div className={classes.contact}>
        <h4>Share on Social Media</h4>
        <div className={classes.socials}>
          <img src={facebook} alt="facebook" />
          <img src={instagram} alt="instagram" />
          <img src={twitter} alt="twitter" />
        </div>
      </div>
    </div>
  );
}
