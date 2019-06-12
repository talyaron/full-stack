import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import socketIOClient from "socket.io-client";

function App(props) {
  const [data, setData] = useState('')
  const [messages, setMessages] = useState([]);
  const [endPoint, setEndPoint] = useState('http://localhost:4000');
  const socket = socketIOClient(endPoint);

  useEffect(() => { 
    socket.on('chat message', dataIn => { setData(dataIn); console.log(dataIn) })
    
    fetch("http://localhost:4000/messages")
      .then(response => {
        return response.json();
      })
      .then(data => {
        console.dir(data.messages);
        setMessages(data.messages);
      });
    
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
      }} />
      {
        messages.map((message, index) => {
          return <p key={index}>{message.message}</p>
        })
      }
    </div>
  );

}

export default App;
