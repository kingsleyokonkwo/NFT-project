import React from "react";
import arrow from "../../data/arrow-right.png";
import classes from "./DailyTask.module.scss";
import { MoreTask } from "../../data/data";
import Button from "../UI/Button/Button";

export default function MoreTask1() {
  const tasks1 = (props) => {
    return (
      <div className={classes.task}>
        <img className={classes.task__img} src={props.img} alt="" />
        <div className={classes.task__airdrop}>
          <h3>{props.airdrop}</h3>
          <p>{props.airdrop}</p>
        </div>
        <Button className="btn-dailytask">
          Go to Airdrop Page <img src={arrow} alt="arrow right" />
        </Button>
        <div className={classes.task__diamond}>
          <img src={props.diamond} alt="" />
          <h3>{props.count}</h3>
        </div>
      </div>
    );
  };

  return (
    <div className={classes.task__container}>
      <h3 className={`${classes.task__title} ${classes.more}`} >More task</h3>
      <div className={classes.tasks}>{MoreTask.map(tasks1)}</div>
    </div>
  );
}
