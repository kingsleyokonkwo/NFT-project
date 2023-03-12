import React from 'react'
import copy from "../../data/copy.png"
import twitter from "../../data/twitter.png"
import facebook from "../../data/facebook.png"
import instagram from "../../data/instagram.png"
import "./Reward.css"

export default function Referral() {
    return (
        <div className='referral-container'>
            <div className="referral-link">
                <h3>Referral Link</h3>
                <div className="link">
                    <p>https://www.google.com/se...k&oq=</p>
                    <img src={copy} alt='copy logo' />
                </div>
            </div>
            <p className='referral-Or'>Or</p>
            <div className="contact">
                <h4>Share on Social Media</h4>
                <div className="socials">
                    <img src={facebook} alt='facebook' />
                    <img src={instagram} alt='instagram' />
                    <img src={twitter} alt='twitter' />
                </div>
            </div>

        </div>
    )
}
