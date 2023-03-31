import React from "react";
import classes from "./VotedProject.module.css";
import star from "../../../data/yellow.png";
import thumb from "../../../data/biglike.png";
import twitter from "../../../data/twitter.png";
import telegram from "../../../data/tg-img.png";
import NFT from "../../../data/votenft.png";
import lightStar from "../../../data/lightstar.png";
import copy from "../../../data/bigcopy.png";
import discord from "../../../data/discord-img.png";
import check from "../../../data/successful-check.png";
import VoteReview from "../VoteReview/VoteReview";

export default function VotedProject() {
  return (
    <div className={classes.VotedProject__container}>
      <div className={classes.successful__popup}>
        <img src={check} alt="successful check" />
        <p>Project Succesfully Added. You can preview</p>
      </div>
      <div className={classes.voteproject__page}>
        <div className={classes.added__project}>
          <div className={classes.added__projectDetails}>
            <img
              src={NFT}
              alt="Added NFT"
              className={classes.added__projectImg}
            />
            <div className={classes.added__projectName}>
              <h3>Hello NFT</h3>
              <span>
                <img src={star} alt="star rating" />
                <img src={star} alt="star rating" />
                <img src={star} alt="star rating" />
                <img src={star} alt="star rating" />
                <img src={lightStar} alt="star rating" />
                <p className={classes.added__projectRating}>4.7</p>
              </span>
            </div>
          </div>

          <div className={classes.addedProject__vote}>
            <div className={classes.voteThumb}>
              <img src={thumb} alt="thumbs up" />
            </div>
            <p>Vote</p>
          </div>
        </div>

        <div className={classes.voteform__input}>
          <label htmlFor="Smart Contract Address">Smart Contract Address</label>
          <div className={classes.voteform__inputCopy}>
            <input
              className={classes.vote__input}
              type="text"
              placeholder="0x0e09fabb73bd3ade0a17ecc321fd13a19e8..."
            />
            <div className={classes.votecopy__icon}>
              <img src={copy} alt="copy" />
            </div>
          </div>
        </div>

        <div className={classes.voteAbout__project}>
          <h3>About Project</h3>
          <p>
            Eget neque, mauris ultrices ullamcorper. Ac blandit quam interdum
            magna turpis est. Quam sollicitudin in tristique vel nunc id
            adipiscing. Etiam praesent montes, ridiculus id viverra sit odio
            elementum. Feugiat ac consequat lectus sem lectus aenean turpis
            cursus.
          </p>
        </div>

        <div className={classes.Votesocial__logos}>
          <img src={twitter} alt="twitter" />

          <img src={telegram} alt="telegram" />

          <img src={discord} alt="discord" />
        </div>

        <div className={classes.voteNft__ad}>
          <h3>The Right NFT At the Festival</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sodales
            mollis quisque commodo facilisis adipiscing curabitur fringilla.
            Elit netus sed sit fermentum vel ornare sit feugiat felis.
          </p>
        </div>
      </div>
      <VoteReview />
    </div>
  );
}
