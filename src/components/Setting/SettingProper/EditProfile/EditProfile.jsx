import React from "react";
import classes from "./EditProfile.module.scss";
import user from "../../../../data/user.png";
import upload from "../../../../data/export.png";
import profile from "../../../../data/Profilebig.png";
import arrow from "../../../../data/arrow-left.png";
import Button from "../../../UI/Button/Button"

export default function EditProfile() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className={classes.editProfile__container}>
      <span className={classes.editprifile__navigation}>
        <img src={arrow} alt="navigate back arrow" />
        <h3>Edit Profile Details</h3>
      </span>
      <div className={classes.user__action}>
        <img src={profile} alt="users" className={classes.editProfile__img} />
        <Button className="editProfile-upload-btn">
          <img src={upload} alt="upload icon" />
          Upload Photo
        </Button>
        <button className="editProfile-reset-btn">
          <img src={user} alt="user icon" />
          Default Reset
        </button>
      </div>
      <form onSubmit={handleSubmit}>
        <div className={classes.formInput}>
          <label>Full Name</label>
          <input
            className={classes.editProfile__input}
            type="text"
            placeholder="John Doe"
          />
        </div>
        <div className={classes.formInput}>
          <label>Email</label>
          <input
            className={classes.editProfile__input}
            type="text"
            placeholder="johndoe@email.com"
          />
        </div>
        <div className={classes.formInput}>
          <label>Username</label>
          <input
            className={classes.editProfile__input}
            type="text"
            placeholder="Johndoe123"
          />
        </div>
        <Button className="btn-suggestform">Save Changes</Button>
      </form>
    </div>
  );
}
