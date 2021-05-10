import React, { Component } from 'react'

import './header.styles.css'


export class Header extends Component {
  render() {
    return (
      <header>
        <h3 className="logo">Logo</h3>
        <nav>
          <ul>
            <li><a href="createAds">Create Ads</a></li>
            <li><a href="aboutUs">About Us</a></li>
            <li><a href="login">Login</a></li>
            <button className='register-btn'>Register</button>
          </ul>
        </nav>
      </header>
    )
  }
}
