import React, { useState } from 'react'
import "./SuggestAds.css"
import arrowback from "../data/arrow-left.png"
import CryptoForm from './CryptoForm'
import IcoForm from './IcoForm'

export default function SuggestAds() {

    const [suggestionForm, setSuggestionForm] = useState("cryptoform")

  return (
    <div className='suggestAd-container'>
        <span className='suggestAd-span'><img src={arrowback} alt="navigate back arrow" /> <h3>Suggest Ads</h3></span>
        <p className='projectType'>Project types</p>
        <div className="suggestAd-buttons">
            <button onClick={()=>{setSuggestionForm("cryptoform")}}
            style={{backgroundColor: suggestionForm==="cryptoform" ? "#2793ff" : "#4b5768"}}
            >Crypto Project</button>
            <button onClick={()=>{setSuggestionForm("nftform")}}
             style={{backgroundColor: suggestionForm==="nftform" ? "#2793ff" : "#4b5768"}}
            >NFT Project</button>
            <button onClick={()=>{setSuggestionForm("icoform")}}
            style={{backgroundColor: suggestionForm==="icoform" ? "#2793ff" : "#4b5768"}}
            >ICO Drop</button>
            <button onClick={()=>{setSuggestionForm("metaverseform")}}
            style={{backgroundColor: suggestionForm==="metaverseform" ? "#2793ff" : "#4b5768"}}
            >Metaverse Project</button>
        </div>
        {suggestionForm === "cryptoform" && <CryptoForm />}
        {suggestionForm === "icoform" && <IcoForm />}
        {suggestionForm === "nftform" && <CryptoForm />}
        {suggestionForm === "metaverseform" && <CryptoForm />}
    </div>
  )
}
