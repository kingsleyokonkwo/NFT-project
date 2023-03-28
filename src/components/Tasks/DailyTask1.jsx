import React from "react";
import arrow from "../../data/arrow-right.png";
import "./DailyTask.css";
import { DailyTask } from "../../data/data";
import Button from "../UI/Button/Button";

export default function DailyTask1() {
  const tasks1 = (props) => {
    return (
      <div className="task">
        <img className="task-img" src={props.img} alt="" />
        <div className="airdrop">
          <h3>{props.airdrop}</h3>
          <p>{props.airdrop}</p>
        </div>
        <Button className="btn-dailytask">
          Go to Airdrop Page <img src={arrow} alt="arrow right" />
        </Button>
        <div className="diamond-count">
          <img src={props.diamond} alt="" />
          <h3>{props.count}</h3>
        </div>
      </div>
    );
  };

  return (
    <div className="task-container">
      <h3 className="task-title">Daily task</h3>
      <div className="tasks">{DailyTask.map(tasks1)}</div>
    </div>
  );
}
