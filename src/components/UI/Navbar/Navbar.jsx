import React from "react";
import search from "../../../data/search.png";
import verified from "../../../data/verify.png";
import diamond from "../../../data/diamond.png";
import notification from "../../../data/notification.png";
import US from "../../../data/US.png";
import profile from "../../../data/profile.png";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="nav-container">
      <div className="nav-search">
        <img src={search} alt="search-icon" />
        <input className="nav-input" placeholder="Search Here" />
      </div>
      <div className="nav-items">
        <div className="verify">
          <img src={verified} alt="verified logo" />
          <p>Go Business</p>
        </div>
        <div className="diamond">
          <img src={diamond} alt="diamond logo" />
          <p>100</p>
        </div>
        <div className="notification">
          <NavLink to="/notifications">
            <img src={notification} alt="notification icon" />
            <div className="red"></div>
          </NavLink>
        </div>
        <div className="eng">
          <img src={US} alt="USA flag" />
          <p>USD</p>
        </div>
        <div className="profile">
          <img src={profile} alt="profile" />
          <div className="profile-detail">
            <p className="username">John Doe</p>
            <p className="user-mail">johndoe@email.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}
