import React, { Component } from 'react';

import './App.css';

class VoteUpDown extends Component {
    render() {
        return (
            <div>
                <button onClick={this.props.countUp}>Up</button>
                <button onClick={this.props.countDown}>Down</button>
            </div>
        );
    }
}


export default VoteUpDown;
