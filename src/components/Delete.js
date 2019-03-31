import React, { Component } from 'react'
import axios from 'axios'


export default class Delete extends Component {
    RecipeDelete = async (e) => {
    e.preventDefault()
    try{
  const res = await axios.delete('http://127.0.0.1:8000/recipes/' + this.props.id + '/')   
  if(!res.ok){
    throw Error(res.statusText)
  }
} catch(error){
      console.log(error)
    }
      window.location.reload()
  }

  render() {
    return (
      <div>
        <button className='delete' onClick={this.RecipeDelete}>x</button>
      </div>
    )
  }
}