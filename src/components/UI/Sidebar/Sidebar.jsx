import React, { useState } from 'react'
import { Link, NavLink } from "react-router-dom"
import "./Sidebar.css"
import logo from "../../../data/logo.png"
import menu from "../../../data/menu.png"
import { links } from '../../../data/data'
import Theme from './Theme'
import SidebarAd from './SidebarAd'

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
          <Theme />
          <SidebarAd handleAdvert={handleAdvert} advert={advert}/>
        </div>
      </div>
    </div>
  )
}
