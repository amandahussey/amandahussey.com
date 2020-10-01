import React, { Component } from 'react'
import purpleCarpetSvgLink from './purple-carpet.svg'

class WallpaperWall extends Component {
    constructor(){
        super()
        this.state = {

        }
    }

    render() {
        const { wall, paint, wainscoting, flooring } = styles
        return (
            <div>   
                <div style={wall}>
                    <div style={paint}></div>
                    <div style={wainscoting}></div>
                </div>
                <div style={flooring}></div>
            </div>
        )
    }
}

export default WallpaperWall

const styles = {
    
    wall: {
        width: '100vw',
        height: '70vh'
    },
    paint: {
        background: '#1a276b',
        height: '90%'
    },
    wainscoting: {
        background: 'antiquewhite',
        height: '10%'
    }, 
    flooring: {
        background: '#691e75',
        backgroundImage: `url(${purpleCarpetSvgLink})`,
        height: '30vh',
    },
}
