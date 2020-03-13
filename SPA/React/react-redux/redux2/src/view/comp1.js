import React, {useEffect} from 'react';
import {useSelector, useDispatch } from 'react-redux';
import {changeCounter} from '../redux/actions'

export default function Comp1(props){
    const{sumHandler} = props;
    const state = useSelector(state=>state)
    const dispatch = useDispatch();

    useEffect(()=>{
        console.log(state)
    })

    return(
    <div>
        <button onClick={()=>{sumHandler(1)}}>add</button>
        <button onClick={()=>{dispatch(changeCounter(200))}}>ADD TO STATE</button>
    </div>
    )
}