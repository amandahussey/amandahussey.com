import React, { Component } from 'react'
import './Landing.scss'

class Landing extends Component {
    constructor(){
        super()
        this.state = {
        
        }
    }

    render (){
        
        const { navIsFixed } = this.props 

        return (
            <div id='landing__container'>
                <div id='landing__text-container'>
                    <h1 id='landing__text-container__name' className={ navIsFixed ? 'fixed-name' : ''}>Amanda Hussey</h1>
                    <h2 id='landing__text-container__software-dev'>Software Developer</h2>
                </div>
            </div>
            
        );
    }
}

export default Landing;
