import React, { Component } from 'react'
import '../styles/screen.sass'
import Header from './Header'
import About from './About'
import Skills from './Skills'
import Portfolio from './Portfolio'
import Contact from './Contact'
import { HashLink } from 'react-router-hash-scroll'

class App extends Component {

  setHalfVolume = (event) => {
    event.target.volume = 0.1
  }

  musicRepeat = (event) => {
    const audioMusic = document.getElementById('audioSnippet')
    audioMusic.play.loop()

    var height = document.innerHeight() - window.innerHeight()

    window.scroll(function() {
        audioMusic.volume = 1 - window.scrollTop() / height;
        console.log(audioMusic.volume);
  });
}

    // audioMusic.addEventListener('loadstart' , musicRepeat, true)
    // console.log(audioMusic)


// var audio_file = new Audio('./src/images/looperman-l-0173301-0102001-eendee-magicharp.wav')
// audio_file.addEventListener('timeupdate', function(){
//               var buffer = .44
//               if(this.currentTime > this.duration - buffer){
//                   this.currentTime = 0
//                   this.play()
//               }}, false);

  render () {
    return <div id='home'>
      <main>
        <audio id='audioSnippet' src='./src/images/looperman-l-0173301-0102001-eendee-magicharp.wav' onLoadedData={this.setHalfVolume} autoPlay />
        <Header />
        <div className='intro'>
          <div className='Headshot' />
          <h1>Tameka J. Alston</h1>
          <h2>Front End Web Developer</h2>
          <p>I am a Front End Web Developer based in Tampa Florida that has experience in HTML5, CSS3 and JavaScript.  I also have Graphic Design skills in Adobe Illustrator, PhotoShop and InDesign.</p>
          <div className='buttons'>
            <button className='portId homeButton'><HashLink to='/#portfolio'>Portfolio</HashLink></button>
            <button className='homeButton'><HashLink to='/#contact'>Contact</HashLink></button>
          </div>
        </div>
        <div className='links'>
        {/* <About /> */}
        <Skills />
        <Portfolio />
        <Contact />
        </div>
      </main>
    </div>
  }
}

export default App
