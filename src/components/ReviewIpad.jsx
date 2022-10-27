import React from 'react'
import "./Review.css"
import { reviews } from '../data/data'
    
   

export default function ReviewIpad() {

    const reviewData = (props) => {
        return(
            <div className="review-item">
                <div className="review-top">
                    <div className="profile">
                        <img src={props.img} alt="display picture" />
                        <div className="profile-detail">
                            <p className='review-name'>{props.name}</p>
                            <p className='review-username'>{props.username}</p>
                        </div>
                    </div>
                    <p className='review-time'>{props.time}</p>
                </div>
                <p className='review-proper'>{props.review}</p>
            </div>
        )
    }

  return (
    <div className='reviewIpad'>
        <h3>Reviews</h3>
        <div className="reviewIpad-container">
            <div className="reviewIpad-textarea">
                <textarea className='textarea' id='textarea' rows="9"  placeholder="Add Review"/>
                <button className='review-btn'>send</button>
            </div>
            <div className='reviewIpad-items'>{reviews.map(reviewData)}</div>
        </div>
    </div>
  )
}
