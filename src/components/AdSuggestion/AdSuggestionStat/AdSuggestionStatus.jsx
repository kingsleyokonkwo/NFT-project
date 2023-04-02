import React from "react";
import classes from "./AddSuggestionStatus.module.scss";
import arrowback from "../../../data/arrow-left.png";
import { suggestionStatus } from "../../../data/data";
import { NavLink } from "react-router-dom";

export default function AdSuggestionStatus() {
  const statusItems = (props) => {
    return (
      <div className={classes.statusItem}>
        <div className={classes.status__details}>
          <img src={props.img} alt="ad suggestion" />
          <div className={classes.status__detail}>
            <p>{props.name}</p>
            <p>Collections</p>
          </div>
        </div>
        <span className={classes.status}>
          <img src={props.statusImg} alt="Ad status" />
          {props.status}
        </span>
      </div>
    );
  };
  return (
    <div className={classes.SuggestionStatus__container}>
      <span className={classes.AdStatus__span}>
        <NavLink to='/ad-suggestion'>
        <img src={arrowback} alt="navigate back arrow" />
        </NavLink>
        
        <h3>Ad Suggestion Status</h3>
      </span>
      <div className={classes.suggestion__status}>
        {suggestionStatus.map(statusItems)}
      </div>
    </div>
  );
}
