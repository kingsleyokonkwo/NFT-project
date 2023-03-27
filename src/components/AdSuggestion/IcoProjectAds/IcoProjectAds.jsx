import React, { useState, useEffect, useRef } from 'react'
import "./IcoProjectAds.css"
import leftarrow from "../../../data/leftarrow.png"
import rightarrow from "../../../data/rightarrow.png"
import { motion } from "framer-motion"
import { IcoProjectAd } from '../../../data/data'

export default function IcoProjectAds() {

    const [width, setWidth] = useState(0)
    const carousel = useRef()
    useEffect(()=> {
        setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
      }, [])

    const IcoProjectAdItems = (props) => {
        return(
            <motion.div className="icoproject-item" key={props.id}>
                <div className="icoproject-item-top">
                    <img src={props.img} alt="icoproject item" />
                    <p>{props.name}</p>
                </div>
                <div className="icoproject-item-bottom">
                    <div className="icoproject-raised">
                        <p>Raised</p>
                        <h3>{props.raised}</h3>
                    </div>
                    <div className="icoproject-community">
                        <p>Community</p>
                        <h3>{props.users}</h3>
                    </div>
                </div>
            </motion.div>
        )
    }

  return (
    <div className='icoproject-container'>
        <div className="projectAd-title">
            <h3>ICO Projects</h3>
            <div className="projectAd-arrows">
                <img src={leftarrow} alt="left arrow" />
                <img src={rightarrow} alt="left arrow" />
            </div>
        </div>

        <motion.div ref={carousel} className="icoproject-carousel">
            <motion.div drag='x' 
            className="icoproject-inner-carousel"
            dragConstraints={{right: 0, left: -width}} 
            >
                {IcoProjectAd.map(IcoProjectAdItems)}
            </motion.div>
        </motion.div>
    </div>
  )
}
