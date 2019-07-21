import React from 'react';
import './App.css';
import BackgroundAnimation from './BackgroundAnimation';
import SignUpBox from './SignUpBox';
import NavButtonMenu from './NavButtonMenu';
import { BrowserRouter as Router, Route } from "react-router-dom";
import LinkWindow from './LinkWindow';
import ChatBox from './ChatBox';







export default function App() {
  return (
    <Router>
      <div>
        <BackgroundAnimation />
        <Route exact path="/" component={NavButtonMenu} />
        <Route path="/LinkWindow" component={LinkWindow} />
        {/* <Route path="/ChatBox" component={ChatBox} /> */}
        <Route path="/rooms/:id" component={ChatBox} />
    </div>
      </Router>
        );
      }
      
      
