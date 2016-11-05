import React, { Component } from 'react'
import '../styles/screen.sass'
import Header from './Header'
import About from './About'
import Skills from './Skills'
import Portfolio from './Portfolio'
import Contact from './Contact'
import { HashLink } from 'react-router-hash-scroll'

class App extends Component {

  render () {
    return <div id='home'>
      <main>
        <Header />
        <div className='intro'>
          <img className='Headshot' />
          <h1>Tameka J. Alston</h1>
          <h2>Front End Web Developer</h2>
          <p>I am a Front End Web Developer based in Tampa Florida that has experience in HTML5, CSS3 and JavaScript.  I also have Graphic Design skills in Adobe Illustrator, PhotoShop and InDesign.</p>
          <p>Creating beautiful dynamic webpages from a blank page is what I love to do! </p>
          <div className='buttons'>
            <button><HashLink to='/#portfolio'>Portfolio</HashLink></button>
            <button><HashLink to='/#contact'>Contact</HashLink></button>
          </div>
        </div>
        <div className='links'>
        <About />
        <Skills />
        <Portfolio />
        <Contact />
        </div>
      </main>
    </div>
  }
}

export default App
