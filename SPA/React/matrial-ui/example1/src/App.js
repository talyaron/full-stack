import React, { useState } from 'react';
import DB from './control/firebase';

import './App.css';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import Comp2 from './view/components/Comp2';

function App() {
  const [text, setText] = useState('Hello World')

  function setTextHandler(e) {
    setText(e.target.value)
    DB.collection('test').doc('test1').set({text:e.target.value});
  }

  return (
    <div className="App">
      <Button variant="contained" color="primary" onClick={() => { setText('Helllllooooooooooaaaaa!!!!!') }}>
        {text}
      </Button>
      <form noValidate autoComplete="off">
        <TextField id="standard-basic" label="Standard" onKeyPress={setTextHandler} />
        <TextField id="filled-basic" label="Filled" variant="filled" onKeyPress={setTextHandler} />
        <TextField id="outlined-basic" label="Outlined" variant="outlined" onKeyPress={setTextHandler} />
      </form>
      <div className='wrapper'>
        <Comp2 />
        <Comp2 />
      </div>
    </div>
  );
}

export default App;
