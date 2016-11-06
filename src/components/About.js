import React, { Component } from 'react'
import '../styles/screen.sass'

class About extends Component {
  render () {
    return <div id='about'>
    <h4>About</h4>
    <div className='columns'>
      <div className='education'>
      <h5>Education</h5>
        <p> Front End Engineer Certification from The Iron Yard</p>
        <p> Bachelor of Arts Degree from the University of North Carolina at Wilmington in Communication and Media Studies along with a minor in Theater</p>
      </div>
      <div className='extraCir'>
      <h5>Social Activities</h5>
        <p> Elite Hip-Hop Dancer for OnCue Dance</p>
        <p> Stage Manager, Production Manager, Assistant Director and Actress for AMS Visions and Productions known for the Theatrical Dance Musical <i>Saul's Juke Joint</i></p>
      </div>
      <div className='aboutMe'>
      <h5>Social Groups</h5>
        <div className= 'groups'>
        <p>Girl Develop It - Tampa Bay</p>
        <p>Suncoast Developers Guild</p>
        <p>Front End Design Meetup</p>
        <p>Code Katas</p>
        <p>The Iron Yard Meetup</p>
        </div>
      </div>
    </div>
  </div>
  }
}

export default About
