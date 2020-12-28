import React, { Component } from 'react'
import './Resume.scss'

class Resume extends Component {
    constructor(){
        super()
        this.state = {

        }
    }



  render (){

        return (
            <div>
                <div id='software-development' className='resume-parent-container'>
                <div className='resume-container'>
                    <h1 className='resume-section__title'>Web Development</h1>

                    <div className='resume-section'>
                        <div className='resume-section__header'>
                            <h1>Zayo Group</h1>
                        </div>

                        <h3 className='resume-section__job-title'>Application Developer</h3>
                        <p className='resume-section__technologies-used'>
                            <span>[ React + Redux ] </span>
                            <span>[ AngularJS ] </span>
                            <span>[ NodeJS ]</span>
                        </p>

                    </div>

                    <div className='resume-section'>
                        <div className='resume-section__header'>
                            <h1>The Green Solution</h1>
                        </div>

                        <h3 className='resume-section__job-title'>Front End Developer</h3>
                        <p className='resume-section__technologies-used'>
                            <span>[ React + Redux ] </span>
                            <span>[ jQuery + ES6 template literals ]</span>
                        </p>


                    </div>

                    <div className='resume-section'>
                        <div className='resume-section__header'>
                            <h1>EVS LLC</h1>
                        </div>

                        <h3 className='resume-section__job-title'>Junior Software Developer</h3>
                        <p className='resume-section__technologies-used'>
                            <span>[ AngularJS ] </span>
                            <span>[ SQL (SSMS) ]</span>
                        </p>


                    </div>
                </div>
                </div>
                <div id='mathematics' className='resume-parent-container'>
                    <div className='resume-container'>
                        <h1 className='resume-section__title' style={{ marginBottom: 24 }}>Math</h1>
                        <div className='resume-section'>
                            <div className='resume-section__header'>
                                <h1 id='uic'>University of Illinois at Chicago</h1>
                            </div>
                            <div className='resume-section__description'>
                                <div className='resume-section__sub-title'>
                                    <h3 className='resume-section__education-title'>Bachelor of Science in Mathematics</h3>
                                </div>
                                <p>GPA: 3.8 | Magna Cum Laude</p>
                            </div>
                            <div className='resume-section__description'>
                                <div className='resume-section__sub-title'>
                                    <h3 className='resume-section__education-title'>Graduate Coursework</h3>
                                </div>
                                <p>MS Student in Pure Mathematics</p>
                            </div>
                            <div className='resume-section__description'>
                                <div className='resume-section__sub-title'>
                                    <h3 className='resume-section__education-title'>Teaching Assistant</h3>
                                </div>
                                <p>Awarded Honorable Mention for Outstanding Teaching</p>
                            </div>
                            <div className='resume-section__description'>
                                <div className='resume-section__sub-title'>
                                    <h3 className='resume-section__education-title'>Undergraduate Researcher</h3>
                                </div>
                                <p>Ask me about the behavior of a given quadratic irrational's continued fraction expansion when multiplied by two.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        );
    }
}

export default Resume;
