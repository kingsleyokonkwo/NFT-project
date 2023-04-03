import React from 'react'
import classes from "./PasswordSuccessful.module.scss"
import check from "../../../../data/bigcheck.png"
import { Link } from 'react-router-dom'

export default function PasswordSuccessful() {
  return (
    <div className={classes.PasswordSuccessful__container}>
        <div className={classes.PasswordSuccessful__containerInner}>
            <img src={check} alt="succesful" />
            <p>Your Password has been Successfully Changed</p>
            <Link to="/settings" className={classes.PasswordSuccessful__link}>Back to Settings</Link>
        </div>
    </div>
  )
}
