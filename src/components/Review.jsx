import React from 'react'

export default function Review() {
    
    const reviewData = (props) => {
        return(
            <div className="review-item">
                <div className="top">
                    <div className="profile">
                        <img src={props.img} alt="display picture" />
                        <div className="profile-detail">
                            <p>{props.name}</p>
                            <p>{props.username}</p>
                        </div>
                    </div>
                    <p>{props.time}</p>
                </div>
                <p>{props.review}</p>
            </div>
        )
    }

  return (
    <div className='review'>
        <h3>Rewviews</h3>
        <textarea />
        <button>send</button>
        {map}
    </div>
  )
}
