import React from "react";
import Button from "../../UI/Button/Button";
import classes from './Form.module.scss'

export default function Form(props) {
  return (
    <form onSubmit={props.onSubmit}>
      <div className={classes.formInput}>
        <label>Project Name</label>
        <input className={classes.cryptoinput} type="text" />
      </div>
      <div className={classes.formInput}>
        <label>Contact Address</label>
        <input className={classes.cryptoinput} type="text" />
      </div>
      <div className={classes.formInput}>
        <label>
          <p>Project Discord Url</p>
          <p className={classes.label__url}>
            URL e.g <span>https://aliens.com/nft/create</span>
          </p>
        </label>
        <input className={classes.cryptoinput} type="text" />
      </div>
      <div className={classes.formInput}>
        <label>
          <p>Project Twitter Url</p>
          <p className={classes.label__url}>
            URL e.g <span>https://aliens.com/nft/create</span>
          </p>
        </label>
        <input className={classes.cryptoinput} type="text" />
      </div>
      <div className={classes.formInput}>
        <label>
          <p>Project Telegram Url</p>
          <p className={classes.label__url}>
            URL e.g <span>https://aliens.com/nft/create</span>
          </p>
        </label>
        <input className={classes.cryptoinput} type="text" />
      </div>
      <Button className="btn-suggestform">Suggest Ads</Button>
    </form>
  );
}
