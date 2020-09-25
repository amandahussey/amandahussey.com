import React, { Component } from 'react';
import './App.css';

import SwingingChain from './SwingingChain'

class App extends Component {
  constructor(){
    super()
    this.state = {
      lightIsOn: false,
      isPullingChain: false,
      timeOut: null
    }
  }

  componentDidMount(){
    this.timeout = null
  }

  toggleColor = () => {
    this.setState({
      lightIsOn: !this.state.lightIsOn
    })
  }

  handlePullChain = () => {
    const { isPullingChain, lightIsOn, timeout } = this.state

    if(isPullingChain) return // debounce
    else {
      this.setState({
        isPullingChain: true,
      }, () => {
          const timeout = setTimeout(() => { // wait for 1s to complete animation
          this.setState({
            isPullingChain: false,
            lightIsOn: !lightIsOn,
            timeout: timeout
          })
        }, 1000)
      })
    }
  }

  render (){
    const { lightIsOn, isPullingChain } = this.state

    return (
      <div className={ `App ${this.state.lightIsOn === true ? 'App--light' : 'App--dark' }` }>
        <div className={ this.state.lightIsOn === true ? 'color-toggle dark-background' : 'color-toggle light-background' } onClick={this.toggleColor}></div>
        <header className={`App-header ${this.state.lightIsOn === false ? 'glow-in-the-dark' : ''}` }>
          Amanda Hussey
        </header>
        <SwingingChain lightIsOn={lightIsOn} handlePullChain={this.handlePullChain} isPullingChain={isPullingChain} />
      </div>
    );
  }
}

export default App;
