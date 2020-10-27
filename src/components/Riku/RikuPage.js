import React, { Component } from 'react'
import './RikuPage.scss'

class RikuPage extends Component {
    constructor(){
        super()
        this.state = {

        }
    }

    render(){
        return (
            <div id='riku-container'>
                
                <div id='this-is-riku'>
                    <div id='this-is-riku--riku'>Riku.</div>
                </div>
                
                <div id='chris-credit'>
                    Photo by the one-and-only <a href='https://www.chrisrasmussenfilms.com' target='_blank' rel='noopener noreferrer'>Chris Rasmussen</a>
                </div>
               
            </div>
            
        )
    }
}

export default RikuPage