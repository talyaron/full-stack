import React, { useEffect } from "react";
import axios from 'axios';
import logo from "./logo.svg";
import "./App.css";

import { getMessaging, onMessage } from "firebase/messaging";

import {send} from './controlers/helpers';
import {registerToMessages} from './controlers/firebase/config';

registerToMessages();

const messaging = getMessaging();
onMessage(messaging, (payload) => {
  console.log('Message received. ', payload);
  // ...
});

function App() {
  
  async function handleSendPush(){
    const response = await axios.post('/push',{});
    console.log(response)
  }

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
        <button onClick={handleSendPush}>Send</button>
      </header>
     
    </div>
  );
}

export default App;
