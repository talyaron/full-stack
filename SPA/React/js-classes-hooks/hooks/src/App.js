import React, { useState, useEffect } from 'react';

import './App.css';

//components
import Login from './view/Login';
import Feed from './view/Feed';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";

import { listenToLogin, logout } from './functions/firebase';

function App() {



  const [isLogged, setIslogged] = useState(false);


  useEffect(() => {
    listenToLogin(setIslogged)
  }, [])

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
          <button onClick={logout}>Logout</button>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact={true} path="/">
            {isLogged ? (
              <Redirect to="/feed" />
            ) : (
                <Login />
              )
            }

          </Route>
          <Route path="/feed">
            {isLogged ? (
              <Feed />
            ) : (
                <Redirect to="/" />
              )
            }

          </Route>

        </Switch>
      </div>
    </Router>
  );
}





export default App;
