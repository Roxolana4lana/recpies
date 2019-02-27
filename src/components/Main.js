import React, { Component } from 'react'
import '../styles/output.css'
import Navigation from './Navigation'


export default class Main extends Component {
  render() {
    return (
      <div className='main'>
        <div className='mainTitle'>
          <h1>Tidbits</h1>
        </div>
        <Navigation/>
        <div className='quotes'>
          <q>For me, cooking is an extension of love</q>
          <p>Hedda Sterne</p>
        </div>
      </div>
    )
  }
}