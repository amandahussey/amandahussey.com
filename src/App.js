import React, { Component } from 'react';
import './App.css';

import SwingingChain from './SwingingChain'

class App extends Component {
  constructor(){
    super()
    this.state = {
      lightIsOn: false,
      isPullingChain: false,
      triggerChainWiggle: false,
      timeout: null,
      isInactive: false
    }
  }

  componentDidMount(){
    this.timeout = null
    const timeout = setTimeout(() => {
      this.handleChainWiggle()
    }, 5000)
  }

  handleChainWiggle = () => {
    this.setState({
      triggerChainWiggle: true
    }, 
    () => {
      setTimeout(() => {
        this.setState({
          triggerChainWiggle: false
        })
      }, 1750) // wait for wiggle animation
    }
    )
  }

  toggleColor = () => {
    this.setState({
      lightIsOn: !this.state.lightIsOn
    })
  }

  handleChainPull = () => {
    const { isPullingChain, lightIsOn, timeout } = this.state

    if(isPullingChain) return // debounce
    else {
      this.setState({
        isPullingChain: true,
      }, () => {
          const timeout = setTimeout(() => { 
          this.setState({
            isPullingChain: false,
            lightIsOn: !lightIsOn,
            timeout: timeout
          }, () => console.log('timeout', timeout))
        }, 500) // wait for chain pull animation
      })
    }
  }

  render (){
    const { lightIsOn, isPullingChain, triggerChainWiggle } = this.state

    return (
      <div className={ `App ${this.state.lightIsOn === true ? 'App--light' : 'App--dark' }` }>
        <header className={`App-header ${this.state.lightIsOn === false ? 'glow-in-the-dark' : ''}` }>
          Amanda Hussey
        </header>
        <SwingingChain lightIsOn={lightIsOn} handleChainPull={this.handleChainPull} isPullingChain={isPullingChain} triggerChainWiggle={triggerChainWiggle} />
      </div>
    );
  }
}

export default App;
