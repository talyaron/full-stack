import React from 'react';
import { useDispatch } from 'react-redux';
import { changeCounter } from '../redux/actions'

export default function Comp2(props) {
    const dispatch = useDispatch();

    const { sumHandler } = props;

    return (<div>
        <button onClick={() => { sumHandler(-1) }}>remove</button>
        <button onClick={() => { dispatch(changeCounter(-1)) }}>REMOVE FROM STATE</button>
    </div>
    )
}