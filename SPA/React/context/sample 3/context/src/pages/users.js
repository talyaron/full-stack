import React, { useContext } from 'react';
import { UserContext } from '../App';


function Users() {

    const { isTrue, setIsTrue,colorVal, setColorVal, name } = useContext(UserContext);
    console.log(isTrue)
    return (
        <div onClick={() => { setIsTrue(!isTrue); setColorVal(getRandomColor()) }} style={{background:colorVal}}>
            <h2>Users</h2>
            <h3>{JSON.stringify(isTrue)}</h3>
            <p>{name}</p>
        </div>
    );
}

export default Users;

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }