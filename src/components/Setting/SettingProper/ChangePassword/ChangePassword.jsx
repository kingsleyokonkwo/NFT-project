import React, { useState } from "react";
import classes from "./ChangePassword.module.css";
import arrow from "../../../../data/arrow-left.png";
import eye from "../../../../data/eye.png";
import Button from "../../../UI/Button/Button";

export default function ChangePassword() {
  const [visible1, setVisible1] = useState(false);
  const [visible2, setVisible2] = useState(false);
  const [visible3, setVisible3] = useState(false);

  const inputType1 = visible1 ? "text" : "password";
  const inputType2 = visible2 ? "text" : "password";
  const inputType3 = visible3 ? "text" : "password";

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className={classes.ChangePassword__container}>
      <span className={classes.ChangePassword__navigation}>
        <img src={arrow} alt="navigate back arrow" />
        <h3>Change Password</h3>
      </span>

      <form onSubmit={handleSubmit}>
        <div className={classes.ChangePassword__Input}>
          <label>Change Password</label>
          <input className={classes.passwordInput} type={inputType1} />
          <span
            onClick={() => {
              setVisible1((visible1) => !visible1);
            }}
          >
            <img src={eye} alt="eye icon" />
          </span>
        </div>
        <div className={classes.ChangePassword__Input}>
          <label>New Password</label>
          <input className={classes.passwordInput} type={inputType2} />
          <span
            onClick={() => {
              setVisible2((visible2) => !visible2);
            }}
          >
            <img src={eye} alt="eye icon" />
          </span>
        </div>
        <div className={classes.ChangePassword__Input}>
          <label>Confirm New Password</label>
          <input className={classes.passwordInput} type={inputType3} />
          <span
            onClick={() => {
              setVisible3((visible3) => !visible3);
            }}
          >
            <img src={eye} alt="eye icon" />
          </span>
        </div>
        <Button className="btn-suggestform">Save Changes</Button>
      </form>
    </div>
  );
}
