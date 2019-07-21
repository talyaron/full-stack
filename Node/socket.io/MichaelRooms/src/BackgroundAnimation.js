import React from 'react';
import ReactDOM from 'react-dom';
import './BackgroundAnimation.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { defaultCipherList } from 'constants';


function BackgroundAnimation(){
return(
<div className="area" >
    <ul className="circles">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
    </ul>
</div >)
}
export default BackgroundAnimation;