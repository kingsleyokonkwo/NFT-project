import React from 'react'
import redangle from "../data/redangle.png"
import greenangle from "../data/greenangle.png"
import "./BtcStats.css"

export default function BtcStats() {

  return (
    <div className='stat-container'>
        <h3>BTC Price Statistics</h3>
        <div className="stat">
            <div className="change">
                <p className='p-change'>Price Change</p>
                <p className='change-24'>24h</p>
            </div>
            <div className="value">
                <p>$49,0920,029</p>
                {/* <span><img src={redangle} alt="arrow" />-22.50% </span> */}
            </div>
        </div>

        <div className="stat">
            <div className="change">
                <p className='p-change'>Price Change</p>
                <p className='change-24'>24h</p>
            </div>
            <div className="value">
                <p>$49,0920,029</p>
                <span><img src={greenangle} alt="arrow" />+62.50% </span>
            </div>
        </div>

        <div className="stat">
            <div className="change">
                <p className='p-change'>Price Change</p>
                <p className='change-24'>24h</p>
            </div>
            <div className="value">
                <p>$49,0920,029</p>
                <span><img src={redangle} alt="arrow" />-22.50% </span>
            </div>
        </div>

        <div className="stat">
            <div className="change">
                <p className='p-change'>Price Change</p>
                <p className='change-24'>24h</p>
            </div>
            <div className="value">
                <p>$49,0920,029</p>
                <span><img src={redangle} alt="arrow" />-22.50% </span>
            </div>
        </div>

        <div className="stat">
            <div className="change">
                <p className='p-change'>Price Change</p>
                <p className='change-24'>24h</p>
            </div>
            <div className="value">
                <p>$49,0920,029</p>
                <span><img src={redangle} alt="arrow" />-22.50% </span>
            </div>
        </div>

        <div className="stat">
            <div className="change">
                <p className='p-change'>Price Change</p>
                <p className='change-24'>24h</p>
            </div>
            <div className="value">
                <p>$49,0920,029</p>
                <span><img src={redangle} alt="arrow" />-22.50% </span>
            </div>
        </div>

        <div className="stat">
            <div className="change">
                <p className='p-change'>Price Change</p>
                <p className='change-24'>24h</p>
            </div>
            <div className="value">
                <p>#1</p>
                {/* <p>$49,0920,029</p>
                <span><img src={redangle} alt="arrow" />-22.50% </span> */}
            </div>
        </div>
        <button className='stat-btn'>Show More</button>
    </div>
  )
}
