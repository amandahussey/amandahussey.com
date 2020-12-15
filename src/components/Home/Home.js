import React, { Component } from 'react'
import './Home.scss'

import Landing from '../Landing/Landing'
import Nav from '../Nav/Nav'
import About from '../About/About'
import Resume from '../Resume/Resume'

class Home extends Component {
    constructor(){
        super()
        this.state = {
            navIsFixed: false,
            scrollY: window.scrollY,
            windowWidth: window.innerWidth,
            windowHeight: window.innerHeight,
        }
    }

    componentDidMount(){

        // on scroll, capture scrollY (and any resizing of window)
        // then handle name animation based on captured scrollY
        window.addEventListener('scroll', () => {
            this.setState({
                scrollY: window.scrollY,
                windowHeight: window.innerHeight
            }, () => this.handleNameAnim())
        }, false);
    }

    handleNameAnim = () => {

        const { scrollY, windowHeight } = this.state

        // set --scroll property to be percentage scrolled down
        const percentage = scrollY / windowHeight
        if(percentage < 1) document.body.style.setProperty('--scroll', percentage) // setting to document.body.style to be accessible in css animation
        if(percentage >= 1) document.body.style.setProperty('--scroll', .99) // ensure doesn't pop to 100%

        // navIsFixed once animation has reached 100%
        if(percentage >= 1) {
          this.setState({ navIsFixed: true })
        }
        else {
          this.setState({ navIsFixed: false })
        }
    }

    render (){

        const { navIsFixed } = this.state

        return (
            <div>
                <Landing navIsFixed={navIsFixed} />
                <Nav />
                <About past={true}/>
                <Resume />
                <About />
            </div>

        );
    }
}

export default Home;
