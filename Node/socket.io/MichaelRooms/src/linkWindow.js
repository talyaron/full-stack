import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './LinkWindow.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { defaultCipherList } from 'constants';
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import {useStateValue} from './upState';

function LinkWindow(props) {
    const [tokenValue, settokenValue] = useState("");
    const [userName, setuserName] = useState("");
    const [upstateUserName, dispatchupstateUserName] = useStateValue();
    


    localStorage.setItem("name", { userName });
    console.log(localStorage.getItem("name"))

    return (
        <div className="LinkWindow">
            <div className="minorLinkWindowWrapper">
                <form onSubmit={nameToken}>
                    <div><input type="text" required value={userName} onChange={e => setuserName(e.target.value)}>
                    </input> &larr;Type your nick name</div>
                    <div><input type="text" value={tokenValue} onChange={e => settokenValue(e.target.value)}>
                    </input> &larr;Please enter your token here</div>
                    <input onClick={fetchLink} type="button" value="Generate"></input>
                    <input type="submit" value="Submit"></input></form>
                <Link to={"/"} className='getToMain'>Get Back</Link>





            </div>
        </div>

    )
    function fetchLink() {
        var createRoomId = "Id"
        // console.log("not broken yet")
        fetch('http://localhost:3001/kaki', {
            method: 'POST',
            body: JSON.stringify({ createRoomId }),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
            .then(response => {
                console.log(JSON.stringify(response))
                settokenValue(response.roomId);
            })
            .catch(error => console.error('Error:', error));


    }
    function nameToken(e) {
        e.preventDefault()
        fetch('http://localhost:3001/generateRoomId', {
            method: 'POST',
            body: JSON.stringify({ userName, tokenValue }),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
            .then(response => {
                console.log(response)
                console.log(tokenValue)
                if (response.success) {
                    dispatchupstateUserName({
                        type: 'passName',
                        payload: {userName}  //payload
                    })
                    //  console.log(userName)
                    props.history.push(`/rooms/${tokenValue}`)
                }
            })
            .catch(error => console.error('Error:', error));

    }
}


export default LinkWindow;