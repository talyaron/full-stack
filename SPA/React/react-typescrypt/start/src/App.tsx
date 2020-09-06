import React,{useEffect} from 'react';
import logo from './logo.svg';
import './App.css';

//schema
import Person from './model/Person';

const App = () => {

  useEffect(()=>{
    console.log(greeter('Rony'));
    console.log(greeterWithSchema({name:'Moshe', surename:'Chayon', age:44}));
  });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );

  function greeter(person:string){
    return `Hi ${person}`;
  }

  
  function greeterWithSchema(person:Person):string {
    return `Hi ${person.name} ${person.surename}. We know that your age is ${person.age}`;
    // return 1
    
  }

  
}

export default App;
