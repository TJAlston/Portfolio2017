import React, { Component } from 'react'
import '../styles/screen.sass'

class Contact extends Component {
  render () {
    return <div className='contact'>
      <div className='contactFont'>
      <h1>Contact</h1>
      <button><a href='../src/images/TJAlston.pdf'>RESUME</a></button>
      <p>(813) 727 - 6091</p>
      <p><a href='mailto:TJAlston82@yahoo.com'>TJAlston82@Yahoo.com</a></p>
      <p><a href='https://github.com/TJAlston'>github.com/TJAlston</a></p>
      </div>
    </div>
  }
}

export default Contact
