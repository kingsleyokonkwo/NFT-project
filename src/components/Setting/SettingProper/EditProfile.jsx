import React from 'react'
import "./EditProfile.css"
import user from "../../../data/user.png"
import upload from "../../../data/export.png"
import profile from "../../../data/Profilebig.png"
import arrow from "../../../data/arrow-left.png"

export default function EditProfile() {

    const handleSubmit = (e) => {
        e.preventDefault()
    }

  return (
    <div className='editProfile-container'>
        <span className='editprifile-navigation'><img src={arrow} alt="navigate back arrow" /><h3>Edit Profile Details</h3></span>
        <div className='user-action'>
            <img src={profile} alt="users" className='editProfile-img' />
            <button className='editProfile-upload-btn'><img src={upload} alt="upload icon" />Upload Photo</button>
            <button className='editProfile-reset-btn'><img src={user} alt="user icon" />Default Reset</button>
        </div>
        <form onSubmit={handleSubmit}>
            <div className="formInput">
                <label>Full Name</label>
                <input className='editProfile-input' type="text" placeholder='John Doe'/>
            </div>
            <div className="formInput">
                <label>Email</label>
                <input className='editProfile-input' type="text" placeholder='johndoe@email.com'/>
            </div>
            <div className="formInput">
                <label>Username</label>
                <input className='editProfile-input' type="text" placeholder='Johndoe123'/>
            </div>
            <button className='suggestForm-btn'>Save Changes</button>
        </form>
    </div>
  )
}
