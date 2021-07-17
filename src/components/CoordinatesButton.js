import React, { Component } from 'react';

// Code CoordinatesButton Component Here

export default class CoordinatesButton extends Component {

    logCoords = (event) => {
        let x = event.clientX;
        let y = event.clientY;
        let coords = [x, y];
        this.props.onReceiveCoordinates(coords)
    }

    render() {
        return(
            <button onClick={this.logCoords}></button>
        )
    }
}