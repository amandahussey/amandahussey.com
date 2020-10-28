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
                <div id='about-section--past' className='about-section'>
                    <h1>Where I've Been</h1>
                    <h3>Up to this point, my focus in software has been on web development.</h3>
                    <h3>Before software, there was math.</h3>
                </div>
            </div>

            :  

            <div id='about--future' className='about-container'>
                <div id='about-section--future' className='about-section'>
                    <h1>Where I'm Going</h1>
                    <h3>My dream is to create video games.</h3>
                    <h3>I'm starting with Unity/C#.</h3>
                    <h3>Stay tuned for updates!</h3>
                </div>
            </div>
            
        );
    }
}

export default About;
