import React, { Component } from 'react'


export default class Search extends Component {

    handleChange=e=>{
        this.props.onUserInput(e.target.value)
    }

  render() {

    return (
      <div className='search'>
          <label>Search</label> <br></br>
          <input
            type='text'
            value={this.props.filterText}
            onChange={this.handleChange}/>
      </div>
    )
  }
}