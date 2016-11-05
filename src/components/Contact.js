import React, { Component } from 'react'
import '../styles/screen.sass'

class Contact extends Component {
  render () {
    return <div id='contact'>
      <div className='contactFont'>
      <h1>Contact</h1>
      <button><a href={require('../images/TJAlston.pdf')}>Resume</a></button>
      <p className='number'>(813) 727 - 6091</p>
      <a href='mailto:TJAlston82@yahoo.com'>TJAlston82@Yahoo.com</a>
        <div className='buttonsContact'>
        <a href='https://github.com/TJAlston'><div className='github' /></a>
        <a href='https://www.linkedin.com/in/tamekajalston'><div className='linkedin' /></a>
        <a href='https://twitter.com/Mirage_Music'><div className='twitter' /></a>
        <a href='https://www.instagram.com/tamekaj.alston/'><div className='ig' /></a>
        </div>
      </div>
    </div>
  }
}

export default Contact
