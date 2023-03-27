import React from 'react'
import "./PasswordSuccessful.css"
import check from "../../../../data/bigcheck.png"
import { Link } from 'react-router-dom'

export default function PasswordSuccessful() {
  return (
    <div className='PasswordSuccessful-container'>
        <div className="PasswordSuccessful-inner">
            <img src={check} alt="succesful" />
            <p>Your Password has been Successfully Changed</p>
            <Link to="/" className='PasswordSuccessful-link'>Back to Settings</Link>
        </div>
    </div>
  )
}
