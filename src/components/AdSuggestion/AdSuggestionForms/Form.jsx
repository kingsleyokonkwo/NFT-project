import React from "react";
import Button from "../../UI/Button/Button";
import './Form.css'

export default function Form(props) {
  return (
    <form onSubmit={props.onSubmit}>
      <div className="formInput">
        <label>Project Name</label>
        <input className="cryptoinput" type="text" />
      </div>
      <div className="formInput">
        <label>Contact Address</label>
        <input className="cryptoinput" type="text" />
      </div>
      <div className="formInput">
        <label>
          <p>Project Discord Url</p>
          <p className="label-url">
            URL e.g <span>https://aliens.com/nft/create</span>
          </p>
        </label>
        <input className="cryptoinput" type="text" />
      </div>
      <div className="formInput">
        <label>
          <p>Project Twitter Url</p>
          <p className="label-url">
            URL e.g <span>https://aliens.com/nft/create</span>
          </p>
        </label>
        <input className="cryptoinput" type="text" />
      </div>
      <div className="formInput">
        <label>
          <p>Project Telegram Url</p>
          <p className="label-url">
            URL e.g <span>https://aliens.com/nft/create</span>
          </p>
        </label>
        <input className="cryptoinput" type="text" />
      </div>
      <Button className="btn-suggestform">Suggest Ads</Button>
    </form>
  );
}
