import React, { Component } from 'react'
import '../styles/screen.sass'

class Skills extends Component {
  render () {
    return <div id='skills'>
    <h3>Skills</h3>
      <div className='skillList'>
        <div className = 'marble'>
          <div className='html' />
          <p>HTML5</p>
        </div>
        <div className = 'marble'>
          <div className='css' />
          <p>CSS3</p>
        </div>
        <div className = 'marble'>
          <div className='javascript' />
          <p>JavaScript</p>
        </div>
        <div className = 'marble'>
          <div className='sass' />
          <p>Sass</p>
        </div>
        <div className = 'marble'>
          <div className='react' />
          <p>React</p>
        </div>
        <div className = 'marble'>
          <div className='ai' />
          <p>Illustrator</p>
        </div>
        <div className = 'marble'>
          <div className='ps' />
          <p>Photoshop</p>
        </div>
        <div className = 'marble'>
          <div className='br' />
          <p>Bridge</p>
        </div>
        <div className = 'marble'>
          <div className='id' />
          <p>InDesign</p>
        </div>
      </div>
    </div>
  }
}

export default Skills
