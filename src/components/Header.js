import React, { Component } from 'react'
import '../styles/screen.sass'
// import { Link } from 'react-router'
import { HashLink } from 'react-router-hash-scroll'

class Header extends Component {
  render () {
    return <div className='header'>
    <nav>
      <ul>
       <li className='name'><HashLink to='/#home'>Tameka J. Alston</HashLink></li>
        <li><HashLink to='/#about'>ABOUT</HashLink></li>
        <li><HashLink to='/#skills'>SKILLS</HashLink></li>
        <li><HashLink to='/#portfolio'>PORTFOLIO</HashLink></li>
        <li><HashLink to='/#contact'>CONTACT</HashLink></li>
      </ul>
    </nav>
    </div>
  }
  }

export default Header
