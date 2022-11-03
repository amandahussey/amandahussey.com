import React, { Component } from 'react'
import ResumeSection from './ResumeSection';

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

                    <ResumeSection 
                        title='Software Engineer II'
                        company='Digital Health - AI Startup'
                        paragraphs={[
                            'At present,',
                            'I am so grateful —and truly excited—',
                            'to be venturing into new territory',
                            'with a team of people that I know and trust.'
                        ]}
                    />

                    <ResumeSection 
                        title='Software Engineer II'
                        company='Olive AI'
                        paragraphs={[
                            'Surrounded by an incredible team,',
                            'I was proud to be promoted after 6 months at Olive.'
                        ]}
                    />

                    <ResumeSection 
                        title='Front-End Software Engineer'
                        company='Olive AI'
                        paragraphs={[
                            'I had such fun on the Apertures team,',
                            'working on fun, detailed animation work',
                            'with people who I now call friends.', 
                        ]}
                    />      

                    <div className='resume-section'>
                        <div className='resume-section__header'>
                            <h1><span>Application Developer</span> <span>@ Zayo Group</span></h1>
                        </div>

                        <div className='resume-section__description'>
                            <div className='resume-section__description__greatest-moment'>Greatest Contribution:</div>
                            <div className='resume-section__description__paragraph'>
                                <p>Worked closely with senior designer to develop strategies around delivering best UI/UX practices.</p>
                                <p>Helped onboard junior hire. I truly enjoyed acting as a teacher/mentor!</p>
                            </div>
                        </div>

                    </div>


                    <div className='resume-section'>
                        <div className='resume-section__header'>
                            <h1><span>Front End Developer</span> <span>@ The Green Solution</span></h1>
                        </div>

                        <div className='resume-section__description'>
                            <div className='resume-section__description__greatest-moment'>Proudest Moment:</div>
                            <div className='resume-section__description__paragraph'>
                                <p>Led 10+ cross-departmental project scoping meetings after introducing an agile, user-centric approach; received positive feedback through to executive level.</p>
                                <p>Ask me about it.</p>
                            </div>
                        </div>

                    </div>

                    <div className='resume-section'>
                        <div className='resume-section__header'>
                            <h1><span>Jr. Software Developer</span> <span>@ EVS</span></h1>
                        </div>
                        <div className='resume-section__description'>
                             <div className='resume-section__description__greatest-moment'>Greatest Accomplishment:</div>
                             <div className='resume-section__description__paragraph'>
                                 <p>The Pack Station - A key feature of the web app. UI designed by me!</p>
                                 <p>Executives loved it so much, they made sure it was shown in all major sales demos. It was even planned to be used in an advertising campaign.</p>
                             </div>
                         </div>
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
                                <p>GPA: 3.8 | Minor in Spanish</p>
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
                                <p>Ask me about the behavior of a given quadratic irrational's simple continued fraction expansion when multiplied by two.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        );
    }
}

export default Resume;
