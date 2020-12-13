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
                    <h1>Beyond the Web</h1>
                    <h3>I'm currently dabbling in game and app development using Unity/C#.</h3>
                    <h3>One project includes a pixel cat. The other, Bluetooth.</h3>
                    <h3>Stay tuned for updates!</h3>
                </div>
            </div>
            
        );
    }
}

export default About;
