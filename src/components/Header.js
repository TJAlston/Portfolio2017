import React, { Component } from 'react'
import '../styles/screen.sass'
// import { Link } from 'react-router'
import { HashLink } from 'react-router-hash-scroll'

class Header extends Component {

  render () {
    return <div className='header'>
      <input className='burger-check' id='burger-check' type='checkbox' />
      <label htmlFor='burger-check' className='burger' />
      <nav id='navigation1' className='navigation'>
         <ul>
           <li><HashLink className ='name' to='/#home'>Tameka J. Alston</HashLink></li>
           <li className='subA'><HashLink to='/#about'>ABOUT</HashLink></li>
           <li><HashLink to='/#skills'>SKILLS</HashLink></li>
           <li><HashLink to='/#portfolio'>PORTFOLIO</HashLink></li>
           <li><HashLink to='/#portfolio'>- Web Development / Design</HashLink></li>
           <li><HashLink to='/#graphic'>- Graphic Design</HashLink></li>
           <li><HashLink to='/#contact'>CONTACT</HashLink></li>
         </ul>
       </nav>
    </div>
  }
  }

export default Header
