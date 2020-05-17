import React, {useState, useEffect} from 'react';
import './Feed.css';

import {DB} from '../functions/firebase'

function Feed(props){
    const [messages, setMessages] = useState([]);
    const {user} = props

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
                        return(<p key={index}>{message.message} ({message.name})</p>)
                    })
                }
            </div>
            <form className='input' onSubmit={(e)=>{sendMessage(e, user)}}>
                <input type='text' placeholder='enter text' name='message' />
                <input type='submit' value='send' />
            </form>
        </div>
    )
}

export default Feed;

function sendMessage(e, user){
    e.preventDefault();
    const name = user.displayName;
  
    const message = e.target.elements.message.value;
    DB
    .collection('messages').add({message, name})
    .then((res)=>{
        console.log('Mesager was send to DB', res.id);
        
    
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