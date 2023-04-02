import React from 'react'
import btc from "../../../../data/btcbig.png";
import share from "../../../../data/share.png";
import { btcLinks } from "../../../../data/data";
import classes from './BtcProps.module.scss'

export default function BtcProps() {
    const btcLink = (props) => {
        return (
          <div>
            <span className={classes.btc__link}>
              <img className={classes.btc__linkIcon} src={props.logo} alt="logo" />
              <p className={classes.btc__linkName}>{props.name}</p>
              <img className={classes.btc__linkArrow} src={props.img} alt="" />
            </span>
          </div>
        );
      };
  return (
    <div className={classes.btc__prop}>
            <div className={classes.btc__name}>
              <div className={classes.btc__nameLogo}>
                <img src={btc} alt="btc logo" />
                <div className={classes.btc__nameLogoOnline}></div>
              </div>
              <div>
                <div className={classes.bitcoin__name}>
                  <h3>Bitcoin</h3>
                  <p className={classes.bitcoin__nameBTC}>BTC</p>
                  <img className={classes.bitcoin__nameShareLogo} src={share} alt="share" />
                </div>
                <span className={classes.rank1}>Rank #1</span>
              </div>
            </div>
            <div className={classes.btc__links}>{btcLinks.map(btcLink)}</div>
          </div>
  )
}
