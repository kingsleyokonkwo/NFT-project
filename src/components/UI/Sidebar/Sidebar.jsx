import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import classes from "./Sidebar.module.scss";
import logo from "../../../data/logo.png";
import menu from "../../../data/menu.png";
import { links } from "../../../data/data";
import Theme from "./Theme";
import SidebarAd from "./SidebarAd";

export default function Sidebar(props) {
  const [advert, setAdvert] = useState(true);
  const handleAdvert = () => {
    setAdvert(false);
  };

  return (
    <div className={classes.sidebar__inner}>
      <div className={classes.header}>
        <Link to="/" className={classes.header__brand}>
          <img className={classes.header__brandLogo} src={logo} alt="logo" />
          <h3>Cryptooes</h3>
        </Link>
        <img
          src={menu}
          alt="menu"
          className={classes.header__hamburger}
          onClick={props.handleMenu}
        />
      </div>

      <div className={classes.sidebar__items}>
        <div className={classes.links}>
          {links.map((item) => (
            <div key={item.name}>
              <NavLink
                to={`/${item.name}`}
                className={`${classes.links__item } `}
              >
                <img
                  className={classes.links__itemIcon}
                  src={item.logo}
                  alt="icon"
                />
                <p className={classes.links__itemName}>{item.name}</p>
              </NavLink>
            </div>
          ))}
        </div>

        <div className={classes.theme}>
          <Theme />
          <SidebarAd handleAdvert={handleAdvert} advert={advert} />
        </div>
      </div>
    </div>
  );
}
