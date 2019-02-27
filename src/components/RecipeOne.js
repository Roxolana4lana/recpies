import React, { Component } from 'react'


export default class RecipeOne extends Component {
  render() {

    return (
      <div className='RecipeOneNew'>
          <img src={this.props.image} alt="name" style={{height:'27rem'}}/>
          <h3>{this.props.title}</h3>
          <a className='RecipeLink' href={this.props.source}>see details</a>
      </div>
    )
  }
}
