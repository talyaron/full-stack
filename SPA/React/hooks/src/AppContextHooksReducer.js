import React from 'react';
import { StateProvider, useStateValue } from './state';
import './App.css';

//based on https://medium.com/simply/state-management-with-react-hooks-and-context-api-at-10-lines-of-code-baf6be8302c

const App = () => {
    // starting state
    const appState = {
        theme: { primary: 'green' },
        color: 'red',
        count: 0
    };

    //REDUCER: a function that changes the state according to predifined ACTIONS and their payload
    const reducer = (state, action) => {
        switch (action.type) {
            case 'changeTheme':
                return {
                    ...state,
                    theme: action.payload
                };
            case 'addToCounter':
                return {
                    ...state,
                    count: action.payload
                };
            default:
                return state;
        }
    };

    return (
        <StateProvider appState={appState} reducer={reducer}>

            <Button1 />
            <Button2 />

        </StateProvider>
    );
}


const Button1 = () => {
    const [{ theme }, dispatchTheme] = useStateValue();
    const [{ count }, dispatchCounter] = useStateValue();
    return (
        <button
            className='bigButton'
            style={{ background: theme.primary }}
            onClick={() => {

                dispatchTheme({
                    type: 'changeTheme',
                    payload: { primary: 'red' }  //payload
                })
                dispatchCounter({
                    type: 'addToCounter',
                    payload: count+2  //payload
                })
            }}
        >
            <p>{theme.primary}</p>
            <p>{count}</p>
        </button>
    );
}

function Button2(props) {
    const [{ theme }, dispatch] = useStateValue();
    return (
        <button
            className='bigButton'
            style={{ background: theme.primary }}
            onClick={() => {
                dispatch({
                    type: 'changeTheme',
                    payload: { primary: 'blue' }
                })
            }}
        >

            {theme.primary}
        </button>
    );
}


export default App;