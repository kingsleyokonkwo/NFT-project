import React from 'react'
import "./popup.css"

export default function Popup(props) {
    console.log(props)
    return (props.trigger) ? (
        <div className='popup'>
            <div className="popup-inner">
                <button className='close' onClick={console.log("clicked")}>close</button>
                {props.children}
            </div>
        </div>
    ) : ""
    
}
