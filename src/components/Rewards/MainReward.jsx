import React from "react";
import "./MainReward.css";
import diamond from "../../data/diamond.png";
import { mainReward } from "../../data/data";
import Button from "../UI/Button/Button";

export default function MainReward() {
  const nftRewardCard = (props) => {
    return (
      <div className="mainr-content" key={props.id}>
        {props.soldOut && <div className="sold-out">Sold Out</div>}
        <img className="mainr-img" src={props.img} alt="reward" />
        <h4>{props.title}</h4>
        <p className="mainr-desc">{props.desc}</p>
        <div className="mainr-market">
          <div className="mainr-price">
            <p>Price:</p>
            <div className="reward-amount">
              <img src={diamond} alt="diamond" />
              <p>{props.price}</p>
            </div>
          </div>
          <div className="mainr-supply">
            <p>Supply:</p>
            <p>{props.supply}</p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="mainr-container">
      <h3 className="mainr-title">Rewards</h3>
      <div className="mainr">{mainReward.map(nftRewardCard)}</div>

      <Button className="btn-main--reward">Load More</Button>
    </div>
  );
}
