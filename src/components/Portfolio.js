import React, { Component } from 'react'
import '../styles/screen.sass'

class Portfolio extends Component {
  render () {
    return <div id='portfolio'>
      <h4>Portfolio</h4>
      <h5> Web Design </h5>
      <div className='row1'>
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
      <h5> Graphic Design </h5>
      <div className='row1'>
        <div className='lefemme' />
        <div className='tv' />
        <div className='bubbles' />
      </div>
    </div>
  }
}

export default Portfolio
