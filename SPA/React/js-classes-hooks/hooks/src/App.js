import React  from 'react';

import './App.css';

//components
import Login from './view/Login';
import Feed from './view/Feed';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Login</Link>
            </li>
            <li>
              <Link to="/feed">Feed</Link>
            </li>
            
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/">
            <Login />
          </Route>
          <Route path="/feed">
            <Feed />
          </Route>
         
        </Switch>
      </div>
    </Router>
  );
}





export default App;
