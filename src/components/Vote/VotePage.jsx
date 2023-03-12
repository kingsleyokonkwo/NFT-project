import React from 'react'
import "./VotePage.css"
import { NavLink } from 'react-router-dom'
import like from "../../data/thumbsup.png"
import plus from "../../data/add-circle.png"
import more from "../../data/more.png"
import VotedProject from './VotedProject'

export default function VotePage() {
  return (
    <div className='votepage-container'>
        <div className="voteProject-page">
            <div className="voteProject-title">
                <h3 className='voteProject-h3'>Projects</h3>
                <span className="addProjects">
                <NavLink to='add-project' className="addProjects">
                    <img src={plus} alt="plus sign" />
                    Add Project
                </NavLink>
                </span>
            </div>

            {/* if there are listed projects, render them here */}

            <div className="voteNft-container">
                <button>Hello NFT Projects</button>
                <div className="morehover">
                    <img src={more} alt="hover for more options" />
                </div>
            </div>

            <div className="voteNft-container">
                <button className='inactive-votebtn'>Hello NFT Projects</button>
                <div className="morehover">
                    <img src={more} alt="hover for more options" />
                </div>
            </div>
        </div>
        <div className="voteContent-page">
            {/* if there are no projects listed, render this */}
            <div className="voteContent-zero">
                <img src={like} alt="thumbs up" />
                <p>You Currently don’t have any projects Listed at the moment</p>
            </div>
            {/* if there are listed projects, render this */}

            <VotedProject />
        </div>
    </div>
  )
}
