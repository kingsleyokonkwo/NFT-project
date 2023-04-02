import React from 'react';
import { Link } from "react-router-dom";
import yellow from "../../../../data/yellow.png";
import thumb from "../../../../data/thumb.png";
import classes from './BtcRating.module.scss'

export default function BtcRating() {
  return (
    <div className={classes.btc__rating}>
          <p className={classes.btc__ratingP}>Project Rating</p>
          <span className={classes.btc__ratingSpan}>
            <h3 className={classes.btc__ratingSpanH3}>5.0</h3>
            <div>
              <img src={yellow} alt="star" />
              <img src={yellow} alt="star" />
              <img src={yellow} alt="star" />
              <img src={yellow} alt="star" />
              <img src={yellow} alt="star" />
            </div>
            <Link to="/" className={classes.btc__ratingSpanLink}>
              add rating
            </Link>
          </span>
          <div className={classes.reaction}>
            <div className={classes.reaction__like}>
              <img className={classes.reaction__likeThumb} src={thumb} alt="thumb" />
              <p>50</p>
            </div>
            <div className={classes.reaction__like}>
              <img className={classes.reaction__likeStar} src={yellow} alt="star" />
              <p>123</p>
            </div>
          </div>
        </div>
  )
}
