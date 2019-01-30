import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

import './App.css';
import Page1 from './subPages/Page1';
import Page2 from './subPages/Page2';
import Page3 from './subPages/Page3';

class App extends Component {
  render() {
    return (
      <Router>
        <div className='page'>
          <header>
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
            <Route path='/pages/:id' component={Page} />
          </div>
        </div>
      </Router >
    );
  }
}

const Page = ({ match }) => {
  console.dir(match)
  return (
    <div>
      {match.params.id}
    </div>
  )
}

export default App;
