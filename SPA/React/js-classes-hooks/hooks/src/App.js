import React, { useEffect, useState } from 'react';


import './App.css';

import { login, logout, listenToLogin } from './functions/firebase';

function App () {

  const [isShow, setIsShow] = useState(false);
  const [img, setImg] = useState('')
 
  useEffect(()=>{
    listenToLogin(setIsShow, setImg)
  },[])
  

    return (
      <div className="page">
        <h1>Pinstegram</h1>
        <h2>Login</h2>
        <form onSubmit={login}>

          <button type='submit'>Login to Google</button>
        </form>
        <hr />
        <button onClick={logout}>Logout</button>
        {isShow ?
          <img id='userImg' src={img} />
          : null
        }
      </div>
    )
  
}

export default App;
