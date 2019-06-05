import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import socketIOClient from "socket.io-client";

function App(props) {
  const [data, setData] = useState('')
  const [endPoint, setEndPoint] = useState('http://localhost:4000');
  const socket = socketIOClient(endPoint);

  useEffect(() => { 
    socket.on('chat message', dataIn=>{setData(dataIn); console.log(dataIn)})
    
    console.log('use effect')
  },[]);


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {data}
        </p>
        
          Learn React{" "}
        
      </header>{" "}
      <input type='text' onKeyUp={(e)=>{
        socket.emit("chat message", e.target.value);
      }}/>
    </div>
  );

}

export default App;
