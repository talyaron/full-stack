import React from 'react';

export default function Comp1(props){
    const{sumHandler} = props

    return(
    <div>
        <button onClick={()=>{sumHandler(1)}}>add</button>
    </div>
    )
}