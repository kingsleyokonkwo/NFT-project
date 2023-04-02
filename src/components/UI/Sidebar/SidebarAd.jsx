import React from 'react';
import classes from './SidebarAd.module.scss';
import trading from "../../../data/trading.png";
import cancel from "../../../data/close-circle.png"
import Button from "../Button/Button"

export default function SidebarAd(props) {
  return (
    <div className={props.advert ? `${classes.advert}` : `${classes.noadvert}`}>
            <img className={classes.trade__img} src={trading} alt='trading'/>
            <h4>Send Crypto to Friends and Family</h4>
            <Button className='ad-btn'>Send now</Button>
            <img className={classes.cancel} src={cancel} alt='cancel' onClick={props.handleAdvert}/>
          </div>
  )
}
