import React from "react";
import classes from './Theme.module.scss';
import moon from "../../../data/moon.png"
import sun from "../../../data/sun.png"

export default function Theme() {
  return (
    <div className={classes.theme__toggle}>
      <div className={classes.theme__toggleDark}>
        <img className={classes.theme__toggleDarkMoon} src={moon} alt="moon logo" />
        <p>Dark</p>
      </div>
      <div className={classes.theme__toggleLight}>
        <img className={classes.theme__toggleLightSun} src={sun} alt="sun logo" />
        <p>Light</p>
      </div>
    </div>
  );
}
