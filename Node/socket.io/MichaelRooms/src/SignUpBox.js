import React from 'react';
import ReactDOM from 'react-dom';
import './SignUpBox.css';
import App from './App';
import * as serviceWorker from './serviceWorker';



function SignUpBox() {

    return (
        <div id="login" class="login-form-container">
            <header>LOGIN - SIGN UP</header>
            <fieldset>
                <div class="input-wrapper">
                    <input type="text" placeholder="your@email.com" />
                </div>
                <div class="input-wrapper">
                    <input type="password" placeholder="password" />
                </div>
                <button id="continue" className="buttonn">CONTINUE</button>
            </fieldset>
        </div>)

}





export default SignUpBox;