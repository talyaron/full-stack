import React, { Component } from 'react';
import Todos from './view/components/Todos';


class App extends Component {
  state = {
    todos: [
      { id: 1, todo: 'buy milk' },
      { id: 2, todo: 'buy bread' }
    ]
  }
  render() {
    return (
      <div className="App">
        <Todos />
      </div>
    );
  }
}

export default App;
