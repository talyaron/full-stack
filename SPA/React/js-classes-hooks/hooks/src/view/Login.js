import React, {useState, useEffect} from 'react';
import './Login.css';

import { login, logout, listenToLogin } from '../functions/firebase';

function Login(){
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

export default Login;