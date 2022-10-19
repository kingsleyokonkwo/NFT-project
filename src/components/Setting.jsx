import React from 'react'
import EditProfile from './EditProfile'
import ProfileParameters from './ProfileParameters'
import "./Setting.css"

export default function Setting() {
  return (
    <div className='setting-container'>
        <div className="setting-inner">
            <h3 className='setting-h3'>Setting</h3>
            <span className="setting-title">
                <div className='setting-header'>
                    <p >Personal Information</p>
                    <hr className='personal-info-line'/>
                </div>
                <div className='setting-header'>
                    <p>Transaction History</p>
                    <hr className='transaction-line'/>
                </div>
                <div className='setting-header'>
                    <p>User Log</p>
                    <hr className='user-line'/>
                </div>
                <div className='setting-header'>
                    <p>Referrals</p>
                    <hr className='referral-line'/>
                </div>
            </span>

            <ProfileParameters />
            <EditProfile />
        </div>
    </div>
  )
}
