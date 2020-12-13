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

        let { scrollY, windowHeight } = this.state


        if (scrollY > (windowHeight)){
            this.handleFixNav()
        }

        window.addEventListener('scroll', () => {
            
            scrollY = window.scrollY;
            windowHeight = window.innerHeight;

            if (scrollY > windowHeight){
                this.handleFixNav('fix')
            }

            if(scrollY <= windowHeight){
                this.handleFixNav('unfix')
            }

            const percentage = scrollY / windowHeight
            if(percentage < 1) document.body.style.setProperty('--scroll', percentage)

        }, false);
    }

    handleFixNav = (fixOrUnfix) => {
        if(fixOrUnfix === 'fix') this.setState({ navIsFixed: true })
        else if(fixOrUnfix === 'unfix') this.setState({ navIsFixed: false })
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
