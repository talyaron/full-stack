import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

//pages
import Users from './pages/users';
import Home from './pages/home';
import About from './pages/about';

//context
import { UserContext } from './user'

export default function App() {

  const [isTrue, setIsTrue] = useState(true)

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <UserContext.Provider value={{isTrue, setIsTrue}}>
          <Switch>

            <Route path="/about">
              <About />
            </Route>
            <Route path="/users">
              <Users />
            </Route>
            <Route path="/">
              <Home />
            </Route>

          </Switch>
        </UserContext.Provider>
      </div>
    </Router>
  );
}




