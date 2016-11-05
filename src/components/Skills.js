import React, { Component } from 'react'
import '../styles/screen.sass'

class Skills extends Component {
  render () {
    return <div id='skills'>
    <h3>Skills</h3>
      <div className='skillList'>
        <div className='html' />
        <div className='css' />
        <div className='javascript' />
        <div className='sass' />
        <div className='react' />
        <div className='ai' />
        <div className='ps' />
        <div className='br' />
        <div className='id' />
      </div>
    </div>
  }
}

export default Skills
