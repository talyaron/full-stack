import React, { useState, useEffect } from "react";
import "./App.css";
import socketIOClient from "socket.io-client";

const socket = socketIOClient('http://localhost:4000');
let tempSocketMessages = [];
let counter = 0;

function App(props) {
  const [newMsgs, setNewMsgs] = useState(0)
  const [messages, setMessages] = useState([]);


  useEffect(() => {
    socket.on('chat message', newMessage => {
    

      // tempSocketMessages.push(newMsgs)
      tempSocketMessages.push(newMessage)
      
      setNewMsgs(counter + 1);
      counter++;
      console.log(newMsgs)
    })

    fetch("http://localhost:4000/messages")
      .then(response => {
        return response.json();
      })
      .then(data => {
        console.dir(data.messages);
        setMessages(data.messages);
      });

    console.log('use effect init')
  }, []);

  


  return (
    <div className="App">

      <div className='messages' id='messagesDiv'>
        {
          messages.map((message, index) => {

            return <p key={index}>{message.message}</p>
          })
        }
        {
          tempSocketMessages.map((message, index) => {

            return <p key={index+'socket'}>{message.message}</p>
          })
        }
      </div>

      <input type='text' className='inputText' onKeyUp={(e) => {
        if (e.key === 'Enter') {
          socket.emit("chat message", e.target.value);
          e.target.value = '';
        }
      }} />
    </div>

  );

}

export default App;

