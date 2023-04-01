import React from "react";
import classes from "./UserLog.module.css";
import { userlogItems } from "../../../data/data";

export default function UserLog() {
  const userlogItem = (props) => {
    return (
      <div className={classes.userlog__item} key={props.name}>
        <div className={classes.userlog__details}>
          <div className={classes.userlog__green}></div>
          <div className={classes.userlog__detail}>
            <p className={classes.userlog__name}>{props.name}</p>
            <span className={classes.userlog__time}>
              {props.year} {props.time}
            </span>
          </div>
        </div>
        <p className={classes.userlog__timeframe}>{props.timeframe}</p>
      </div>
    );
  };

  return (
    <div className={classes.UserLog__container}>
      {userlogItems.map(userlogItem)}
    </div>
  );
}
