import React from 'react'
import { notificationData } from '../data/data'
import bell from "../data/bellbig.png"
import "./Notification.css"

export default function Notification() {

    const notificationItem = (props) => {
        return(
            <div className="notification-item" key={props.name}>
                <div className="userlog-details">
                    <img src={props.img} alt="pictorial representation" />
                    <div className="userlog-detail">
                        <p className='userlog-name'>{props.name}</p>
                        <span className='userlog-time'>{props.year} {props.time}</span>
                    </div>
                </div>
                <p className='userlog-timeframe'>{props.timeframe}</p>
            </div>
        )
    }

  return (
    <div className='Notification-container'>
        <h3>Notifications</h3>

        <div className="NoNotification-container">
            <img src={bell} alt="bell logo" />
            <p>No Notification Yet</p>
            <p>Check Later</p>
        </div>


        <div className="notificationPlus">
            {notificationData.map(notificationItem)}
        </div>
       
    </div>
  )
}

