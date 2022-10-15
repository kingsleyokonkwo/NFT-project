import React from 'react'
import chart from "../data/chart.png"

export default function Chart() {
  return (
    <div className='chart-container'>
        <div className="chart">
            <p>Bitcoin to USD Chart</p>
            <div className="interval">
                <span>24H</span>
                <span>1D</span>
                <span>1M</span>
                <span>1Y</span>
                <span>ALL</span>
            </div>
        </div>
        <img src={chart} alt="chart" />
    </div>
  )
}
