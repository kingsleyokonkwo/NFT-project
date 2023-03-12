import React from "react";
import { NavLink } from 'react-router-dom'
import "./VoteAddProject.css";
import arrow from "../../data/arrow-left.png";
import upload from "../../data/upload.png";
import photo from "../../data/uploadimg.png";
import cancel from "../../data/imgcancel.png";

export default function VoteAddProject() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="VoteAddProject">
      <span className="suggestAd-span">
        <NavLink to="/vote">
          <img src={arrow} alt="navigate back arrow" />
        </NavLink>{" "}
        <h3>Add Project</h3>
      </span>

      <form onSubmit={handleSubmit}>
        <div className="formInput">
          <label>Project Name</label>
          <input className="cryptoinput" type="text" />
        </div>
        <div className="formInput">
          <label>About Project</label>
          <textarea className="aboutproject-text" id="textarea" rows="9" />
        </div>
        <div className="formInput">
          <label>Smart Contract Address </label>
          <input className="cryptoinput" type="text" />
        </div>
        <div className="formInput">
          <label>
            <p>Project Url</p>
            <p className="label-url">
              URL e.g <span>https://aliens.com/nft/create</span>
            </p>
          </label>
          <input className="cryptoinput" type="text" />
        </div>
        <p className="photoUpload-p">Project Photo Upload</p>
        <p className="photosize">Photo must not be greater than 5mb</p>

        <div className="upload-photo">
          <div className="upload">
            <img src={upload} alt="upload logo" />
          </div>
          <div className="photo">
            <img src={photo} alt="uploaded item" />
            <img className="photo-cancel" src={cancel} alt="a cancel icon" />
          </div>
        </div>

        <div className="formInput">
          <label>
            <p>Project Twitter Url</p>
            <p className="label-url">
              URL e.g <span>https://aliens.com/nft/create</span>
            </p>
          </label>
          <input className="cryptoinput" type="text" />
        </div>
        <div className="formInput">
          <label>
            <p>Project Telegram Url</p>
            <p className="label-url">
              URL e.g <span>https://aliens.com/nft/create</span>
            </p>
          </label>
          <input className="cryptoinput" type="text" />
        </div>
        <button className="suggestForm-btn">Suggest Ads</button>
      </form>
    </div>
  );
}
