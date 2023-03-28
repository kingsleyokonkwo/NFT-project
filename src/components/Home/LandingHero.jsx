import React from 'react'
import "./Landing.css"
import diamond from "../../data/DiamondBig.png"
import check from "../../data/check.png"
import nftgrid from "../../data/nftgrid.png"
import pink from "../../data/pink.png"
import Reward from './Reward/Reward'
import Button from '../UI/Button/Button'

export default function LandingHero() {
  return (
    <div className='landing-container'>
      <div className="landing-hero">
        <div className="balance">
          <p className='account-bal'>Account balance</p>
          <div className="balance-detail">
            <img src={diamond} alt='diamond icon' />
            <h3>36</h3>
            <p>Sapphire earned</p>
          </div>
        </div>
        <div className="completed-task">
          <img src={check} alt='diamond icon' />
          <h3>56</h3>
          <p>Completed Task</p>
        </div>
        <div className="get-started" style={{ backgroundImage: `url(${nftgrid})`, backgroundSize: "cover", backgroundPosition: "center"}}>
          <h3 className='getStarted-landing'>Get Started with Cryptocurrency</h3>
          <Button>List Nft Project</Button>
        </div>
      </div>
      <div className="landing-ad" style={{ backgroundImage: `url(${pink})`, backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat", objectFit: "cover"}}>
        <h3>Get more insght on new information on Nft </h3>
        <Button>Join Us</Button>
      </div>
      <Reward/>
    </div>
  )
}
