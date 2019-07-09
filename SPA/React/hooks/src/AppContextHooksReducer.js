import React from 'react';
import { StateProvider } from './state';
import './App.css';
import Button1 from './Button1';
import Button2 from './Button2';



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







export default App;