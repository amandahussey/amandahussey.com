import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"

import Home from './components/Home/Home'
import RikuPage from './components/Riku/RikuPage'

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
