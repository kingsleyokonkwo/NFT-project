import React, { useState } from 'react'
import './ChangePassword.css'
import arrow from "../../../../data/arrow-left.png"
import eye from "../../../../data/eye.png"

export default function ChangePassword() {

    const [visible1, setVisible1] = useState(false)
    const [visible2, setVisible2] = useState(false)
    const [visible3, setVisible3] = useState(false)

    const inputType1 = visible1 ? "text" : "password"
    const inputType2 = visible2 ? "text" : "password"
    const inputType3 = visible3 ? "text" : "password"

    const handleSubmit = (e) => {
        e.preventDefault()
    }

  return (
    <div className='ChangePassword-container'>
        <span className='editprifile-navigation'><img src={arrow} alt="navigate back arrow" /><h3>Change Password</h3></span>

        <form onSubmit={handleSubmit}>
            <div className="ChangePassword-Input">
                <label>Change Password</label>
                <input className='passwordInput' type={inputType1} />
                <span onClick={()=>{setVisible1(visible1 => !visible1)}}><img src={eye} alt="eye icon" /></span>
            </div>
            <div className="ChangePassword-Input">
                <label>New Password</label>
                <input className='passwordInput' type={inputType2} />
                <span onClick={()=>{setVisible2(visible2 => !visible2)}}><img src={eye} alt="eye icon" /></span>
            </div>
            <div className="ChangePassword-Input">
                <label>Confirm New Password</label>
                <input className='passwordInput' type={inputType3} />
                <span onClick={()=>{setVisible3(visible3 => !visible3)}}><img src={eye} alt="eye icon" /></span>
            </div>
            <button className='suggestForm-btn'>Save Changes</button>
        </form>
    </div>

    
  )
}
