import React, { Component } from 'react'
import './Window.scss'

class Window extends Component {
    constructor(){
        super()
        this.state = {

        }
    }

    render(){
        return (
            <div>
                
                <div className="landscape-container">
                    <div className="landscape"></div>
                    {/* <div className="frame-container">
                        <div className="frame frame--top"></div>
                        <div className="frame frame--left"></div>
                        <div className="frame frame--right"></div>
                        <div className="frame frame--bottom"></div>
                    </div> */}
                    {/* <div className="black-space"></div> */}
                </div> 
               
            </div>
            
        )
    }
}

export default Window