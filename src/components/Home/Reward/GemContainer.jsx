import React from 'react'
import "./Reward.css"
import { gems } from '../../../data/data'

export default function GemContainer() {

    const gemCard = (props) => {
        return(
            <div className="card-content" key={props.day}>
                <h4>{props.day}</h4>
                <img src={props.img} alt="diamond"/>
                <h3>{props.reward}</h3>
            </div>
        )
    }

  return (
    <div className='gemcard-container'>
        {gems.map(gemCard)}
    </div>
  )
}
