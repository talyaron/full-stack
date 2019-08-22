import React from 'react';
import ReactDOM from 'react-dom';
import './NavButtonMenu.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Link, Route } from "react-router-dom";







function NavButtonMenu() {

    return (

        <div className="buttonWrapper">
            <div className="btn-group">
                <Link to={"/LinkWindow"} className='buttonS'>FlashChat</Link>
                <Link to={"/"} c className="buttonS">Log In</Link>
                <Link to={"/"} c className="buttonS">Sign Up</Link>
            </div>
        </div>)
}





export default NavButtonMenu;