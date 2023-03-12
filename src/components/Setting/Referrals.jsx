import React from 'react'
import './Referrals.css'
import diamond from '../../data/diamond.png'
import { referralList } from '../../data/data'

export default function Referrals() {
    const referralItems = (props) => {
        return(
            <div className="referralItem">
                <div className="referralItem-details">
                    <img src={props.img} alt="profile pic" />
                    <div className="referralItem-detail">
                        <h3>You Referred <span className='referral-name'>{props.name}</span></h3>
                        <p>{props.year} {props.time}</p>
                    </div>
                </div>
                <span className='referral-gem'><img src={diamond} alt="diamond gem" />{props.reward}</span>
            </div>

        )
    }
  return (
    <div className='Referrals-container'>
        <div className="referral-recent">
            <h3 className='referral-time'>Today</h3>
            {referralList.map(referralItems)}
        </div>
        <div className="referral-later">
            <h3 className='referral-time'>Aug 26th</h3>
            {referralList.slice(3).map(referralItems)}
        </div>
    </div>
  )
}
