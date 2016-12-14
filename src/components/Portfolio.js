import React, { Component } from 'react'
import '../styles/screen.sass'

class Portfolio extends Component {
  render () {
    return <div id='portfolio'>
      <h4>Portfolio</h4>
      <h5> Web Design </h5>

      <div className='row1' id='webRow'>
        <a href='http://onepieceplanet.surge.sh/'>
        <div className='onePiece' /></a>
        <a href='http://ctscodes.team.marvelapp.surge.sh/#/'>
        <div className='marvel' /></a>
        <a href='http://tjonelist.surge.sh/'>
        <div className='oneList' /></a>
        <a href='http://dextermemory.surge.sh/'>
        <div className='dexter' /></a>
        <a href='http://newswebsite1.surge.sh/'>
        <div className='BBCNews' /></a>
        <a href='http://bombsniffer.surge.sh/'>
        <div className='bomb' /></a>
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
