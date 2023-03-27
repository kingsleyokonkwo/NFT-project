import React from 'react';
import './SidebarAd.css';
import trading from "../../../data/trading.png";
import cancel from "../../../data/close-circle.png"

export default function SidebarAd(props) {
  return (
    <div className={props.advert ? "advert" : "noadvert"}>
            <img className='trade-img' src={trading} alt='trading'/>
            <h4>Send Crypto to Friends and Family</h4>
            <button className='ad-btn'>Send now</button>
            <img className='cancel' src={cancel} alt='cancel' onClick={props.handleAdvert}/>
          </div>
  )
}
