import React from "react";
import classes from "./Reward.module.scss";
import { gems } from "../../../data/data";

export default function GemContainer() {
  const gemCard = (props) => {
    return (
      <div className={classes.card__content} key={props.day}>
        <h4>{props.day}</h4>
        <img src={props.img} alt="diamond" />
        <h3>{props.reward}</h3>
      </div>
    );
  };

  return <div className={classes.gemcard__container}>{gems.map(gemCard)}</div>;
}
