import React, { Component } from 'react';
import './App.css';

import SwingingChain from './SwingingChain'

class App extends Component {
  constructor(){
    super()
    this.state = {
      lightIsOn: false
    }
  }

  toggleColor = () => {
    console.log('this.state.lightIsOn', this.state.lightIsOn)
    this.setState({
      lightIsOn: !this.state.lightIsOn
    })
  }

  render (){
    return (
      <div className={ `App ${this.state.lightIsOn === true ? 'App--light' : 'App--dark' }` }>
        <div className={ this.state.lightIsOn === true ? 'color-toggle dark-background' : 'color-toggle light-background' } onClick={this.toggleColor}></div>
        <header className={`App-header ${this.state.lightIsOn === false ? 'glow-in-the-dark' : ''}` }>
          Amanda Hussey
        </header>
        <SwingingChain/>
      </div>
    );
  }
}

export default App;
