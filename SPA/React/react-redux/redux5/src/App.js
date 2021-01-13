import './App.css';
// import { ADD_TODO } from './redux/actionTypes';
import { addTodo } from './redux/actions';
import { useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';

//components
import Cards from './components/Cards/Cards';



function App() {

  const [taskTxt, setTaskTxt] = useState('')

  const dispatch = useDispatch();
  
 
  const state = useSelector(state=>state);
  console.log(state)


  function handleAdd(e) {
    e.preventDefault();
    dispatch(addTodo(taskTxt));
    setTaskTxt('');
    e.target.reset();
  }

  function handleInput(e) {
    setTaskTxt(e.target.value)
  }

  return (
    <div className="App">
      <form onSubmit={handleAdd}>
        <button type='submit'>Add Task</button>
        <input type='text' placeholder='משימה' defaultValue={taskTxt} onKeyUp={handleInput} />
      </form>
     
      <Cards />
    </div>
  );
}

export default App;

