import React, { Component } from 'react'
import './Landing.scss'

class Landing extends Component {
    constructor(){
        super()
        this.state = {
        
        }
    }

    componentDidMount(){
        document.body.style.setProperty('--innerHeight', window.innerHeight);
        window.addEventListener('scroll', () => {
            
            let topScroll = window.scrollY;
            let bottomScroll = window.scrollY + window.innerHeight;
            let windowHeight = window.innerHeight;
            let bottomScrollMod = bottomScroll % windowHeight;
            let bottomScrollModPercentage = bottomScrollMod / windowHeight;
            let bottomScrollModPercentageAlt = (bottomScrollMod) / (windowHeight/2);
            const documentHeight = document.body.offsetHeight

            document.body.style.setProperty('--scroll', bottomScrollModPercentage);

            // console.log('topScroll', topScroll)
            console.log('bottomScroll', bottomScroll)
            console.log('windowHeight', windowHeight)
            // console.log('bottomScrollMod', bottomScrollMod)
            // console.log('documentHeight', documentHeight)

            const beginAnimation1 = windowHeight + (.37 * windowHeight) //  1467
            const endAnimation1 = (2 * windowHeight) + (.66 * windowHeight)   // 2867
            // const beginAnimation1 = 1467
            // const endAnimation1 = 2867
            const percent1 = (bottomScroll - beginAnimation1) / (endAnimation1 - beginAnimation1);
            document.body.style.setProperty('--scroll-1', percent1);

            const beginAnimation2 = (4 * windowHeight) + (.95 * windowHeight) // 5275
            const endAnimation2 = documentHeight // 6075
            // const beginAnimation2 = 5275
            // const endAnimation2 = 6075
            const percent2 = (bottomScroll - beginAnimation2) / (endAnimation2 - beginAnimation2);
            document.body.style.setProperty('--scroll-2', percent2);
            

        }, false);
    }

    render (){
   
        return (
            <div>
                <div id='landing-container'>
                    <h1>Amanda Hussey</h1>
                    <h2>Software Developer</h2>
                </div>
            </div>
            
        );
    }
}

export default Landing;
