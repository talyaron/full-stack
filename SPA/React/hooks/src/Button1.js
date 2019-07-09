import React from 'react';
import {useStateValue} from './state';

function Button1 () {
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

export default Button1;