import React, { Component } from 'react'
import './Landing.scss'

class Landing extends Component {
    constructor(){
        super()
        this.state = {
        
        }
    }

    render (){
   
        return (
            <div id='landing__container'>
                <div id='landing__text-container'>
                    <h1>Amanda Hussey</h1>
                    <h2>Software Developer</h2>
                </div>
            </div>
            
        );
    }
}

export default Landing;
