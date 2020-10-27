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
            navIsFixed: false,
            topScroll: window.scrollY,
            bottomScroll: window.scrollY + window.innerHeight,
            windowWidth: window.innerWidth,
            windowHeight: window.innerHeight,
            documentHeight: document.body.offsetHeight,
        }
    }

    componentDidMount(){

        let { topScroll, bottomScroll, windowHeight, documentHeight } = this.state


        if (topScroll > (2 * windowHeight)){
            this.handleFixNav()
        }

        window.addEventListener('scroll', () => {
            
            topScroll = window.scrollY;
            bottomScroll = window.scrollY + window.innerHeight;
            windowHeight = window.innerHeight;

            if (topScroll > (2 * windowHeight)){
                this.handleFixNav('fix')
            }

            if(topScroll <= (2 * windowHeight)){
                this.handleFixNav('unfix')
            }

            const percentage = topScroll / (2 * windowHeight)
            console.log('percentage', percentage)
            if(percentage < 1) document.body.style.setProperty('--scroll', percentage)

            // console.log('topScroll', topScroll)
            // console.log('bottomScroll', bottomScroll)
            // console.log('windowHeight', windowHeight)
            // console.log('bottomScrollMod', bottomScrollMod)
            // console.log('documentHeight', documentHeight)

            // const beginAnimation1 = windowHeight + (.37 * windowHeight) //  1467
            // const endAnimation1 = (2 * windowHeight) + (.66 * windowHeight)   // 2867
            // const beginAnimation1 = 2667
            // const endAnimation1 = 4067
            // const percent1 = (bottomScroll - beginAnimation1) / (endAnimation1 - beginAnimation1);
            // document.body.style.setProperty('--scroll-1', percent1);

            // const beginAnimation2 = (4 * windowHeight) + (.95 * windowHeight) // 5275
            // const endAnimation2 = documentHeight // 6075
            // const beginAnimation2 = 6667
            // const endAnimation2 = 6075
            // const percent2 = (bottomScroll - beginAnimation2) / (endAnimation2 - beginAnimation2);
            // document.body.style.setProperty('--scroll-2', percent2);

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
