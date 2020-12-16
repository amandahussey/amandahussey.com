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
                    <h1 className='resume-section__title'>Software Development</h1>

                    <div className='resume-section'>
                        <div className='resume-section__header'>
                            <h1>Zayo Group</h1>
                            <h2>May 2020 - Sept 2020</h2>
                        </div>

                        <h3 className='resume-section__job-title'>Application Developer</h3>
                        <p className='resume-section__technologies-used'>
                            <span>[ React + Redux ] </span>
                            <span>[ AngularJS ] </span>
                            <span>[ NodeJS ]</span>
                        </p>
                        <div className='resume-section__description'>
                            <div className='resume-section__description__greatest-moment'>Greatest Contribution:</div>
                            <div className='resume-section__description__paragraph'>
                                <p>Worked closely with designer to develop strategies around delivering best UI/UX practices.</p>
                                <p>Onboarded junior hire. I truly enjoyed acting as a teacher/mentor!</p>
                            </div>
                        </div>
                    </div>

                    <div className='resume-section'>
                        <div className='resume-section__header'>
                            <h1>The Green Solution</h1>
                            <h2>Sept 2019 - May 2020</h2>
                        </div>

                        <h3 className='resume-section__job-title'>Front End Developer</h3>
                        <p className='resume-section__technologies-used'>
                            <span>[ React + Redux ] </span>
                            <span>[ jQuery + ES6 template literals ]</span>
                        </p>

                        <div className='resume-section__description'>
                            <div className='resume-section__description__greatest-moment'>Proudest Moment:</div>
                            <div className='resume-section__description__paragraph'>
                                <p>Led 10+ project scoping meetings, which received positive feedback through to executive level.</p>
                                <p>I enjoyed being a go-between of sorts, helping bridge the gap between techincal and non-technical.</p>
                            </div>
                        </div>
                    </div>

                    <div className='resume-section'>
                        <div className='resume-section__header'>
                            <h1>EVS LLC</h1>
                            <h2>July 2018 - April 2019</h2>
                        </div>

                        <h3 className='resume-section__job-title'>Junior Software Developer</h3>
                        <p className='resume-section__technologies-used'>
                            <span>[ AngularJS ] </span>
                            <span>[ SQL (SSMS) ]</span>
                        </p>

                        <div className='resume-section__description'>
                            <div className='resume-section__description__greatest-moment'>Greatest Accomplishment:</div>
                            <div className='resume-section__description__paragraph'>
                                <p>The Pack Station - A key feature of the web app. UI designed by me!</p>
                                <p>Executives loved it so much, that they made sure it was shown in all major sales demos. It was even planned to be used in an advertising campaign.</p>
                            </div>
                        </div>

                    </div>
                </div>
                </div>
                <div id='mathematics' className='resume-parent-container'>
                    <div className='resume-container'>
                        <h1 className='resume-section__title'>Mathematics</h1>
                        <div className='resume-section'>
                            <div className='resume-section__header'>
                                <h1 id='uic'>University of Illinois at Chicago</h1>
                            </div>
                            <div className='resume-section__description'>
                                <div className='resume-section__sub-title'>
                                    <h3 className='resume-section__education-title'>Bachelor of Science in Mathematics</h3>
                                    <h3>Aug 2010 - May 2014</h3>
                                </div>
                                <p>GPA: 3.8 | Magna Cum Laude</p>
                            </div>
                            <div className='resume-section__description'>
                                <div className='resume-section__sub-title'>
                                    <h3 className='resume-section__education-title'>Graduate Coursework</h3>
                                    <h3>Aug 2014 - Oct 2015</h3>
                                </div>
                                <p>MS Student in Pure Mathematics</p>
                            </div>
                            <div className='resume-section__description'>
                                <div className='resume-section__sub-title'>
                                    <h3 className='resume-section__education-title'>Teaching Assistant</h3>
                                    <h3>Aug 2014 - Oct 2015</h3>
                                </div>
                                <p>Awarded Honorable Mention for Outstanding Teaching</p>
                            </div>
                            <div className='resume-section__description'>
                                <div className='resume-section__sub-title'>
                                    <h3 className='resume-section__education-title'>Undergraduate Researcher</h3>
                                    <h3>Oct 2012 - April 2013</h3>
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
