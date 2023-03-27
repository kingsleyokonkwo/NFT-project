import React from 'react'
import btc from "../../../data/btcbig.png";
import share from "../../../data/share.png";
import { btcLinks } from "../../../data/data";

export default function BtcProps() {
    const btcLink = (props) => {
        return (
          <div>
            <span className="btc-link">
              <img className="btclink-icon" src={props.logo} alt="logo" />
              <p className="btclink-name">{props.name}</p>
              <img className="btclink-arrow" src={props.img} alt="" />
            </span>
          </div>
        );
      };
  return (
    <div className="btc-prop">
            <div className="btc-name">
              <div className="btc-logo">
                <img src={btc} alt="btc logo" />
                <div className="btc-online"></div>
              </div>
              <div>
                <div className="bitcoin-h3">
                  <h3>Bitcoin</h3>
                  <p className="BTC">BTC</p>
                  <img className="share-logo" src={share} alt="share" />
                </div>
                <span className="rank1">Rank #1</span>
              </div>
            </div>
            <div className="btc-links">{btcLinks.map(btcLink)}</div>
          </div>
  )
}
