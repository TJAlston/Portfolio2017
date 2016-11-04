import React, { Component } from 'react'
import '../styles/screen.sass'
import Header from './Header'
import About from './About'
import Skills from './Skills'
import Portfolio from './Portfolio'
import Contact from './Contact'

class App extends Component {

  render () {
    return <div id='home'>
      <main>
        <Header />
        <div className='intro'>
          <img className='Headshot' />
          <h1>Tameka J. Alston</h1>
          <h2>Front End Web Developer</h2>
          <p>Creating beautiful dynamic webpages from a blank page is what I love to do! </p>
          <div className='buttons'>
            <button>Portfolio</button>
            <button>Contact</button>
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
