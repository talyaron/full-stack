import React from 'react';
import { useSelector } from 'react-redux';

export default function Sum(props){
    const {counter} = props;
    const appCounter = useSelector(state=>state.counter.counter)

    return(<h1>The sum is: {counter} and APP is {appCounter}</h1>)
}