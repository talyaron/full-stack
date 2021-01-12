import React from 'react';
import './Cards.css';
import { useSelector, useDispatch } from 'react-redux';

import { toggleTodo } from '../../redux/actions'

const Cards = () => {

    const dispatch = useDispatch();

    const todos = useSelector(state => state.todos.todos)
    console.log(todos)
    

    function handleToggle(id) {
        console.log(id)
        dispatch(toggleTodo(id))
    }

  
    return (
        <div className='cards'>
            {
                todos.map((task, index) => {
                    return (<p key={index}
                        onClick={() => handleToggle(task.id)}
                        className={task.completed ? 'completed' : ''}
                    >
                        {task.content}
                    </p>)
                })
            }
        </div>
    )
}



export default Cards
