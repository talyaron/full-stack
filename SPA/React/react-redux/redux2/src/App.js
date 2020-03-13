import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Comp1 from './view/comp1';
import Comp2 from './view/comp2';
import Sum from './view/Sum';

function App() {
  const [counter, setCounter] = useState(1)
  function sumHandler(change){
    setCounter(counter+change);
  }
  return (
    <div className="App">
      <Sum counter={counter}/>
     <Comp2 sumHandler={sumHandler} />
       <Comp1 sumHandler={sumHandler} />
    </div>
  );
}

export default App;
