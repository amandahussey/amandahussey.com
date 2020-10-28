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
                    <h3>Up to this point, my focus on software has been around front end web development. My education is in math. </h3>
                </div>
            </div>

            :  

            <div id='about--future' className='about-container'>
                <div id='about-section--future'>
                    <h1>Where I'm Going</h1>
                    <h3>My dream is to create my own video game.</h3>
                    <h3>So I'm putting my software skillz toward game development, starting with Unity/C#.</h3>
                    <h3>Stay tuned for updates!</h3>
                </div>
            </div>
            
        );
    }
}

export default About;
