import React, { Component } from 'react'
import '../styles/screen.sass'
import { Link } from 'react-router'
// import { HashLink } from 'react-router-hash-scroll'

class Header extends Component {
  render () {
    return <div className='header'>
    <nav>
      <ul>
       <li className='name'>Tameka J. Alston</li>
        <li><Link to='./About'>ABOUT</Link></li>
        <li>SKILLS</li>
        <li>PORTFOLIO</li>
        <li>CONTACT</li>
      </ul>
    </nav>
    </div>
  }
  }

export default Header
