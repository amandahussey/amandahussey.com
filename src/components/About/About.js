import React, { Component } from 'react'
import './About.scss'


function About ({ mini, type }) {
    
    return (
        <div>
            {type === 'past' &&
            <div className={`about-container about--left-aligned ${mini ? 'mini' : ''}`}>
                <div className={'about-section about-section--left-aligned'}>
                    <h1>Where I've Been</h1>
                    <h3>Web development has been my focus up to this point.</h3>
                    <h3>Before software, there was math.</h3>
                </div>
            </div>}

            {type === 'future' &&
            <div className={`about-container about--right-aligned ${mini ? 'mini' : ''}`}>
                <div className={'about-section about-section--right-aligned'}>
                    <h1>Where I'm Going</h1>
                    <h3>I am currently working on a mini version of the site.</h3>
                    <h3>Check out the WIP: <i><a href='/home-desk'>virtual home office experience</a></i></h3>
                    <h3>Curious? Feel free to <a href='mailto: amanda.k.hussey@gmail.com'>get in touch!</a></h3>
                </div>
            </div>}

        </div>
    );
}

export default About;
