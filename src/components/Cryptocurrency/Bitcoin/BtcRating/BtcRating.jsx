import React from 'react';
import { Link } from "react-router-dom";
import yellow from "../../../../data/yellow.png";
import thumb from "../../../../data/thumb.png";
import classes from './BtcRating.module.css'

export default function BtcRating() {
  return (
    <div className={classes.btc__rating}>
          <p className={classes.btc__ratingP}>Project Rating</p>
          <span className={classes.rating__span}>
            <h3 className={classes.rating__spanH3}>5.0</h3>
            <div>
              <img src={yellow} alt="star" />
              <img src={yellow} alt="star" />
              <img src={yellow} alt="star" />
              <img src={yellow} alt="star" />
              <img src={yellow} alt="star" />
            </div>
            <Link to="/" className={classes.rating__link}>
              add rating
            </Link>
          </span>
          <div className={classes.reaction}>
            <div className={classes.like}>
              <img className={classes.thumb} src={thumb} alt="thumb" />
              <p>50</p>
            </div>
            <div className={classes.like}>
              <img className={classes.star} src={yellow} alt="star" />
              <p>123</p>
            </div>
          </div>
        </div>
  )
}
