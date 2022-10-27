import React from 'react'
import "./AddSuggestionStatus.css"
import arrowback from "../data/arrow-left.png"
import { suggestionStatus } from '../data/data'

export default function AdSuggestionStatus() {

    

    const statusItems = (props) => {


        return(
            <div className="statusItem">
                <div className="status-details">
                    <img src={props.img} alt="ad suggestion" />
                    <div className='status-detail'>
                        <p>{props.name}</p>
                        <p>Collections</p>
                    </div>
                </div>
                <span className="status"><img src={props.statusImg} alt="Ad status" />{props.status}</span>
            </div>
        )
    }
  return (
    <div className='SuggestionStatus-container'>
        <span className='suggestAd-span'><img src={arrowback} alt="navigate back arrow" /> <h3>Ad Suggestion Status</h3></span>
        <div className='suggestion-status'>
            {suggestionStatus.map(statusItems)}
        </div>
    </div>
  )
}
