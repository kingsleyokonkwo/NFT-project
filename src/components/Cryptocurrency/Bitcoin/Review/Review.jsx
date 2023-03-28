import React from "react";
import "./Review.css";
import { reviews } from "../../../../data/data";
import Button from "../../../UI/Button/Button";

export default function Review() {
  const reviewData = (props) => {
    return (
      <div className="review-item">
        <div className="review-top">
          <div className="profile">
            <img src={props.img} alt="display symbol" />
            <div className="profile-detail">
              <p className="review-name">{props.name}</p>
              <p className="review-username">{props.username}</p>
            </div>
          </div>
          <p className="review-time">{props.time}</p>
        </div>
        <p className="review-proper">{props.review}</p>
      </div>
    );
  };

  return (
    <div className="review">
      <h3>Reviews</h3>
      <textarea
        className="textarea"
        id="textarea"
        rows="9"
        placeholder="Add Review"
      />
      <Button className="btn-review">send</Button>
      {reviews.map(reviewData)}
    </div>
  );
}
