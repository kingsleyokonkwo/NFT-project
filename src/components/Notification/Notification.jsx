import React from "react";
import { notificationData } from "../../data/data";
import bell from "../../data/bellbig.png";
import classes from "./Notification.module.css";

export default function Notification() {
  const notificationItem = (props) => {
    return (
      <div className={classes.notification__item} key={props.name}>
        <div className={classes.notification__details}>
          <img src={props.img} alt="pictorial representation" />
          <div className={classes.notification__detail}>
            <p className={classes.notification__name}>{props.name}</p>
            <span className={classes.notification__time}>
              {props.year} {props.time}
            </span>
          </div>
        </div>
        <p className={classes.notification__timeframe}>{props.timeframe}</p>
      </div>
    );
  };

  return (
    <div className={classes.Notification__container}>
      <h3>Notifications</h3>

      <div className={classes.NoNotification__container}>
        <img src={bell} alt="bell logo" />
        <p>No Notification Yet</p>
        <p>Check Later</p>
      </div>

      <div className={classes.notificationPlus}>
        {notificationData.map(notificationItem)}
      </div>
    </div>
  );
}
