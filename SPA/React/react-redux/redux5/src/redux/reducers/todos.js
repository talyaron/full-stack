import { ADD_TODO, TOGGLE_TODO, REMOVE_TODO } from "../actionTypes";

const initialState = {
  todos: []
};

const todoReducers = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO: {
      const { id, content } = action.payload;
      return {
        ...state,
        todos: [...state.todos, { id, content, completed: false }]
      }

    };

    case TOGGLE_TODO: {
      const { id } = action.payload;

      let newState = { ...state }
      let index = newState.todos.findIndex(task => task.id === id)
      if (index > -1) {
        newState.todos[index].completed = !newState.todos[index].completed
      }
      return newState

    };

    case REMOVE_TODO: {
      const { id } = action.payload;

      let newState = { ...state }
      let index = newState.todos.findIndex(task => task.id === id)
      if (index > -1) {
        newState.todos.splice(index, 1)
      }

      return newState;
    };





    default:
      return state;
  }
}

export default todoReducers;