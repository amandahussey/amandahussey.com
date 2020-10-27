import React, { Component } from 'react'
import './Home.scss'

import Landing from './Landing'
import About from './About'
import Resume from './Resume'

class Home extends Component {
    constructor(){
        super()
        this.state = {
        
        }
    }

    componentDidMount(){
        window.addEventListener('scroll', () => {
            document.body.style.setProperty('--scroll', window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
        }, false);
    }

    render (){
   
        return (
            <div>
                <Landing />
                <About />
                <Resume />
                <About future={true} />
            </div>
            
        );
    }
}

export default Home;
