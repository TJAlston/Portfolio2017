import React, { Component } from 'react'
import '../styles/screen.sass'
import Header from './Header'
import About from './About'
import Skills from './Skills'
import Portfolio from './Portfolio'
import Contact from './Contact'

class App extends Component {

  render () {
    return <div className='home'>
      <main>
        <Header />
        <div className='intro'>
          <img className='Headshot' />
          <h1>Tameka J. Alston</h1>
          <h2>Front End Web Developer</h2>
          <p>Creating beautiful dynamic webpages from a blank page is what I love to do! </p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
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
