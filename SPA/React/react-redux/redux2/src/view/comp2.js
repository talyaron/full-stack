import React from 'react';

export default function Comp2(props){

    const{sumHandler} = props;

    return(<button onClick={()=>{sumHandler(-1)}}>remove</button>)
}