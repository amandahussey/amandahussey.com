import React, { Component } from 'react'
import './About.scss'


class About extends Component {
    constructor(){
        super()
        this.state = {

        }
    }



    render (){

        const { type } = this.props

        const eyesEmoji = `\u1F440`;

        return (
            <div>
                {type === 'past' &&
                <div id='about--left-aligned' className='about-container'>
                    <div id='about-section--left-aligned' className='about-section'>
                        <h1>Where I've Been</h1>
                        <h3>Web development has been my focus up to this point.</h3>
                        <h3>Before software, there was math.</h3>
                    </div>
                </div>}

                {type === 'future' &&
                <div id='about--right-aligned' className='about-container'>
                    <div id='about-section--right-aligned' className='about-section'>
                        <h1>Where I'm Going</h1>
                        <h3>I plan to keep experimenting with different animations.</h3>
                        <h3 className='coming-soon'><i>Coming soon: V2 of the site.</i> 👀</h3>
                        <h3>Until then, feel free to <a href='mailto: amanda.k.hussey@gmail.com'>get in touch!</a></h3>
                    </div>
                </div>}

            </div>
        );
    }
}

export default About;
