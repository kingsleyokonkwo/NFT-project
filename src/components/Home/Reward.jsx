import React from 'react'
import { Link } from 'react-router-dom'
// import GemContainer from './GemContainer'
import NftReward from './NftReward'
import Referral from './Referral'
import "./Reward.css"

export default function Reward() {
  return (
    <div className='reward-container'>
        <div className="reward-gem">
            <div className="reward-title">
                <h3>Your Sapphire Rewards</h3>
                <Link to="/" className='view-all'>View all Rewards</Link>
            </div>
            <NftReward/>
            {/* <div className="gem-container">
                <GemContainer/>
                <button>Claim Reward</button>
            </div> */}
        </div>
        <Referral/>
    </div>
  )
}
