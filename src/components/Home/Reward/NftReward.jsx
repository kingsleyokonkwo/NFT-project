import React from "react";
import classes from "./Reward.module.scss";
import diamond from "../../../data/diamond.png";
import arrow from "../../../data/arrow-right.png";
import { nftReward } from "../../../data/data";
import Button from "../../UI/Button/Button";

export default function NftReward() {
  const nftRewardCard = (props) => {
    return (
      <div className={classes.reward__content}>
        <img className={classes.nft__img} src={props.img} alt="reward" />
        <h4>{props.title}</h4>
        <p className={classes.desc}>{props.desc}</p>
        <div className={classes.reward__market}>
          <div className={classes.reward__price}>
            <p>Price:</p>
            <div className={classes.reward__amount}>
              <img src={diamond} alt="diamond" />
              <p>{props.price}</p>
            </div>
          </div>
          <div className={classes.reward__supply}>
            <p>Supply:</p>
            <p>{props.supply}</p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className={classes.nft__container}>
      <div className={classes.nftReward}>
        {nftReward.slice(0, 3).map(nftRewardCard)}
      </div>
      <div className={classes.nftReward__ipad}>{nftReward.map(nftRewardCard)}</div>

      <Button className="btn-reward">
        Claim Reward <img src={arrow} alt="arrow right" />
      </Button>
    </div>
  );
}
