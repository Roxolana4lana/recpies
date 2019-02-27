import React, { Component } from 'react'
import header from '../styles/header.jpeg'
import '../styles/output.css'
import Navigation from './Navigation'

export default class Main extends Component {
  render() {
    return (
      <div className='main'>
      <div className='mainTitle'>
                <h1><span className='t'>T</span>
                    <span className='i'>i</span>
                    <span className='d'>d</span>
                    <span className='b'>b</span>
                    <span className='i1'>i</span>
                    <span className='t1'>t</span>
                    <span className='s'>s</span></h1>
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
