import React from 'react'
import "./ProfileParameters.css"
import profile from "../data/profile.png"
import edit from "../data/edit.png"
import arrow from "../data/arrow.png"
import setting from "../data/refix.png"
import people from "../data/people.png"

export default function ProfileParameters() {
    return (
        <div className='ProfileParameters'>
            <div className="profileinfo-container">
                <div className='profileinfo-container-inner'>
                    <div className="profile">
                        <img src={profile} alt="A display" />
                        <div className="profile-detail">
                            <p className='review-name'>John Doe</p>
                            <p className='review-username'>Johndeo@email.com</p>
                        </div>
                    </div>
                    <img src={edit} alt="edit profile icon" />
                </div>
                <p className='ProfileParameters-username'>Username</p>
                <h3 className='ProfileParameters-h3'>John Doe</h3>
            </div>


            <div className="ProfileParameter-setting">
                <span><img src={setting} alt="screw icon" /> Change Password</span>
                <img src={arrow} alt="arrow right" />
            </div>
            <div className="ProfileParameter-setting">
                <span><img src={people} alt="update icon" /> Update Social Media</span>
                <img src={arrow} alt="arrow right" />
            </div>
        </div>
    )
}
