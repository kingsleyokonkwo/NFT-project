import React from "react";
import search from "../../../data/search.png";
import verified from "../../../data/verify.png";
import diamond from "../../../data/diamond.png";
import notification from "../../../data/notification.png";
import US from "../../../data/US.png";
import profile from "../../../data/profile.png";
import classes from "./Navbar.module.scss";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div className={classes.nav__container}>
      <div className={classes.nav__search}>
        <img src={search} alt="search-icon" />
        <input className={classes.nav__searchInput} placeholder="Search Here" />
      </div>
      <div className={classes.nav__items}>
        <div className={classes.nav__itemsVerify}>
          <img src={verified} alt="verified logo" />
          <p>Go Business</p>
        </div>
        <div className={classes.nav__itemsDiamond}>
          <img src={diamond} alt="diamond logo" />
          <p>100</p>
        </div>
        <div className={classes.nav__itemsNotification}>
          <NavLink to="/notifications">
            <img src={notification} alt="notification icon" />
            <div className={classes.nav__itemsNotificationRed}></div>
          </NavLink>
        </div>
        <div className={classes.nav__itemsEng}>
          <img src={US} alt="USA flag" />
          <p>USD</p>
        </div>
        <div className={classes.nav__itemsProfile}>
          <img src={profile} alt="profile" />
          <div className={classes.profile__detail}>
            <p className={classes.profile__detailUsername}>John Doe</p>
            <p className={classes.profile__detailMail}>johndoe@email.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}
