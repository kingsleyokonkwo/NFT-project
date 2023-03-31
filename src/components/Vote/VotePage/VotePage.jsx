import React from "react";
import classes from "./VotePage.module.css";
import { NavLink } from "react-router-dom";
import like from "../../../data/thumbsup.png";
import plus from "../../../data/add-circle.png";
import more from "../../../data/more.png";
import VotedProject from "../VoteProject/VotedProject";
import Button from "../../UI/Button/Button";

export default function VotePage() {
  return (
    <div className={classes.votepage__container}>
      <div className={classes.voteProject__page}>
        <div className={classes.voteProject__title}>
          <h3 className={classes.voteProject__titleH3}>Projects</h3>
          <span className={classes.addProjects}>
            <NavLink to="add-project" className={classes.addProjects}>
              <img src={plus} alt="plus sign" />
              Add Project
            </NavLink>
          </span>
        </div>

        {/* if there are listed projects, render them here */}

        <div className={classes.voteNft__container}>
          <Button className="btn__vote">Hello NFT Projects</Button>
          <div className={classes.morehover}>
            <img src={more} alt="hover for more options" />
          </div>
        </div>

        <div className={classes.voteNft__container}>
          <Button className="btn__vote inactive">Hello NFT Projects</Button>
          <div className={classes.morehover}>
            <img src={more} alt="hover for more options" />
          </div>
        </div>
      </div>
      <div className={classes.voteContent__page}>
        {/* if there are no projects listed, render this */}
        <div className={classes.voteContent__zero}>
          <img src={like} alt="thumbs up" />
          <p>You Currently don’t have any projects Listed at the moment</p>
        </div>
        {/* if there are listed projects, render this */}

        <VotedProject />
      </div>
    </div>
  );
}
