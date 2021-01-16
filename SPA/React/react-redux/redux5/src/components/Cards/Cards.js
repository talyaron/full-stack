import React from 'react';
import './Cards.css';
import { useSelector, useDispatch } from 'react-redux';

import { toggleTodo, removeTodo } from '../../redux/actions'

const Cards = () => {

    const dispatch = useDispatch();
    const todos = useSelector(state => state.todos.todos)

    function handleToggle(id) {

        dispatch(toggleTodo(id))
    }

    function handleDelete(id) {
        dispatch(removeTodo(id))
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
                        <button onClick={() => handleDelete(task.id)}>X</button>
                    </p>)
                })
            }
        </div>
    )
}



export default Cards
