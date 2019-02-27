import React, { Component } from 'react';
import AddRecip from './components/AddRecip'
import ShowMyRecipes from './components/ShowMyRecipes';
import ShowAll from './components/ShowAll';
import Main from './components/Main'
import { Route, BrowserRouter } from 'react-router-dom';


class App extends Component {

  render() {
    return (
      <BrowserRouter>
     <React.Fragment>
     <Route exact path='/' component={Main}></Route>
          <Route exact path='/seemore' component={ShowAll}></Route>
          <Route exact path='/add' component={AddRecip}></Route>
          <Route exact path='/seemine' component={ShowMyRecipes}></Route>
  
  
      </React.Fragment>
      </BrowserRouter>
    )
  }
}


export default App;
