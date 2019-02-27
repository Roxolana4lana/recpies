import React, { Component } from 'react'
import axios from 'axios'
import RecipeOne from './RecipeOne';
import NavBar from './NavBar'
export default class ShowAll extends Component {
    constructor(){
        super()
        this.state={
           recip:'' ,
           isL:false,
           keyWord:''
        }
    }
    SeeRec=e=>{
        e.preventDefault();
        let word=this.state.keyWord
        axios.get(`https://www.food2fork.com/api/search?key=dc1e0a4b6bcafc8c5fbf1b7e7e0dbf24&q=${word}&page=2`)
         
        .then(res=>this.setState({
            recip: res.data.recipes,
            isL:true
        }))
           

    }
    handleChange=e=>{
this.setState({
  keyWord:e.target.value
})
    }
   
  render() {
    console.log(this.state.keyWord)
  let bla=this.state.isL?console.log(this.state.recip):console.log('not yet')
    let lola = this.state.isL? this.state.recip.map(recipe =>{
            return (
      <div key={recipe.recipe_id} >
                <RecipeOne title={recipe.title} image={recipe.image_url} source={recipe.f2f_url}/>
        </div>
      )
    }) : console.log('LOading')
    return (
      <div className='FindMore'>
      <NavBar/>
      <input onChange={this.handleChange}
      value={this.state.keyWord}
      className='FindNew'
      ></input>
        <button className='FindButton'onClick={this.SeeRec}>Find Recipe</button>
        <div className='ShowAll'>
        {
          lola
        }
        </div>
        {bla}
      </div>
    )
  }
}
