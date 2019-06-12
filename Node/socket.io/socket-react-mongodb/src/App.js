import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import socketIOClient from "socket.io-client";
import { Link, animateScroll as scroll } from "react-scroll";

const socket = socketIOClient('http://localhost:4000');
let tempSocketMessages = [];
let counter = 0;

function App(props) {
  const [newMsgs, setNewMsgs] = useState(0)
  const [messages, setMessages] = useState([]);
  const containerRef = useRef(null);


  useEffect(() => {
    socket.on('chat message', newMessage => {


      // tempSocketMessages.push(newMsgs)
      tempSocketMessages.push(newMessage)

      setNewMsgs(counter + 1);
      counter++;

    })

    fetch("http://localhost:4000/messages")
      .then(response => {
        return response.json();
      })
      .then(data => {
        let newOrder = data.messages.reverse();
        setMessages(data.messages);
      });

    console.log('use effect init')
  }, []);

  useEffect(() => {
    
    scroll.scrollToBottom()

  })


  return (
    <div className="App" ref={containerRef}>

      <div className='messages'>
        {
          messages.map((message, index) => {

            return <p key={index}>{message.message}</p>
          })
        }
        {
          tempSocketMessages.map((message, index) => {

            return <p key={index + 'socket'}>{message.message}</p>
          })
        }
      </div>

      <input type='text' className='inputText' autofocus='true' onKeyUp={(e) => {
        if (e.key === 'Enter') {
          socket.emit("chat message", e.target.value);
          e.target.value = '';
        }
      }} />
     
    </div>

  );

}

export default App;

