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

        const { scrollY, windowHeight } = this.state

        if (scrollY > (windowHeight)){
            this.handleFixNav()
        }

        window.addEventListener('scroll', () => {

            this.setState({ 
                scrollY: window.scrollY,
                windowHeight: window.innerHeight
            }, () => this.handleNav())


        }, false);
    }

    handleNav = () => {

        // determine if navIsFixed or not based on scrollY compared to windowHeight
        const { scrollY, windowHeight } = this.state
        if(scrollY > windowHeight) this.setState({ navIsFixed: true })
        else if(scrollY <= windowHeight) this.setState({ navIsFixed: false })
        
        // set --scroll property to be percentage scrolled down
        const percentage = scrollY / windowHeight
        if(percentage < 1) document.body.style.setProperty('--scroll', percentage)
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
