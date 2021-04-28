import React, {FC} from 'react';
import './Card.css';

interface Props{
    age:number,
    name:string
}

const Card:FC<Props> = ({age, name}) =>{
    return(<div className='card'>age: {age}, name: {name}</div>)
} 

export default Card;

