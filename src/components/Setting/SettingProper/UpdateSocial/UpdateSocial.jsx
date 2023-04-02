import React from "react";
import classes from "./UpdateSocial.module.scss";
import arrow from "../../../../data/arrow-left.png";
import check from "../../../../data/bigcheck.png";
import cancel from "../../../../data/cancelbig.png";
import telegram from "../../../../data/telegram-logo.png";
import twitter from "../../../../data/twitter-logo.png";
import Button from "../../../UI/Button/Button"

export default function UpdateSocial() {
  return (
    <div className={classes.UpdateSocial__container}>
      <span className={classes.updateSocial__navigation}>
        <img src={arrow} alt="navigate back arrow" />
        <h3>Update Social Media</h3>
      </span>
      <div className={classes.updateSocial__inner}>
        <p className={classes.followUs}>
          Follow us on social media to have your social media ticked
        </p>
        <div className={classes.social__logos}>
          <div className={classes.social__logo}>
            <img src={telegram} alt="telegram" />
          </div>
          <div className={classes.social__logo}>
            <img src={twitter} alt="twitter" />
          </div>
        </div>
        <div className={classes.updatesocial__link}>
          <span>
            <div className={classes.updateLink__img}>
              <img src={telegram} alt="telegram" />
            </div>
            <p>https://web.telegram.org/k/</p>
          </span>
          <img src={check} alt="green check" className={classes.updateSocial__status} />
        </div>
        <div className={classes.updatesocial__link}>
          <span>
            <div className={classes.updateLink__img}>
              <img src={twitter} alt="telegram" />
            </div>
            <p>https://twitter.com/home</p>
          </span>
          <img src={cancel} alt="red cancel" className="updateSocial-status" />
        </div>
        <Button className="updateSocial-btn">Save Changes</Button>
      </div>
    </div>
  );
}
