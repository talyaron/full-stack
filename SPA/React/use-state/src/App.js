import React from 'react';

import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Listen from './pages/Listen';
import DontListen from './pages/DontListen';

function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Listen</Link>
          </li>
          <li>
            <Link to="/dont">Dont Listen</Link>
          </li>
        </ul>

        <hr />

        <Switch>
          <Route exact path="/">
            <Listen />
          </Route>
          <Route path="/dont">
            <DontListen />
          </Route>

        </Switch>
      </div>
    </Router>
  );
}

export default App;
