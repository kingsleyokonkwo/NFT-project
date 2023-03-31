import React from "react";
import classes from"./AddSuggestions.module.css";
import { Link, NavLink } from "react-router-dom";
import watch from "../../data/watch.png";
import plus from "../../data/plus.png";
import NftProjectAd from "./NftProjectAd/NftProjectAd";
import CryptoProjectAd from "./CryptoProjectAd/CryptoProjectAd";
import MetaverseProjects from "./MetaProjects/MetaverseProjects";
import IcoProjectAds from "./IcoProjectAds/IcoProjectAds";
import Button from "../UI/Button/Button";

export default function AddSuggestions() {
  return (
    <div>
      <div className={classes.adsuggestion__inner}>
        <div className={classes.featured__ads}>
          <h3 className={classes.featured__adsH3}>Featured Ads</h3>
          <div className={classes.featured__adsBtns}>
            <NavLink to="/ad-status">
              <Button className="btn-status">
                <img src={watch} alt="ad status" />
                Ad Status
              </Button>
            </NavLink>
            <NavLink to="/suggest-ads">
              <Button className="btn-suggest">
                <img src={plus} alt="plus sign" />
                Suggest Ads
              </Button>
            </NavLink>
          </div>
        </div>
        <div className={classes.ad__boxes}>
          <div
            className={classes.ad__boxBig}
          >
            <div className={classes.big__boxContent}>
              <h3>The Right NFT At the festival</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sodales
                mollis quisque commodo facilisis adipiscing curabitur fringilla.
                Elit netus sed sit fermentum vel ornare sit feugiat felis.
              </p>
              <Link to="/" className={classes.ad__readmoreLink}>
                Read More
              </Link>
            </div>
          </div>
          <div
            className={classes.ad__boxSmall}
          >
            <h3>The Right NFT At the festival</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sodales
              mollis quisque commodo facilisis adipiscing curabitur fringilla.
              Elit netus sed sit fermentum vel ornare sit feugiat felis.
            </p>
          </div>
        </div>
      </div>
      <NftProjectAd />
      <CryptoProjectAd />
      <MetaverseProjects />
      <IcoProjectAds />

      {/* <SuggestAds.jsx /> <AdSuggestionStatus /> Render this component */}
    </div>
  );
}
