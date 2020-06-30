import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      background: 'light'
    }
  }

  toggleColor = () => {
    if(this.state.background === 'light'){
      console.log('light')
      this.setState({
        background: 'dark'
      })
    }
    else if (this.state.background === 'dark'){
      console.log('dark')
      this.setState({
        background: 'light'
      })
    }
  }

  render (){
    return (
      <div className={ this.state.background === 'light' ? 'App--light' : 'App--dark' }>
        <div className={ this.state.background === 'light' ? 'color-toggle--dark' : 'color-toggle--light' } onClick={this.toggleColor}></div>
        <header className="App-header">
          Amanda Hussey
        </header>
      </div>
    );
  }
}

export default App;
