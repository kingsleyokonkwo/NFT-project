import React, { useState, useEffect, useRef } from "react";
import classes from "./MetaverseProjects.module.scss";
import leftarrow from "../../../data/leftarrow.png";
import rightarrow from "../../../data/rightarrow.png";
import { motion } from "framer-motion";
import { MetaverseAd } from "../../../data/data";

export default function MetaverseProjects() {
  const [width, setWidth] = useState(0);
  const carousel = useRef();
  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  const metaverseAdItems = (props) => {
    return (
      <motion.div className={classes.metaverse__item} key={props.id}>
        <img src={props.img} alt="metaverse item" />
        <p>{props.name}</p>
      </motion.div>
    );
  };

  return (
    <div className={classes.metaverse__container}>
      <div className={classes.metaverseAd__title}>
        <h3>Metaverse Projects</h3>
        <div className={classes.metaverseAd__arrows}>
          <img src={leftarrow} alt="left arrow" />
          <img src={rightarrow} alt="left arrow" />
        </div>
      </div>

      <motion.div ref={carousel} className={classes.metaverse__carousel}>
        <motion.div
          drag="x"
          className={classes.metaverse__carouselInner}
          dragConstraints={{ right: 1, left: -width }}
        >
          {MetaverseAd.map(metaverseAdItems)}
        </motion.div>
      </motion.div>
    </div>
  );
}
