import React from 'react';
import { StateProvider, useStateValue } from './state';
import './App.css';

//based on https://medium.com/simply/state-management-with-react-hooks-and-context-api-at-10-lines-of-code-baf6be8302c

const App = () => {
    const initialState = {
        theme: { primary: 'green' }
    };

    const reducer = (state, action) => {
        
        switch (action.type) {
            case 'changeTheme':
                return {
                    ...state,
                    theme: action.newTheme
                };

            default:
                return state;
        }
    };

    return (
        <StateProvider initialState={initialState} reducer={reducer}>
            <div className='buttons'>
                <Button1 />
                <Button2 />
            </div>
        </StateProvider>
    );
}


const Button1 = () => {
    const [{ theme }, dispatch] = useStateValue();

    return (
        <button
            className='bigButton'
            style={{ background: theme.primary }}
            onClick={() => {

                dispatch({
                    type: 'changeTheme',
                    newTheme: { primary: 'red' }
                })
            }}
        >
            {theme.primary}
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
                    newTheme: { primary: 'blue' }
                })
            }}
        >

            {theme.primary}
        </button>
    );
}


export default App;