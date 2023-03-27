import React from 'react'
import "./UpdateSocial.css"
import arrow from "../../../../data/arrow-left.png"
import check from '../../../../data/bigcheck.png'
import cancel from '../../../../data/cancelbig.png'
import telegram from '../../../../data/telegram-logo.png'
import twitter from '../../../../data/twitter-logo.png'

export default function UpdateSocial() {
  return (
    <div className='UpdateSocial-container'>
        <span className='editprifile-navigation'><img src={arrow} alt="navigate back arrow" /><h3>Update Social Media</h3></span>
        <div className="updateSocial-inner">
            <p className='followUs'>Follow us on social media to have your social media ticked</p>
            <div className='social-logos'>
                <div className="social-logo">
                    <img src={telegram} alt="telegram" />
                </div>
                <div className="social-logo">
                    <img src={twitter} alt="twitter" />
                </div>
            </div>
            <div className='updatesocial-link'>
                <span>
                    <div className="update-link-img">
                        <img src={telegram} alt="telegram" />
                    </div>
                    <p>https://web.telegram.org/k/</p>
                </span>
                <img src={check} alt='green check' className='updateSocial-status'/>
            </div>
            <div className='updatesocial-link'>
                <span>
                    <div className="update-link-img">
                        <img src={twitter} alt="telegram" />
                    </div>
                    <p>https://twitter.com/home</p>
                </span>
                <img src={cancel} alt='red cancel' className='updateSocial-status'/>
            </div>
            <button className='updateSocial-btn'>Save Changes</button>
        </div>
    </div>
  )
}
