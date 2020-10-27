import React, { Component } from 'react'
import './About.scss'


class About extends Component {
    constructor(){
        super()
        this.state = {
        
        }
    }

  

    render (){
   
        return (
            this.props.past ?
                
            <div id='about--past' className='about-container'>
                <div id='about-section--past'>
                    <h1>Where I've Been</h1>
                    <h3>My background is in math. I'm a software developer, with focus on front end web development.</h3>
                </div>
            </div>

            :  

            <div id='about--future' className='about-container'>
                <div id='about-section--future'>
                    <h1>Where I'm Going</h1>
                    <h3>I am currently working toward teaching myself game development, starting with Unity.</h3>
                </div>
            </div>
            
        );
    }
}

export default About;
