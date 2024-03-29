import React from "react";
import classes from "./Button.module.scss";

export default function Button(props) {
  return (
    <button
      className={classes[props.className]}
      type={props.type || "button"}
      onClick={props.onClick}
    >
      {props.children}{" "}
    </button>
  );
}
