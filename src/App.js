import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './App.css';

import Home from './Home'
import WallpaperWall from './WallpaperWall'

class App extends Component {
  constructor(){
    super()
    this.state = {
      
    }
  }

  render (){

    return (
      <Router>
        <Switch>
          <Route path="/wall">
            <WallpaperWall />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
