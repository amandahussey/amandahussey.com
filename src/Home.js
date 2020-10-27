import React, { Component } from 'react'
import './Home.scss'

import Landing from './Landing'
import Nav from './Nav'
import About from './About'
import Resume from './Resume'
import { isCompositeComponent } from 'react-dom/test-utils'

class Home extends Component {
    constructor(){
        super()
        this.state = {
            navIsFixed: false
        }
    }

    componentDidMount(){

        const windowHeight = window.innerHeight
        const documentHeight = document.body.offsetHeight

        window.addEventListener('scroll', () => {
            
            let topScroll = window.scrollY;
            let bottomScroll = window.scrollY + window.innerHeight;
            let windowHeight = window.innerHeight;

            if (topScroll > (2 * windowHeight)){
                console.log('nav now fixed')
                this.handleFixNav()
            }

            const percentage = topScroll / (2 * windowHeight)
            console.log('percentage', percentage)
            if(percentage < 1) document.body.style.setProperty('--scroll', percentage)

            console.log('topScroll', topScroll)
            console.log('bottomScroll', bottomScroll)
            console.log('windowHeight', windowHeight)



            // console.log('bottomScrollMod', bottomScrollMod)
            // console.log('documentHeight', documentHeight)

            // const beginAnimation1 = windowHeight + (.37 * windowHeight) //  1467
            // const endAnimation1 = (2 * windowHeight) + (.66 * windowHeight)   // 2867
            const beginAnimation1 = 1467
            const endAnimation1 = 2867
            const percent1 = (bottomScroll - beginAnimation1) / (endAnimation1 - beginAnimation1);
            document.body.style.setProperty('--scroll-1', percent1);

            // const beginAnimation2 = (4 * windowHeight) + (.95 * windowHeight) // 5275
            // const endAnimation2 = documentHeight // 6075
            const beginAnimation2 = 5275
            const endAnimation2 = 6075
            const percent2 = (bottomScroll - beginAnimation2) / (endAnimation2 - beginAnimation2);
            document.body.style.setProperty('--scroll-2', percent2);

            
            

        }, false);
    }

    handleFixNav = () => {
        this.setState({
            navIsFixed: true
        })
    }

    render (){

        const { navIsFixed } = this.state
   
        return (
            <div>
                <Landing fixed={navIsFixed} />
                <Nav fixed={navIsFixed} />
                <About past={true}/>
                <Resume />
                <About />
            </div>
            
        );
    }
}

export default Home;
