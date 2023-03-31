import React from 'react'
import { Link } from 'react-router-dom'
// import GemContainer from './GemContainer'
import NftReward from './NftReward'
import Referral from '../Referral'
import classes from "./Reward.module.css"

export default function Reward() {
  return (
    <div className={classes.reward__container}>
        <div className={classes.reward__gem}>
            <div className={classes.reward__title}>
                <h3>Your Sapphire Rewards</h3>
                <Link to="/rewards" className={classes.view__all}>View all Rewards</Link>
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
