import React, {useEffect} from 'react';
import {useSelector, useDispatch } from 'react-redux';
import {multiple} from '../redux/actions'

export default function Multi(){
    const dispatch = useDispatch();
    
    // const state = useSelector(state=>state)
    // const dispatch = useDispatch();

  

    return(
    <div>
        <button onClick={()=>{dispatch(multiple(4))}}>Multiply</button>
        
        
    </div>
    )
}