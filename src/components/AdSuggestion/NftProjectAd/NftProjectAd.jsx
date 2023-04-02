import React, { useState, useEffect, useRef } from "react";
import classes from "./NftProjectAd.module.scss";
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
      <motion.div className={classes.projectAd__item} key={props.id}>
        <div className={classes.projectAd__top}>
          <div className={classes.projectAd__topImages}>
            <img
              className={classes.projectAd__topImages1}
              src={props.project1}
              alt="profile"
            />
            <img
              className={classes.projectAd__topImages2}
              src={props.project2}
              alt="profile"
            />
            <img
              className={classes.projectAd__topImages3}
              src={props.project3}
              alt="profile"
            />
          </div>
          <span className={classes.projectAd__topLike}>
            <img src={heart} alt="like" />
            194
          </span>
        </div>
        <img className={classes.projectAd__img} src={props.img} alt="project" />
        <div className={classes.projectAd__buttom}>
          <div className={classes.projectAd__detail}>
            <p className={classes.projectAd__detailName}>{props.name}</p>
            <h3 className={classes.projectAd__detailPrice}>{props.price}</h3>
          </div>
          <img className={classes.smartchain} src={props.smartchain} alt="smartchain" />
        </div>
      </motion.div>
    );
  };

  return (
    <div className={classes.projectAd__container}>
      <div className={classes.projectAd__title}>
        <h3>Featured Nft Projects</h3>
        <div className={classes.projectAd__arrows}>
          <img src={leftarrow} alt="left arrow" />
          <img src={rightarrow} alt="left arrow" />
        </div>
      </div>
      <motion.div ref={carousel} className={classes.projectAd__carousel}>
        <motion.div
          drag="x"
          className={classes.projectAd__carouselInner}
          dragConstraints={{ right: 0, left: -width }}
        >
          {NftAd.map(nftAdItems)}
        </motion.div>
      </motion.div>
    </div>
  );
}
