import React, { useState, useEffect, useRef } from 'react'
import "./CryptoProjectAd.css"
import leftarrow from "../data/leftarrow.png"
import rightarrow from "../data/rightarrow.png"
import { motion } from "framer-motion"
import { CrytoAd } from '../data/data'

export default function CryptoProjectAd() {

    const [width, setWidth] = useState(0)
    const carousel = useRef()
    useEffect(()=> {
        setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
      }, [])

    const cryptoAdItems = (props) => {
        return(
            <motion.div className="cryptoAd-item" key={props.id}>
                <div className="cryptoAd-top">
                    <img src={props.img} alt="crypto" />
                    <p>{props.name}</p>
                </div>

                <div className="cryptoAd-info">
                    <div className="cryptoAd-community">
                        <p>Community</p>
                        <h3>{props.community}</h3>
                    </div>
                    <div className="cryptoAd-market">
                        <p>Market Valuetion</p>
                        <h3>{props.valuation}</h3>
                    </div>
                </div>
            </motion.div>
        )
    }

  return (
    <div className='cryptoAd-container'>
        <div className="projectAd-title">
            <h3>Featured Cryptocurrency Projects</h3>
            <div className="projectAd-arrows">
                <img src={leftarrow} alt="left arrow" />
                <img src={rightarrow} alt="left arrow" />
            </div>
        </div>
        <motion.div ref={carousel} className="cryptoAd-carousel">
            <motion.div drag='x' 
            className="cryptoAd-inner-carousel"
            dragConstraints={{right: 0, left: -width}} 
            >
                {CrytoAd.map(cryptoAdItems)}
            </motion.div>
        </motion.div>
    </div>
  )
}
