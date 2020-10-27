import React, { Component } from 'react'
import './About.scss'


class About extends Component {
    constructor(){
        super()
        this.state = {
        
        }
    }

  

    render (){

        const { future } = this.props

        const header = future ? "Where I'm Going" : "Where I've Been"
        const description = future ? 
            "I am currently working toward teaching myself game development, starting with Unity." 
            : "I've been a web developer since 2018, with focus on the front end. My background is in math."

        return (
            <div className={ `about-container ${future ? 'about-container--future' : 'about-container--past'}`}>
                <div className={ future ? 'about__where-going' : '' } class='about__section'>
                    <h1>{ header }</h1>
                    <h3>{ description }</h3>
                </div>
            </div>
        );
    }
}

export default About;
