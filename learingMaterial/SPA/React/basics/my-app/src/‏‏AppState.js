import React from 'react';

import './App.css';

class ClickedTimes extends React.Component {
  render() {
    return <div>The Parent component was clicked {this.props.clicked} times</div>
  }
}

class Welcome extends React.Component {
  constructor(props) {
    super(props);
    this.state = { clicked: 0 }

  }
  render() {
    return <div
      className='clickables'
      onClick={() => this.setState({ clicked: this.state.clicked + 1 })}>
      Hello {this.props.name} {this.state.clicked}
      <ClickedTimes clicked={this.state.clicked} />

    </div>;
  }
}

function App() {
  return (
    <div>

      <Welcome name='Sara' />
      <Welcome name='SItizk' />
      <button id='testId' onClick={(e) => { console.dir(e.target.id) }}>OK</button>
    </div>
  )
}

export default App;
