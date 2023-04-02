import React, { useState, useEffect, useRef } from "react";
import classes from "./IcoProjectAds.module.scss";
import leftarrow from "../../../data/leftarrow.png";
import rightarrow from "../../../data/rightarrow.png";
import { motion } from "framer-motion";
import { IcoProjectAd } from "../../../data/data";

export default function IcoProjectAds() {
  const [width, setWidth] = useState(0);
  const carousel = useRef();
  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  const IcoProjectAdItems = (props) => {
    return (
      <motion.div className={classes.icoproject__item} key={props.id}>
        <div className={classes.icoproject__itemTop}>
          <img src={props.img} alt="icoproject item" />
          <p>{props.name}</p>
        </div>
        <div className={classes.icoproject__itemBottom}>
          <div className={classes.icoproject__raised}>
            <p>Raised</p>
            <h3>{props.raised}</h3>
          </div>
          <div className={classes.icoproject__community}>
            <p>Community</p>
            <h3>{props.users}</h3>
          </div>
        </div>
      </motion.div>
    );
  };

  return (
    <div className={classes.icoproject__container}>
      <div className={classes.icoprojectAd__title}>
        <h3>ICO Projects</h3>
        <div className={classes.icoprojectAd__arrows}>
          <img src={leftarrow} alt="left arrow" />
          <img src={rightarrow} alt="left arrow" />
        </div>
      </div>

      <motion.div ref={carousel} className={classes.icoproject__carousel}>
        <motion.div
          drag="x"
          className={classes.icoproject__carouselInner}
          dragConstraints={{ right: 0, left: -width }}
        >
          {IcoProjectAd.map(IcoProjectAdItems)}
        </motion.div>
      </motion.div>
    </div>
  );
}
