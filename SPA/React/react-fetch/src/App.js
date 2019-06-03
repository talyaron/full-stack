import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

function App(props) {
  const [user, setUser] = useState({ name: '', last: '' })

  useEffect(() => {
    fetch("http://localhost:4000/fetch")
      .then(response => {
        return response.json();
      })
      .then(data => {
        console.dir(data);
        setUser(data);
      });
  },[]);


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello {user.name} {user.last}{" "}
        </p>{" "}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React{" "}
        </a>{" "}
      </header>{" "}
    </div>
  );

}

export default App;
