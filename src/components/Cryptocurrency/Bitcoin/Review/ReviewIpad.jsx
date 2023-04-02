import React from "react";
import classes from "./Review.module.scss";
import { reviews } from "../../../../data/data";
import Button from "../../../UI/Button/Button";

export default function ReviewIpad() {
  const reviewData = (props) => {
    return (
      <div className={classes.review__item}>
        <div className={classes.review__itemTop}>
          <div className={classes.review__profile}>
            <img src={props.img} alt="display symbol" />
            <div className={classes.review__profileDetail}>
              <p className={classes.review__name}>{props.name}</p>
              <p className={classes.review__username}>{props.username}</p>
            </div>
          </div>
          <p className={classes.review__time}>{props.time}</p>
        </div>
        <p className={classes.review__proper}>{props.review}</p>
      </div>
    );
  };

  return (
    <div className={classes.reviewIpad}>
      <h3>Reviews</h3>
      <div className={classes.reviewIpad__container}>
        <div className={classes.reviewIpad__textarea}>
          <textarea
            className={classes.textarea}
            id={classes.textarea}
            rows="9"
            placeholder="Add Review"
          />
          <Button className="review-btn">send</Button>
        </div>
        <div className={classes.reviewIpad__items}>
          {reviews.map(reviewData)}
        </div>
      </div>
    </div>
  );
}
