import React from 'react'
import { LOGO_URL } from '../utils/constants'

const Header = () => {



    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL} />
            </div>
            <div classname="links-container">
                <ul className="nav-items">
                    <li>Home</li>
                    <li>About US</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

export default Header
