import React, { Component } from 'react';
import './Resume.css';

class Resume extends Component {
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

  

  render (){
   
    return (
      <div className='resume-container'>
        <header className={`App-header ${this.props.lightIsOn === true ? 'unskew' : ''}` }>
          Amanda Hussey
        </header>
        <h1>Software Developer</h1>
        <h2>JavaScript</h2>
        <h2>Redux</h2>
      </div>
    );
  }
}

export default Resume;
