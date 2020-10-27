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

    render (){
   
        return (
            <div>
                <Landing />
                <About past={true}/>
                <Resume />
                <About />
            </div>
            
        );
    }
}

export default Home;
