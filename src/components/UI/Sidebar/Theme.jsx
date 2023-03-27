import React from "react";
import './Theme.css';
import moon from "../../../data/moon.png"
import sun from "../../../data/sun.png"

export default function Theme() {
  return (
    <div className="theme-toggle">
      <div className="dark-theme">
        <img className="moon" src={moon} alt="moon logo" />
        <p>Dark</p>
      </div>
      <div className="light-theme">
        <img className="sun" src={sun} alt="sun logo" />
        <p>Light</p>
      </div>
    </div>
  );
}
