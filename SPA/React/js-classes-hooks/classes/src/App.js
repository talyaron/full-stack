import React, {Component} from 'react';


import './App.css';

import {login, logout, listenToLogin} from './functions/firebase';

class App extends Component  {
  constructor(props){
    super(props)
    this.state = {isShow:false, img:''};
    this.handleShowPicture = this.handleShowPicture.bind(this);
  }

  handleShowPicture(isShow, img){
    this.setState({isShow,img})
  }

  componentDidMount(){
   listenToLogin({picHandler:this.handleShowPicture});
  }

  render(){
    return(
      <div className="page">
      <h1>Pinstegram</h1>
      <h2>Login</h2>
      <form onSubmit={login}>
         
          <button type='submit'>Login to Google</button>
      </form>
      <hr />
      <button onClick={logout}>Logout</button>
      {this.state.isShow?
      <img id='userImg' src={this.state.img} />
        :null
    }
      </div>
    )
  }
}

export default App;
