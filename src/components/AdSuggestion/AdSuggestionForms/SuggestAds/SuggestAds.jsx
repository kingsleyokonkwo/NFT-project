import React, { useState } from "react";
import classes from "./SuggestAds.module.css";
import arrowback from "../../../../data/arrow-left.png";
import CryptoForm from "../CryptoForm";
import IcoForm from "../IcoForm";
import { NavLink } from "react-router-dom";
import NftForm from "../NftForm";
import MetaverseForm from "../MetaverseForm";
import Button from "../../../UI/Button/Button";

export default function SuggestAds() {
  const [suggestionForm, setSuggestionForm] = useState("cryptoform");

  return (
    <div className={classes.suggestAd__container}>
      <span className={classes.suggestAd__span}>
        <NavLink to="/ad-suggestion">
          <img src={arrowback} alt="navigate back arrow" />
        </NavLink>

        <h3>Suggest Ads</h3>
      </span>
      <p className={classes.projectType}>Project types</p>
      <div className={classes.suggestAd__buttons}>
        <Button
          onClick={() => {
            setSuggestionForm("cryptoform");
          }}
          className={`project__type-btn ${
            suggestionForm === "cryptoform" ? "active" : ""
          }`}
        >
          Crypto Project
        </Button>
        <Button
          onClick={() => {
            setSuggestionForm("nftform");
          }}
          className={`project__type-btn ${
            suggestionForm === "nftform" ? "active" : ""
          }`}
        >
          NFT Project
        </Button>
        <Button
          onClick={() => {
            setSuggestionForm("icoform");
          }}
          className={`project__type-btn ${
            suggestionForm === "icoform" ? "active" : ""
          }`}
        >
          ICO Drop
        </Button>
        <Button
          onClick={() => {
            setSuggestionForm("metaverseform");
          }}
          className={`project__type-btn ${
            suggestionForm === "metaverseform" ? "active" : ""
          }`}
        >
          Metaverse Project
        </Button>
      </div>
      {suggestionForm === "cryptoform" && <CryptoForm />}
      {suggestionForm === "icoform" && <IcoForm />}
      {suggestionForm === "nftform" && <NftForm />}
      {suggestionForm === "metaverseform" && <MetaverseForm />}
    </div>
  );
}
