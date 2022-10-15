import React from 'react'
import arrow from "../data/arrow-right.png"
import "./DailyTask.css"
import { MoreTask } from '../data/data'

export default function MoreTask1() {

    const tasks1 = (props) => {
        return (
            <div className="task">
                <img className='task-img' src={props.img} alt="" />
                <div className="airdrop">
                    <h3>{props.airdrop}</h3>
                    <p>{props.airdrop}</p>
                </div>
                <button className='reward-btn'>Go to Airdrop Page <img src={arrow} alt="arrow right" /></button>
                <div className='diamond-count'>
                    <img src={props.diamond} alt="" />
                    <h3>{props.count}</h3>
                </div>
            </div>
        )
    }

    return (
        <div className='task-container' >
            <h3 className='task-title more'>More task</h3>
            <div className="tasks">
                {MoreTask.map(tasks1)}
            </div>
        </div>
    )
}