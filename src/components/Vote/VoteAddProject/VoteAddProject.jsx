import React from "react";
import { NavLink } from 'react-router-dom'
import classes from "./VoteAddProject.module.css";
import arrow from "../../../data/arrow-left.png";
import upload from "../../../data/upload.png";
import photo from "../../../data/uploadimg.png";
import cancel from "../../../data/imgcancel.png";

export default function VoteAddProject() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className={classes.VoteAddProject}>
      <span className={classes.voteAdd__span}>
        <NavLink to="/vote">
          <img src={arrow} alt="navigate back arrow" />
        </NavLink>{" "}
        <h3>Add Project</h3>
      </span>

      <form onSubmit={handleSubmit}>
        <div className={classes.voteaddProject__form}>
          <label>Project Name</label>
          <input className={classes.voteaddProject__input} type="text" />
        </div>
        <div className={classes.voteaddProject__form}>
          <label>About Project</label>
          <textarea className={classes.aboutproject__text} id={classes.textarea} rows="9" />
        </div>
        <div className={classes.voteaddProject__form}>
          <label>Smart Contract Address </label>
          <input className={classes.voteaddProject__input} type="text" />
        </div>
        <div className={classes.voteaddProject__form}>
          <label>
            <p>Project Url</p>
            <p className={classes.label__url}>
              URL e.g <span>https://aliens.com/nft/create</span>
            </p>
          </label>
          <input className={classes.voteaddProject__input} type="text" />
        </div>
        <p className={classes.photoUpload__p}>Project Photo Upload</p>
        <p className={classes.photosize}>Photo must not be greater than 5mb</p>

        <div className={classes.upload__photo}>
          <div className={classes.upload}>
            <img src={upload} alt="upload logo" />
          </div>
          <div className={classes.photo}>
            <img src={photo} alt="uploaded item" />
            <img className={classes.photo__cancel} src={cancel} alt="a cancel icon" />
          </div>
        </div>

        <div className={classes.voteaddProject__form}>
          <label>
            <p>Project Twitter Url</p>
            <p className={classes.label__url}>
              URL e.g <span>https://aliens.com/nft/create</span>
            </p>
          </label>
          <input className={classes.voteaddProject__input} type="text" />
        </div>
        <div className={classes.voteaddProject__form}>
          <label>
            <p>Project Telegram Url</p>
            <p className={classes.label__url}>
              URL e.g <span>https://aliens.com/nft/create</span>
            </p>
          </label>
          <input className={classes.voteaddProject__input} type="text" />
        </div>
        <button className="suggestForm-btn">Suggest Ads</button>
      </form>
    </div>
  );
}
