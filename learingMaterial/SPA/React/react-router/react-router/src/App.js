import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

import './App.css';
import Page from './subPages/Page';


class App extends Component {
  render() {
    return (
      <Router>
        <div className='page'>
          <header>
            <div className='menuItem'>
              <Link to={`/`}>
                HOME
              </Link>
            </div>
            <div className='menuItem'>
              <Link to={`/pages/1`}>
                page 1
              </Link>
            </div>
            <div className='menuItem'>
              <Link to={`/pages/2`}>
                page 2
              </Link>
            </div>
            <div className='menuItem'>
              <Link to={`/pages/3`}>
                page 3
              </Link>
            </div>
          </header>
          <div className='wrapper'>
            <h1>Hello</h1>
            <Route exact={true} path='/' component={Home} />
            <Route path='/pages/:id' component={Page} />
          </div>
        </div>
      </Router >
    );
  }
}



const Home = () => {
  
  return (
    <div>
      <h1>Home Page Welcome</h1>
    </div>
  )
}

export default App;
