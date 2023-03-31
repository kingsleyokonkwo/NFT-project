import React from 'react';
import classes from './VoteReview.module.css'
import { reviews } from "../../../data/data";

export default function VoteReview() {
    const reviewData = (props) => {
        return (
          <div className={classes.votereview__item} key={props.img}>
            <div className={classes.votereview__top}>
              <div className={classes.votereview__profile}>
                <img src={props.img} alt="display symbol" />
                <div className={classes.votereview__profileDetail}>
                  <p className={classes.votereview__name}>{props.name}</p>
                  <p className={classes.votereview__username}>{props.username}</p>
                </div>
              </div>
              <p className={classes.votereview__time}>{props.time}</p>
            </div>
            <p className={classes.votereview__proper}>{props.review}</p>
          </div>
        );
      };
  return (
    <div className={classes.vote__review}>
        <h3>Reviews</h3>
        {reviews.slice(0, 4).map(reviewData)}
      </div>
  )
}
