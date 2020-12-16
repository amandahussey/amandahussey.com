import React, { Component } from 'react'
import './D3Play.scss'
import D3Line from './D3Line'

class D3Play extends Component {

    // static propTypes = {...}

    componentDidMount() {
        // D3 Code to create the chart
        this._chart = D3Line.create(
            this._rootNode,
            this.props.data,
            this.props.config
        );
    }

    componentDidUpdate() {
        // D3 Code to update the chart
        D3Line.update(
           this._rootNode,
           this.props.data,
           this.props.config,
           this._chart
        );
    }

    componentWillUnmount() {
        D3Line.destroy(this._rootNode);
    }

    _setRef(componentNode) {
        this._rootNode = componentNode;
    }

    render() {
        return (
            <div className="line-container" ref={this._setRef.bind(this)} />
        )
    }
}

export default D3Play;
