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
        console.log("type", type)

        return (
            <div>
                {type === 'past' &&
                <div id='about--left-aligned' className='about-container'>
                    <div id='about-section--left-aligned' className='about-section'>
                        <h1>Where I've Been</h1>
                        <h3>Up to this point, my focus in software has been on web development.</h3>
                        <h3>Before software, there was math.</h3>
                    </div>
                </div>}

                {type === 'future' &&
                <div id='about--right-aligned' className='about-container'>
                    <div id='about-section--right-aligned' className='about-section'>
                        <h1>Beyond the Web</h1>
                        <h3>I'm currently dabbling in game and app development using Unity/C#.</h3>
                        <h3>One project includes a pixel cat. The other, Bluetooth.</h3>
                        <h3>Stay tuned for updates or get in touch!</h3>
                    </div>
                </div>}

            </div>
        );
    }
}

export default About;
