import React, { Component } from 'react'
import './Landing.scss'

import About from './About'

class Landing extends Component {
    constructor(){
        super()
        this.state = {
        
        }
    }

  

  render (){
   
        return (
            <div>
                <div id='landing-container'>
                    <h1>Amanda Hussey</h1>
                    <h2>Software Developer</h2>
                </div>
            </div>
            
        );
    }
}

export default Landing;
