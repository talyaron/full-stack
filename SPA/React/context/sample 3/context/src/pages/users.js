import React, { useContext } from 'react';
import { UserContext } from '../user';


function Users() {

    const { isTrue, setIsTrue } = useContext(UserContext);
    console.log(isTrue)
    return (
        <div onClick={() => { setIsTrue(!isTrue) }}>
            <h2>Users</h2>
            <h3>{JSON.stringify(isTrue)}</h3>
            <p>sdg</p>
        </div>
    );
}

export default Users;