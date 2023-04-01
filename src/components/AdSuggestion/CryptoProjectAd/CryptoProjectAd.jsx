import React, { useState, useEffect, useRef } from "react";
import classes from "./CryptoProjectAd.module.css";
import leftarrow from "../../../data/leftarrow.png";
import rightarrow from "../../../data/rightarrow.png";
import { motion } from "framer-motion";
import { CrytoAd } from "../../../data/data";

export default function CryptoProjectAd() {
  const [width, setWidth] = useState(0);
  const carousel = useRef();
  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  const cryptoAdItems = (props) => {
    return (
      <motion.div className={classes.cryptoAd__item} key={props.id}>
        <div className={classes.cryptoAd__top}>
          <img src={props.img} alt="crypto" />
          <p>{props.name}</p>
        </div>

        <div className={classes.cryptoAd__info}>
          <div className={classes.cryptoAd__community}>
            <p>Community</p>
            <h3>{props.community}</h3>
          </div>
          <div className={classes.cryptoAd__market}>
            <p>Market Valuetion</p>
            <h3>{props.valuation}</h3>
          </div>
        </div>
      </motion.div>
    );
  };

  return (
    <div className={classes.cryptoAd__container}>
      <div className={classes.cryptoAd__title}>
        <h3>Featured Cryptocurrency Projects</h3>
        <div className={classes.cryptoAd__arrows}>
          <img src={leftarrow} alt="left arrow" />
          <img src={rightarrow} alt="left arrow" />
        </div>
      </div>
      <motion.div ref={carousel} className={classes.cryptoAd__carousel}>
        <motion.div
          drag="x"
          className={classes.cryptoAd__carouselInner}
          dragConstraints={{ right: 0, left: -width }}
        >
          {CrytoAd.map(cryptoAdItems)}
        </motion.div>
      </motion.div>
    </div>
  );
}
