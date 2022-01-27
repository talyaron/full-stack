import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

import {send} from './controlers/helpers'



function App() {
  useEffect(() => {
    if ("serviceWorker" in navigator) {
      send().catch((err) => console.error(err));
    }
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://www.section.io/engineering-education/push-notification-in-nodejs-using-service-worker/#goal"
          target="_blank"
          rel="noopener noreferrer">
          Based on Mercy Meave's post
        </a>
      </header>
    </div>
  );
}

export default App;
