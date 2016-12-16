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
           {/* <li className='subA'><HashLink to='/#about'>ABOUT</HashLink></li> */}
           <li><HashLink className ='sub' to='/#skills'>Skills</HashLink></li>
           <li><HashLink className ='sub' to='/#portfolio'>Portfolio</HashLink></li>
           <li><HashLink className ='sub' to='/#portfolio'>- Web Development / Design</HashLink></li>
           <li><HashLink className ='sub' to='/#graphic'>- Graphic Design</HashLink></li>
           <li><HashLink className ='sub' to='/#contact'>Contact</HashLink></li>
         </ul>
       </nav>
    </div>
  }
  }

export default Header
