import React, { Component } from 'react'
import './Home.scss'

import Landing from './Landing'
import About from './About'
import Resume from './Resume'
import { isCompositeComponent } from 'react-dom/test-utils'

class Home extends Component {
    constructor(){
        super()
        this.state = {
        
        }
    }

    componentDidMount(){

        const windowHeight = window.innerHeight
        const documentHeight = document.body.offsetHeight

        // const aboutElmt1 = document.getElementById('about-section--past')
        // console.log('aboutElmt1', aboutElmt1)
        // const rect1 = aboutElmt1.getBoundingClientRect()
        // console.log('rect1',rect1)
        // const top1 = rect1.top
        // const bottom1 = rect1.bottom
        // const height1 = rect1.height
        // const beginAnimation1 = top1 - height1
        // console.log('beginAnimation1', beginAnimation1)
        // const endAnimation1 = bottom1 + windowHeight
        // console.log('endAnimation1', endAnimation1)

        // const aboutElmt2 = document.getElementById('about-section--future')
        // console.log('aboutElmt2', aboutElmt2)
        // const rect2 = aboutElmt2.getBoundingClientRect()
        // console.log('rect2',rect2)
        // const height2 = rect2.height
        // const top2 = rect2.top
        // const bottom2 = rect2.bottom
        // const beginAnimation2 = top2 - height2
        // console.log('beginAnimation2', beginAnimation2)
        // const endAnimation2 = documentHeight
        // console.log('endAnimation2', endAnimation2)

        window.addEventListener('scroll', () => {
            
            let topScroll = window.scrollY;
            let bottomScroll = window.scrollY + window.innerHeight;
            let windowHeight = window.innerHeight;

            const percentage = topScroll / (2 * windowHeight)
            console.log('percentage', percentage)
            document.body.style.setProperty('--scroll', percentage)

            // console.log('topScroll', topScroll)
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

    render (){
   
        return (
            <div>
                <Landing />
                {/* <About past={true}/>
                <Resume />
                <About /> */}
            </div>
            
        );
    }
}

export default Home;
