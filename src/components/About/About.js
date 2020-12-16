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

        return (
            <div>
                {type === 'past' &&
                <div id='about--left-aligned' className='about-container'>
                    <div id='about-section--left-aligned' className='about-section'>
                        <h1>Where I've Been</h1>
                        <h3>Web development has been my focus in software up to this point.</h3>
                        <h3>Before software, there was math.</h3>
                    </div>
                </div>}

                {type === 'future' &&
                <div id='about--right-aligned' className='about-container'>
                    <div id='about-section--right-aligned' className='about-section'>
                        <h1>Where I'm Going</h1>
                        <h3>I'm currently dabbling in Unity/C#.</h3>
                        <h3>One project includes a pixel cat. The other, Bluetooth.</h3>
                        <h3>Stay tuned for updates or <a href='mailto: amanda.k.hussey@gmail.com'>get in touch!</a></h3>
                    </div>
                </div>}

            </div>
        );
    }
}

export default About;
