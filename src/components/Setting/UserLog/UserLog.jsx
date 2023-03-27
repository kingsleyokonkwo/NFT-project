import React from 'react'
import './UserLog.css'
import { userlogItems } from '../../../data/data'

export default function UserLog() {

    const userlogItem = (props) => {
        return (
            <div className="userlog-item" key={props.name}>
                <div className="userlog-details">
                    <div className='userlog-green'></div>
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
        <div className='UserLog-container'>
            {userlogItems.map(userlogItem)}
        </div>
    )
}
