import React from "react";
import classes from "./MainReward.module.css";
import diamond from "../../data/diamond.png";
import { mainReward } from "../../data/data";
import Button from "../UI/Button/Button";

export default function MainReward() {
  const nftRewardCard = (props) => {
    return (
      <div className={classes.mainr__content} key={props.id}>
        {props.soldOut && <div className={classes.soldOut}>Sold Out</div>}
        <img className={classes.mainr__img} src={props.img} alt="reward" />
        <h4>{props.title}</h4>
        <p className={classes.mainr__desc}>{props.desc}</p>
        <div className={classes.mainr__market}>
          <div className={classes.mainr__price}>
            <p>Price:</p>
            <div className={classes.mainr__amount}>
              <img src={diamond} alt="diamond" />
              <p>{props.price}</p>
            </div>
          </div>
          <div className={classes.mainr__supply}>
            <p>Supply:</p>
            <p>{props.supply}</p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className={classes.mainr__container}>
      <h3 className={classes.mainr__title}>Rewards</h3>
      <div className={classes.mainr}>{mainReward.map(nftRewardCard)}</div>

      <Button className="btn-main--reward">Load More</Button>
    </div>
  );
}
