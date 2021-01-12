import React from 'react';
import './Cards.css';
import { useSelector, useDispatch } from 'react-redux';

import { toggleTodo } from '../../redux/actions'

const Cards = () => {

    const dispatch = useDispatch();

    const todos = useSelector(state => state.todos.byIds)
    const todosAll = useSelector(state => state.todos.allIds)

    function handleToggle(id) {
        console.log(id)
        dispatch(toggleTodo(id))
    }

  
    return (
        <div className='cards'>
            {
                todosAll.map((taskId, index) => {
                    return (<p key={index}
                        onClick={() => handleToggle(taskId)}
                        className={todos[taskId].completed ? 'completed' : ''}
                    >
                        {todos[taskId].content}
                    </p>)
                })
            }
        </div>
    )
}



export default Cards
