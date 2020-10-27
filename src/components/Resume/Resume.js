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

                        <h3>Application Developer</h3>
                        <p className='resume-section__technologies-used'>
                            <span>[ React + Redux ] </span>
                            <span>[ AngularJS ] </span>
                            <span>[ NodeJS ]</span>
                        </p>
                        <div className='resume-section__description'> 
                            <div className='resume-section__description__greatest-moment'>Greatest Contribution:</div>
                            <div className='resume-section__description__paragraph'>   
                                <p>Worked closely with designer to develop strategies to deliver best practices for UI/UX.</p>
                            </div>
                            
                            <p className='resume-section__description__takeaway'>I value UI/UX.</p>
                        </div>
                    </div>

                    <div className='resume-section'>
                        <div className='resume-section__header'>
                            <h1>The Green Solution</h1>
                            <h2>Sept 2019 - May 2020</h2>
                        </div>

                        <h3>Front End Developer</h3>
                        <p className='resume-section__technologies-used'>
                            <span>[ React + Redux ] </span>
                            <span>[ jQuery + ES6 template literals ]</span>
                        </p>

                        <div className='resume-section__description'>
                            <div className='resume-section__description__greatest-moment'>Proudest Moment:</div>
                            <div className='resume-section__description__paragraph'>   
                                <p>Led 10+ project scoping meetings in Q4 2019, which received positive feedback all around!</p> 
                                <p>I enjoy being the middle man of sorts, between tech and non-tech people.</p> 
                            </div>
                            <p className='resume-section__description__takeaway'>I make a decent middle man.</p>
                        </div>
                    </div>

                    <div className='resume-section'>
                        <div className='resume-section__header'>
                            <h1>EVS LLC</h1>
                            <h2>July 2018 - April 2019</h2>
                        </div>

                        <h3>Junior Software Developer</h3>
                        <p className='resume-section__technologies-used'>
                            <span>[ AngularJS ] </span>
                            <span>[ SQL (SSMS) ]</span>
                        </p>
                        

                        <div className='resume-section__description'>
                            <div className='resume-section__description__greatest-moment'>Greatest Accomplishment:</div>
                            <div className='resume-section__description__paragraph'>   
                                <p>The Pack Station!</p>
                                <p>A key feature of the web application developed using AngularJS, original CSS, and existing business logic.
                                Final UI designed by me, as an alternative to the mockup provided. 
                                Feature used heavily in sales demos and planned to be used in an advertising campaign. 
                                I wish I had screenshots to share!</p>
                            </div>

                            <p className='resume-section__description__takeaway'>I offer alternative solutions.</p>

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
                                    <h3>Graduate Coursework</h3>
                                    <h3>Aug 2014 - Oct 2015</h3>
                                </div>
                                <p>MS Student in Pure Mathematics</p>
                            </div>
                            <div className='resume-section__description'>
                                <div className='resume-section__sub-title'>
                                    <h3>Math Teaching Assistant</h3>
                                    <h3>Aug 2014 - Oct 2015</h3>
                                </div>
                                <p>Awarded Honorable Mention for Outstanding Teaching</p>
                            </div>
                            <div className='resume-section__description'>
                                <div className='resume-section__sub-title'>
                                    <h3>B.S. in Mathematics</h3>
                                    <h3>Aug 2010 - May 2014</h3>
                                </div>
                                <p>Magna Cum Laude</p>
                                <p>GPA: 3.8</p>
                            </div>
                            <div className='resume-section__description'>
                                <div className='resume-section__sub-title'>
                                    <h3>Undergraduate Researcher</h3>
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
