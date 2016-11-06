import React, { Component } from 'react'
import '../styles/burger.sass'
// import { Link } from 'react-router'
// import { HashLink } from 'react-router-hash-scroll'

class Hamburger extends Component {
  render () {
    return <div className='hamburger'>
    <input className='burger-check' id='burger-check' type='checkbox' /><label htmlFor='burger-check' className='burger'></label>
      <nav id='navigation1' className='navigation'>
        <ul className='menu'>
          <li className='list'><a href='#'>Home</a></li>
          <li className='list'><a href='#'>Stuffs</a></li>
          <li className='list'><a href='#'>Other stuffs</a></li>
          <li className='list'><a href='#'>Cats</a></li>
        </ul>
      </nav>
    </div>
  }
}
export default Hamburger
