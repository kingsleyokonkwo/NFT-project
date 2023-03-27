import React, { useState, useEffect, useRef } from "react";
import "./NftProjectAd.css";
import { motion } from "framer-motion";
import heart from "../../../data/heart.png";
import leftarrow from "../../../data/leftarrow.png";
import rightarrow from "../../../data/rightarrow.png";
import { NftAd } from "../../../data/data";

export default function NftProjectAd() {
  const [width, setWidth] = useState(0);
  const carousel = useRef();
  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  const nftAdItems = (props) => {
    return (
      <motion.div className="projectAd-item" key={props.id}>
        <div className="projectAd-top">
          <div className="projectAd-images">
            <img
              className="pojectAd-project1"
              src={props.project1}
              alt="profile"
            />
            <img
              className="pojectAd-project2"
              src={props.project2}
              alt="profile"
            />
            <img
              className="pojectAd-project3"
              src={props.project3}
              alt="profile"
            />
          </div>
          <span className="projectAd-like">
            <img src={heart} alt="like" />
            194
          </span>
        </div>
        <img className="projectAd-img" src={props.img} alt="project" />
        <div className="projectAd-buttom">
          <div className="projectAd-detail">
            <p className="projectAd-name">{props.name}</p>
            <h3 className="projectAd-price">{props.price}</h3>
          </div>
          <img className="smartchain" src={props.smartchain} alt="smartchain" />
        </div>
      </motion.div>
    );
  };

  return (
    <div className="projectAd-container">
      <div className="projectAd-title">
        <h3>Featured Nft Projects</h3>
        <div className="projectAd-arrows">
          <img src={leftarrow} alt="left arrow" />
          <img src={rightarrow} alt="left arrow" />
        </div>
      </div>
      <motion.div ref={carousel} className="projectAd-carousel">
        <motion.div
          drag="x"
          className="projectAd-inner-carousel"
          dragConstraints={{ right: 0, left: -width }}
        >
          {NftAd.map(nftAdItems)}
        </motion.div>
      </motion.div>
    </div>
  );
}
