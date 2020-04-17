import React, {useState, useEffect} from 'react';
import './Feed.css';

import {DB} from '../functions/firebase'

function Feed(){
    const [messages, setMessages] = useState([]);

    useEffect(()=>{
        listenToMessages(setMessages)
    },[])

    useEffect(()=>{
        console.log(messages)
    },[messages])

    return(
        <div className='page'>
            <div className='wrapper'>
                {
                    messages.map((message,index)=>{
                        return(<p key={index}>{message.message}</p>)
                    })
                }
            </div>
            <form className='input' onSubmit={sendMessage}>
                <input type='text' placeholder='enter text' name='message' />
                <input type='submit' value='send' />
            </form>
        </div>
    )
}

export default Feed;

function sendMessage(e){
    e.preventDefault();

    const message = e.target.elements.message.value;
    DB
    .collection('messages').add({message})
    .then(()=>{
        console.log('Mesager was send to DB');
        
    
    })
    .catch(err=>{
        console.error('Error in sendMessage')
        console.error(err) 
    })

}

function listenToMessages(setMessages){

    //listen to messages
    DB.collection('messages')
    .onSnapshot(messagesDB=>{
        const messages = [];
        messagesDB.forEach(messageDB=>{
            messages.push(messageDB.data())
        })

        setMessages(messages);
    })
}