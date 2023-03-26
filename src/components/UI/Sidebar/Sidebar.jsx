import React, { useState } from 'react'
import { Link, NavLink } from "react-router-dom"
import "./Sidebar.css"
import moon from "../../data/moon.png"
import sun from "../../data/sun.png"
import logo from "../../data/logo.png"
import trading from "../../data/trading.png"
import menu from "../../data/menu.png"
import cancel from "../../data/close-circle.png"
import { links } from '../../data/data'

export default function Sidebar(props) {

  const [advert, setAdvert] = useState(true)
  const handleAdvert = () => {
    setAdvert(false)
  }

  return (
    <div className='sidebar_inner'>
      <div className='header'>
        <Link to="/" className="brand">
          <img className='logo' src={logo} alt='logo' />
          <h3>Cryptooes</h3>
        </Link>
        <img src={menu} alt='menu' className='hamburger' onClick={props.handleMenu}  style={{cursor: "pointer"}}/>
      </div>

      <div className='sidebar-items'>
        <div className="links">
          {links.map((item) => (
            <div key={item.name}>
              <NavLink to={`/${item.name}`} className="link-item" onClick={() => { }}>
                <img className='link-icon' src={item.logo} alt="icon" />
                <p className='link-name'>{item.name}</p>
              </NavLink>
            </div>
          ))}
        </div>

        <div className="theme">
          <div className="theme-toggle">
            <div className="dark-theme">
              <img className='moon' src={moon} alt='moon logo' />
              <p>Dark</p>
            </div>
            <div className="light-theme">
              <img className='sun' src={sun} alt='sun logo' />
              <p>Light</p>
            </div>
          </div>

          <div className={advert ? "advert" : "noadvert"}>
            <img className='trade-img' src={trading} alt='trading'/>
            <h4>Send Crypto to Friends and Family</h4>
            <button className='ad-btn'>Send now</button>
            <img className='cancel' src={cancel} alt='cancel' onClick={handleAdvert}/>
          </div>
        </div>
      </div>
    </div>
  )
}
