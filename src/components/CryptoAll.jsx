import React from 'react'
import "./Crypto.css"
import { Cryptocurrency } from '../data/data'

export default function CryptoAll() {

    const crypoItem = (props) => {
        return(
            <div className="crypo-item" key={props.id}>
                <span className='crypto-id'>{props.id}</span>
                <div className='crypto-detail'>
                    <img className='crypto-img' src={props.img} alt="crypto image" />
                    <div className="cryto-detail">
                        <p className='crypto-name'>{props.name}</p>
                        <p className='crypto-short'>{props.short}</p>
                    </div>
                </div>
                <span className='crypto-price'>{props.price}</span>
                <span className='crypto-change' style={{color: props.loss ? "#EF4444" : "#10B981"}}>{props.change}</span>
                <span className='market-price'>{props.marketPrice}</span>
                <img className='crypto-chart' src={props.chart} alt="chart" />
                <img src={props.star} alt="chart" />
            </div>

        )
    }

  return (
    <div className='cryptoItems'>
        {Cryptocurrency.map(crypoItem)}
    </div>
  )
}
