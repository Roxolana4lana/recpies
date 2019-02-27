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
   //  <Recipe isL={this.state.isL} recepies={this.state.recepies} filterText={this.state.filterText}/>
  render() {
 // let bla =     this.state.isL ? console.log(this.state.recepies[0].title):null
//       let filtered = this.state.recepies.filter(recipe=>recipe.title.indexOf(this.state.filterText) !== -1)
//       let recepies = this.state.isL ?
      
//       filtered.map(recipe=>(
//       <div key={recipe.id}>
//       <h1>{recipe.title}</h1>
//       <h2>Directions: {recipe.directions}</h2>
//       <h2>Ingredients: {recipe.components.map(i=>(
//           <div key={i.name}>
//                       <p>{i.name} {i.amount} </p>
       
//                   </div>
//       ))}</h2>
//       </div>
//   )):null

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
