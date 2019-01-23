import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Welcome extends React.Component {
  render() {
    return <p>Hello {this.props.name}</p>;
  }
}

function App() {
  return (
    <div>
      <img src={logo} alt='logo'/>
      <Welcome name='Sara' />
      <Welcome name='SItizk' />

    </div>
  )
}

export default App;
