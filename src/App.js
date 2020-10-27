import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import './App.css';

import Home from './Home'
import Resume from './Resume'
import RikuPage from './RikuPage'

class App extends Component {
  constructor(){
    super()
    this.state = {
      
    }
  }

  render (){

    return (
      <div>
			<Router>
				<Switch>
					<Route path="/resume">
						<Resume />
					</Route>
					<Route path="/riku">
						<RikuPage />
					</Route>
					<Route path="/">
						<Home />
					</Route>
				</Switch>
			</Router>
      </div>
      
    );
  }
}

export default App;
