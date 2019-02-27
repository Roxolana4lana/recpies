import React, { Component } from 'react'
import axios from 'axios'
import Search from './Search';
import Recipe from './Recipe';
import NavBar from './NavBar'


export default class ShowMyRecipes extends Component {
    constructor(){
        super()
        this.state={
            recepies:[],
            isL: false,
            filterText:''
        }
    }

    componentDidMount(){
        axios.get(`http://127.0.0.1:8000/recipes/`)
        .then(res=>this.setState({
            recepies:res.data,
            isL:true
        }))
    }

    handleUserInput=searchTerm=>{
        this.setState({
            filterText:searchTerm
        })
    }

  render() {
    return (
      <div className='ShowMine'>
        <NavBar/>
        <Search filterText={this.state.filterText}
            onUserInput={this.handleUserInput}/>
            <Recipe isL={this.state.isL} recepies={this.state.recepies} filterText={this.state.filterText} />
      </div>
    )
  }
}
