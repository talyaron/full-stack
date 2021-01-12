import { ADD_TODO, TOGGLE_TODO } from "../actionTypes";

const initialState = {
  todos:[]
};

const todoReducers = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO: {
      const { id, content } = action.payload;
      return [...state, todos:[...state.todos,{ id, content, completed: false }]]

    };

    case TOGGLE_TODO: {
      const { id } = action.payload;

      return state.todos.map((task, i) => {
        console.log(task)
        if (task.id === id) {
          task.completed = !task.completed;
        }
        return [...state, state[i].completed];
      })
    };





    default:
      return state;
  }
}

export default todoReducers;