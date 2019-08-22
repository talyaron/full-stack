import ReactDOM from 'react-dom';
import './ChatBox.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { defaultCipherList } from 'constants';
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import React, { useState, useEffect, useRef } from "react";
import socketIOClient from "socket.io-client";
import { animateScroll as scroll } from "react-scroll";

const socket = socketIOClient('http://localhost:4000/');
let tempSocketMessages = [];
let counter = 0;

function ChatBox({ match }, e, props) {
    let name = localStorage.getItem("name");
    const [newMsgs, setNewMsgs] = useState(0);
    const [messages, setMessages] = useState([]);
    const containerRef = useRef(null);
    let room = match.params.id
    

    useEffect(() => {
        socket.on('chat message', newMessage => {
            tempSocketMessages.push(newMessage)
            setNewMsgs(counter + 1);
            counter++;
            console.log(newMsgs)
        })
        fetch('http://localhost:4000/messages', {
            method: 'POST',
            body: JSON.stringify({ name }),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
            .then(response => {
                let newOrder = response.messages.reverse();
                setMessages(response.messages);
            })
            .catch(error => console.error('Error:', error))

        console.log('use effect init')
    }, []);

    useEffect(() => {

        scroll.scrollToBottom()

    })

    return (
        <div className="gridWrapper">
            <div className="original-grid-container">
                <div className="NickNamesArea"></div>
                <div className="ChatArea">
                    {
                        messages.map((message, index) => {

                            return <p key={index}>{message.message}</p>
                        })
                    }
                    {
                        tempSocketMessages.map((message, index) => {
                            console.log(tempSocketMessages)
                            return <p key={index + 'socket'}>{message.message}</p>
                        })
                    }
                </div>
                <div className="ChatInputArea">
                    <div className="messageInputWrapper">
                        <textarea className="messageTypingSpot" type="text" autoFocus={true} onKeyUp={(e) => {
                            if (e.key === 'Enter') {
                                socket.emit("chat message", e.target.value, name);
                                e.target.value = '';
                            }
                        }} ></textarea>
                        {/* <input className="ChatInputButton" type="submit" value="Enter"></input> */}
                    </div></div>

            </div>
        </div >








    )
}





export default ChatBox;