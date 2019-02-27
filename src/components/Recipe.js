import React, { Component } from 'react'
import Delete from './Delete'

export default class Recipe extends Component {
  render() {
      let filtered = this.props.recepies.filter(recipe => recipe.title.indexOf(this.props.filterText) !== -1)
      let recepies = this.props.isL ?

          filtered.map(recipe => (
              <div className='RecipeOne' key={recipe.id}>
                  <h1>{recipe.title}</h1>
                  <h2>Directions: {recipe.directions}</h2>
                  <h2>Ingredients: {recipe.components.map(i => (
                      <div key={i.name}>
                          <p>{i.name} {i.amount} </p>
                      </div>
                  ))}</h2>
                  <Delete id={recipe.id} />
              </div>
          )) : null

    return (
        <div className='MyRecipes'>
        {recepies}
      </div>
    )
  }
}
