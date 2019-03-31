import React, { Component } from 'react';
import AddRecip from './components/AddRecip'
import ShowMyRecipes from './components/ShowMyRecipes';
import ShowAll from './components/ShowAll';
import Main from './components/Main'
import { Route, HashRouter  } from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <HashRouter> 
       <React.Fragment>
          <Route exact path='/' component={Main}></Route>
          <Route exact path='/seemore' component={ShowAll}></Route>
          <Route exact path='/add' component={AddRecip}></Route>
          <Route exact path='/seemine' component={ShowMyRecipes}></Route>
        </React.Fragment> 
      </HashRouter>
    )
  }
}

export default App;