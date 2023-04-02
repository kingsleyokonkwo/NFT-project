import React, { useState } from "react";
import ProfileParameters from "./SettingProper/ProfileParameter/ProfileParameters";
import Referrals from "./Referrals/Referrals";
import classes from "./Setting.module.scss";
import TransactionHistory from "./TransactionHistory/TransactionHistory";
import UserLog from "./UserLog/UserLog";
import ChangePassword from './SettingProper/ChangePassword/ChangePassword'
import EditProfile from './SettingProper/EditProfile/EditProfile'
import PasswordSuccessful from './SettingProper/PasswordSuccessful/PasswordSuccessful'
import UpdateSocial from './SettingProper/UpdateSocial/UpdateSocial'

export default function Setting() {
  const [setting, setSetting] = useState("personalInfo");

  return (
    <div className={classes.setting__container}>
      <div className={classes.setting__inner}>
        <h3 className={classes.setting__innerh3}>Setting</h3>
        <span className={classes.setting__title}>
          <div className={classes.setting__header}>
            <p
              onClick={() => {
                setSetting("personalInfo");
              }}
            >
              Personal Information
            </p>
            {setting === "personalInfo" && (
              <hr className={classes.personalInfo__line} />
            )}
          </div>
          <div className={classes.setting__header}>
            <p
              onClick={() => {
                setSetting("transaction");
              }}
            >
              Transaction History
            </p>
            {setting === "transaction" && <hr className={classes.transaction__line} />}
          </div>
          <div className={classes.setting__header}>
            <p
              onClick={() => {
                setSetting("userlog");
              }}
            >
              User Log
            </p>
            {setting === "userlog" && <hr className={classes.user__line} />}
          </div>
          <div className={classes.setting__header}>
            <p
              onClick={() => {
                setSetting("referrals");
              }}
            >
              Referrals
            </p>
            {setting === "referrals" && <hr className={classes.referral__line} />}
          </div>
        </span>

        {setting === "personalInfo" && <ProfileParameters />}
        {setting === "personalInfo" && <EditProfile />}
            {setting === "personalInfo" && <ChangePassword />}
            {setting === "personalInfo" && <PasswordSuccessful />}
            {setting === "personalInfo" && <UpdateSocial />} 

        {setting === "transaction" && <TransactionHistory />}

        {setting === "userlog" && <UserLog />}

        {setting === "referrals" && <Referrals />}
      </div>
    </div>
  );
}
