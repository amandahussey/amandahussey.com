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

        console.log('navIsFixed', navIsFixed)
   
        return (
            <div id='landing__container'>
                <div id='landing__text-container'>
                    <h1 className={ navIsFixed ? 'fixed-nav' : ''}>Amanda Hussey</h1>
                    <h2 className={ navIsFixed ? 'remove-software-developer' : ''}>Software Developer</h2>
                </div>
            </div>
            
        );
    }
}

export default Landing;
