import React from "react";
import classes from './Theme.module.css';
import moon from "../../../data/moon.png"
import sun from "../../../data/sun.png"

export default function Theme() {
  return (
    <div className={classes.theme__toggle}>
      <div className={classes.dark__theme}>
        <img className={classes.moon} src={moon} alt="moon logo" />
        <p>Dark</p>
      </div>
      <div className={classes.light__theme}>
        <img className={classes.sun} src={sun} alt="sun logo" />
        <p>Light</p>
      </div>
    </div>
  );
}
