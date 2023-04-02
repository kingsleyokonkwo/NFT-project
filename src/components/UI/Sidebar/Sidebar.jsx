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
        <Link to="/" className={classes.brand}>
          <img className="logo" src={logo} alt="logo" />
          <h3>Cryptooes</h3>
        </Link>
        <img
          src={menu}
          alt="menu"
          className={classes.hamburger}
          onClick={props.handleMenu}
        />
      </div>

      <div className={classes.sidebar__items}>
        <div className={classes.links}>
          {links.map((item) => (
            <div key={item.name}>
              <NavLink
                to={`/${item.name}`}
                className={`${classes.link__item } `}
              >
                <img
                  className={classes.link__icon}
                  src={item.logo}
                  alt="icon"
                />
                <p className={classes.link__name}>{item.name}</p>
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
