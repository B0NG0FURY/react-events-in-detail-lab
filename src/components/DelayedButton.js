import React, { Component } from 'react';

// Code DelayedButton Component Here


export default class DelayedButton extends Component {

    delayedEvent = (event) => {
        event.persist();
        setTimeout(() => this.props.onDelayedClick(event), this.props.delay);
    }

    render() {
        return (
            <button onClick={this.delayedEvent}></button>
        )
    }
}