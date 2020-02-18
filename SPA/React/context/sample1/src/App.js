import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import A from './A';
import B from './B';



export const shekerContext = React.createContext(
  {
    num: 6,
    name: 'roey'
  })

const x = {
  num: 6,
  name: 'roey'
}
function App() {
  

  return (
    <shekerContext.Provider value={x}>
      <Router>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />

            <div className="App" >
              <Route path='/a' component={A}/>
              <Route path='/b' component={B}/>
            </div>
          </header>
          <p><Link to={'/a'}>aaaaaaaaaaaaaaaaaa</Link></p>
          <p><Link to={'/b'}>bbbbbbbbbbbb</Link></p>
        </div>
      </Router>     
    </shekerContext.Provider>
  );
}

export { App} ;
