import React from 'react';
import { Link } from "react-router-dom";
import yellow from "../../../data/yellow.png";
import thumb from "../../../data/thumb.png";

export default function BtcRating() {
  return (
    <div className="btc-rating">
          <p className="p-rating">Project Rating</p>
          <span className="p-rating-span">
            <h3 className="p-rating-h3">5.0</h3>
            <div>
              <img src={yellow} alt="star" />
              <img src={yellow} alt="star" />
              <img src={yellow} alt="star" />
              <img src={yellow} alt="star" />
              <img src={yellow} alt="star" />
            </div>
            <Link to="/" className="p-rating-link">
              add rating
            </Link>
          </span>
          <div className="reaction">
            <div className="like">
              <img className="thumb" src={thumb} alt="thumb" />
              <p>50</p>
            </div>
            <div className="like">
              <img className="star" src={yellow} alt="star" />
              <p>123</p>
            </div>
          </div>
        </div>
  )
}
