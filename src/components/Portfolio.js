import React, { Component } from 'react'
import '../styles/screen.sass'

class Portfolio extends Component {
  render () {
    return <div id='portfolio'>
      <h4>Portfolio</h4>
      <h5> Web Design </h5>

      <div className='row1' id='webRow'>
        <a href='https://github.com/TJAlston/one-list'>
        <div className='oneList' /></a>
        <a href='https://github.com/TJAlston/DexterMemory'>
        <div className='dexter' /></a>
        <a href='https://github.com/TJAlston/BBCNews'>
        <div className='BBCNews' /></a>
        <a href='https://github.com/TJAlston/bomb-sniffer'>
        <div className='bomb' /></a>
        <a href='https://github.com/TJAlston/OnePiecePlanet'>
        <div className='onePiece' /></a>
        <a href='https://github.com/ctscodes/MarvelApp-'>
        <div className='marvel' /></a>
      </div>

      <div id='graphic'>
      <h5> Graphic Design </h5>
      <div className='row1' id='graphicRow'>

        <div className='thumb'>
          <a href='#lightbox1'>
          <div className='lefemme' />
          </a>
        </div>

        <div className='thumb'>
          <a href='#lightbox2'>
          <div className='tv' />
          </a>
        </div>

        <div className='thumb'>
          <a href='#lightbox3'>
          <div className='bubbles'>
          </div>
          </a>
        </div>

        <div className='lightbox' id='lightbox1'>
          <a href='#graphic'><div id='lefemme' /></a>
        </div>

        <div className='lightbox' id='lightbox2'>
          <a href='#graphic'><div id='tv' /></a>
        </div>

        <div className='lightbox' id='lightbox3'>
          <a href='#graphic'><div id='bubbles' /></a>
        </div>
      </div>
    </div>
  </div>
  }
}

export default Portfolio
