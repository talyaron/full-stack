import React, { useState, useEffect } from 'react';
import './App.css';
import DB from './firebase/config';

function App(props) {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0); 
  const [fruit, setFruit] = useState('banana');
  const [todos, setTodos] = useState([{ text: 'Learn Hooks' }]); 
  
  //useEffects are used to do somthing other then rendering....

  useEffect(() => {    
    document.title = `You clicked ${count} times`;
  });

  //In this example, React would unsubscribe from our ChatAPI when the component unmounts
  //There can be more the one "useEffect"

  // useEffect(() => {
  //   ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);

  //   return () => {
  //     ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);
  //   };
  // });

  return (
    <div>
      <h1>{props.title}</h1>
      <p>You clicked {count} times</p>
      <button onClick={() => { setFruit(`Melon ${count}`); setCount(count + 5); setTodos([{ text: 'booooo' }]) }}>
        Click me
      </button>      
      <p>{fruit}</p>
      <p><b>Todo:</b> {todos[0].text}</p>
      <h3>{getWatts(count)}</h3>
      <PowerDisplay />     
    </div>
  );
}

function getWatts() {
  const [power, setPower] = useState(0);
  try {
    DB.collection('tests').doc('test1').onSnapshot(res => {
      if (res.exists) {
        setPower(res.data().power);
      }      
    })    
  } catch{
    console.log('no data....')
  } 

  return power;

}



function PowerDisplay() {
  return (
    <div>
      <h1 className='power'><b>Watts:</b> {getWatts()}</h1>      
    </div>
  )
}

export default App;
