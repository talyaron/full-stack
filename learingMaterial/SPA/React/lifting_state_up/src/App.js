import React, { Component } from 'react';
import './App.css';
import VoteUpDown from './VoteUpDown';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { voteCouter: 0 };
  }

  countUp = () => {
    this.setState({ voteCouter: this.state.voteCouter + 1 });
  }

  countDown = () => {
    this.setState({
      voteCouter: this.state.voteCouter - 1
    });
  }

  render() {
    return (
      <div className="App">
        <h1>{this.state.voteCouter}</h1>
        <VoteUpDown voteCouter={this.state.voteCouter} countUp={this.countUp} countDown={this.countDown} />
      </div>
    );
  }
}

export default App;
