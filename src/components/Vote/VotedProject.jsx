import React from "react";
import "./VotedProject.css";
import star from "../../data/yellow.png";
import thumb from "../../data/biglike.png";
import twitter from "../../data/twitter.png";
import telegram from "../../data/tg-img.png";
import NFT from "../../data/votenft.png";
import lightStar from "../../data/lightstar.png";
import copy from "../../data/bigcopy.png";
import discord from "../../data/discord-img.png";
import check from "../../data/successful-check.png";
import { reviews } from "../../data/data";
import bg from "../../data/votead-bg.png";

export default function VotedProject() {
  const reviewData = (props) => {
    return (
      <div className="votereview-item" key={props.img}>
        <div className="votereview-top">
          <div className="profile">
            <img src={props.img} alt="display symbol" />
            <div className="profile-detail">
              <p className="votereview-name">{props.name}</p>
              <p className="votereview-username">{props.username}</p>
            </div>
          </div>
          <p className="votereview-time">{props.time}</p>
        </div>
        <p className="votereview-proper">{props.review}</p>
      </div>
    );
  };

  return (
    <div className="VotedProject-container">
      <div className="successful-popup">
        <img src={check} alt="successful check" />
        <p>Project Succesfully Added. You can preview</p>
      </div>
      <div className="voteproject-page">
        <div className="added-project">
          <div className="addedProject-details">
            <img src={NFT} alt="Added NFT" className="Addednft" />
            <div className="addedProject-name">
              <h3>Hello NFT</h3>
              <span>
                <img src={star} alt="star rating" />
                <img src={star} alt="star rating" />
                <img src={star} alt="star rating" />
                <img src={star} alt="star rating" />
                <img src={lightStar} alt="star rating" />
                <p className="addedProject-rating">4.7</p>
              </span>
            </div>
          </div>

          <div className="addedProject-vote">
            <div className="voteThumb">
              <img src={thumb} alt="thumbs up" />
            </div>
            <p>Vote</p>
          </div>
        </div>

        <div className="voteform-input">
          <label htmlFor="Smart Contract Address">Smart Contract Address</label>
          <div className="voteFormInput-copy">
            <input
              className="vote-input"
              type="text"
              placeholder="0x0e09fabb73bd3ade0a17ecc321fd13a19e8..."
            />
            <div className="votecopy-icon">
              <img src={copy} alt="copy" />
            </div>
          </div>
        </div>

        <div className="voteAbout-project">
          <h3>About Project</h3>
          <p>
            Eget neque, mauris ultrices ullamcorper. Ac blandit quam interdum
            magna turpis est. Quam sollicitudin in tristique vel nunc id
            adipiscing. Etiam praesent montes, ridiculus id viverra sit odio
            elementum. Feugiat ac consequat lectus sem lectus aenean turpis
            cursus.
          </p>
        </div>

        <div className="Votesocial-logos">
          <img src={twitter} alt="twitter" />

          <img src={telegram} alt="telegram" />

          <img src={discord} alt="discord" />
        </div>

        <div
          className="voteNft-ad"
          style={{
            backgroundImage: `url(${bg})`,
            backgroundSize: "contain",
            backgroundPosition: "right",
            backgroundRepeat: "no-repeat",
          }}
        >
          <h3>The Right NFT At the Festival</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sodales
            mollis quisque commodo facilisis adipiscing curabitur fringilla.
            Elit netus sed sit fermentum vel ornare sit feugiat felis.
          </p>
        </div>
      </div>
      <div className="vote-review">
        <h3>Reviews</h3>
        {reviews.slice(0, 4).map(reviewData)}
      </div>
    </div>
  );
}
