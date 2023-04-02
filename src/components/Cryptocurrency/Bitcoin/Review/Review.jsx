import React from "react";
import classes from "./Review.module.scss";
import { reviews } from "../../../../data/data";
import Button from "../../../UI/Button/Button";

export default function Review() {
  const reviewData = (props) => {
    return (
      <div className={classes.review__item}>
        <div className={classes.review__itemTop}>
          <div className={classes.review__profile}>
            <img src={props.img} alt="display symbol" />
            <div className={classes.review__profileDetail}>
              <p className={classes.review__profileDetailName}>{props.name}</p>
              <p className={classes.review__profileDetailUsername}>{props.username}</p>
            </div>
          </div>
          <p className={classes.review__time}>{props.time}</p>
        </div>
        <p className={classes.review__proper}>{props.review}</p>
      </div>
    );
  };

  return (
    <div className={classes.review}>
      <h3>Reviews</h3>
      <textarea
        className={classes.textarea}
        id={classes.textarea}
        rows="9"
        placeholder="Add Review"
      />
      <Button className="btn-review">send</Button>
      {reviews.map(reviewData)}
    </div>
  );
}
