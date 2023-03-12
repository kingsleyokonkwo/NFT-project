import React, { useState, useEffect, useRef } from 'react'
import "./MetaverseProjects.css"
import leftarrow from "../../data/leftarrow.png"
import rightarrow from "../../data/rightarrow.png"
import { motion } from "framer-motion"
import { MetaverseAd } from '../../data/data'

export default function MetaverseProjects() {

    const [width, setWidth] = useState(0)
    const carousel = useRef()
    useEffect(()=> {
        setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
      }, [])

    const metaverseAdItems =(props) => {
        return(
            <motion.div className="metaverse-item" key={props.id}>
                <img src={props.img} alt="metaverse item" />
                <p>{props.name}</p>
            </motion.div>
        )
    }

  return (
    <div className='metaverse-container'>
        <div className="projectAd-title">
            <h3>Metaverse Projects</h3>
            <div className="projectAd-arrows">
                <img src={leftarrow} alt="left arrow" />
                <img src={rightarrow} alt="left arrow" />
            </div>
        </div>

        <motion.div ref={carousel} className="metaverse-carousel">
            <motion.div drag='x' 
            className="metaverse-inner-carousel"
            dragConstraints={{right: 1, left: -width}} 
            >
                {MetaverseAd.map(metaverseAdItems)}
            </motion.div>
        </motion.div>
    </div>
  )
}
