import React from 'react';
import {useStateValue} from './state';

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
export default Button2;