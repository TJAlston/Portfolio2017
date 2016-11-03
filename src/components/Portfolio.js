import React, { Component } from 'react'
import '../styles/screen.sass'

class Portfolio extends Component {
  render () {
    return <div id='portfolio'>
      <h4>Portfolio</h4>
      <div className='row1'>
        <div className='onePiece' />
        <div className='marvel' />
        <div className='oneList' />
        <div className='dexter' />
        <div className='BBCNews' />
        <div className='bomb' />
      </div>
    </div>
  }
}

export default Portfolio
