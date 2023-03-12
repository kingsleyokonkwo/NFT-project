import React, { useState } from 'react'
import "./Crypto.css"
import CryptoAll from './CryptoAll'
import WatchList from './WatchList'

export default function Crypto() {
  const [active, setActive] = useState("crypto")
  return (
    <div className='cryto-container'>
      <div className="crypto-title">
        <h3>Cryptocurreny</h3>
        <span className='crypto-all' onClick={()=> setActive("crypto")} style={{backgroundColor: active === "crypto" ? "#2793ff" : "#4b5768"}}>All</span>
        <span className='crypto-watchlist'onClick={()=> setActive("watchlist")} style={{backgroundColor: active === "watchlist" ? "#2793ff" : "#4b5768"}}>Watchlist</span>
      </div>
      <div className="crypto-desc">
        <span className='hashtag' >#</span>
        <span className='desc-name'>Name</span>
        <span className='desc-price'>Price</span>
        <span className='desc-24'>24h Change</span>
        <span className='desc-markrt'>Market Price</span>
        <span className='desc-chart'>Chart</span>
      </div>
      {active === "crypto" && <CryptoAll />}
      {active === "watchlist" && <WatchList />}
      <button className='crypto-btn'>Load More</button>
    </div>
  )
}