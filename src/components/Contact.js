import React, { Component } from 'react'
import '../styles/screen.sass'

class Contact extends Component {
  render () {
    return <div id='contact'>
      <div className='contactFont'>
      <h1>Contact</h1>
      <button><a href={require('../images/TJAlston-WebDeveloper-2017.pdf')}>Resume</a></button>
      <p className='number'>(813) 727 - 6091</p>
      <a href='mailto:TJAlston82@yahoo.com'>TJAlston82@Yahoo.com</a>
        <div className='buttonsContact'>
          <div className= 'marble'>
            <a className='github' href='https://github.com/TJAlston' />
            <p>Github</p>
          </div>
          <div className= 'marble'>
            <a className='linkedin' href='https://www.linkedin.com/in/tamekajalston' />
            <p>LinkedIn</p>
          </div>
          <div className= 'marble'>
            <a className='twitter' href='https://twitter.com/Mirage_Music' />
            <p>Twitter</p>
          </div>
          <div className= 'marble'>
            <a className='ig' href='https://www.instagram.com/tamekaj.alston/' />
            <p>Instagram</p>
          </div>
        </div>
      </div>
    </div>
  }
}

export default Contact
