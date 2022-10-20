import React, { useState } from 'react'
import ChangePassword from './ChangePassword'
import EditProfile from './EditProfile'
import PasswordSuccessful from './PasswordSuccessful'
import ProfileParameters from './ProfileParameters'
import Referrals from './Referrals'
import "./Setting.css"
import TransactionHistory from './TransactionHistory'
import UpdateSocial from './UpdateSocial'
import UserLog from './UserLog'

export default function Setting() {

    const [setting, setSetting] = useState("personalInfo")

  return (
    <div className='setting-container'>
        <div className="setting-inner">
            <h3 className='setting-h3'>Setting</h3>
            <span className="setting-title">
                <div className='setting-header'>
                    <p onClick={()=>{setSetting("personalInfo")}}>Personal Information</p>
                    {setting === "personalInfo" && <hr className='personal-info-line'/>}
                </div>
                <div className='setting-header'>
                    <p onClick={()=>{setSetting("transaction")}}>Transaction History</p>
                    {setting === "transaction" && <hr className='transaction-line'/>}
                </div>
                <div className='setting-header'>
                    <p onClick={()=>{setSetting("userlog")}}>User Log</p>
                    {setting === "userlog" && <hr className='user-line'/>}
                </div>
                <div className='setting-header'>
                    <p onClick={()=>{setSetting("referrals")}}>Referrals</p>
                    {setting === "referrals" && <hr className='referral-line'/>}
                </div>
            </span>

            {setting === "personalInfo" && <ProfileParameters />}
            {setting === "personalInfo" && <EditProfile />}
            {setting === "personalInfo" && <ChangePassword />}
            {setting === "personalInfo" && <PasswordSuccessful />}
            {setting === "personalInfo" && <UpdateSocial />}
            
            {/* these are with profileParameters
            <EditProfile />
            <ChangePassword />
            <PasswordSuccessful />
            <UpdateSocial /> */}
            
            {setting === "transaction" && <TransactionHistory />}

            {setting === "userlog" && <UserLog />}

            {setting === "referrals" && <Referrals />}
        </div>
    </div>
  )
}
