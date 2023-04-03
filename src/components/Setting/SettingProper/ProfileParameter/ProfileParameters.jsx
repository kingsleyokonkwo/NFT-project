import React from "react";
import classes from "./ProfileParameters.module.scss";
import profile from "../../../../data/profile.png";
import edit from "../../../../data/edit.png";
import arrow from "../../../../data/arrow.png";
import setting from "../../../../data/refix.png";
import people from "../../../../data/people.png";
import { NavLink } from "react-router-dom";

export default function ProfileParameters() {
  return (
    <div className={classes.ProfileParameters}>
      <div className={classes.ProfileParameters__container}>
        <div className={classes.ProfileParameters__containerInner}>
          <div className={classes.profile}>
            <img src={profile} alt="A display" />
            <div className={classes.profile__detail}>
              <p className={classes.profile__detailName}>John Doe</p>
              <p className={classes.profile__detailUsername}>Johndeo@email.com</p>
            </div>
          </div>
          <NavLink to="/profile-detail">
            <img src={edit} alt="edit profile icon" />
          </NavLink>
        </div>
        <p className={classes.ProfileParameters__username}>Username</p>
        <h3 className={classes.ProfileParameters__h3}>John Doe</h3>
      </div>

      <div className={classes.ProfileParameter__setting}>
        <span>
          <img src={setting} alt="screw icon" /> Change Password
        </span>
        <img src={arrow} alt="arrow right" />
      </div>
      <div className={classes.ProfileParameter__setting}>
        <span>
          <img src={people} alt="update icon" /> Update Social Media
        </span>
        <img src={arrow} alt="arrow right" />
      </div>
    </div>
  );
}
