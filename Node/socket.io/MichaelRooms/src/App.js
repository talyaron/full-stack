import React from 'react';
import './App.css';
import BackgroundAnimation from './BackgroundAnimation';
import SignUpBox from './SignUpBox';
import NavButtonMenu from './NavButtonMenu';
import { BrowserRouter as Router, Route } from "react-router-dom";
import LinkWindow from './LinkWindow';
import ChatBox from './ChatBox';
import { StateProvider } from './upState';






export default function App() {
  const appState = {
    setName: [],
    test: "fff",
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case 'passName':
        return { ...state, setName: action.payload };
      case 'testing':
        return { ...state, test: action.payload };
      default:
        return state;
    }
  };
  return (
    <StateProvider appState={appState} reducer={reducer}>
    <Router>
      <div>
        <BackgroundAnimation />
        <Route exact path="/" component={NavButtonMenu} />
        <Route path="/LinkWindow" component={LinkWindow} />
        <Route path="/rooms/:id" component={ChatBox} />
      </div>
    </Router>
      </StateProvider >
        );
}


