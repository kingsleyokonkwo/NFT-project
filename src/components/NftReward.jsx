import React, { useState } from 'react'
import './Reward.css'
import diamond from "../data/diamond.png"
import arrow from "../data/arrow-right.png"
import { nftReward } from '../data/data'

export default function NftReward() {

    const nftRewardCard = (props) => {
        return (
            <div className="reward-content" >
                <img className='nft-img' src={props.img} alt='reward'/>
                <h4>{props.title}</h4>
                <p className='desc'>{props.desc}</p>
                <div className="reward-market">
                    <div className="reward-price">
                        <p>Price:</p>
                        <div className="reward-amount">
                            <img src={diamond} alt="diamond" />
                            <p>{props.price}</p>
                        </div>
                    </div>
                    <div className="reward-supply">
                        <p>Supply:</p>
                        <p>{props.supply}</p>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="nft-container">
            <div className='nftReward'>
                {nftReward.map(nftRewardCard)}
            </div>

            <button className='reward-btn'>Claim Reward <img src={arrow} alt="arrow right" /></button>
        </div>

    )
}
