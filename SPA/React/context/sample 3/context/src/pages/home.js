import React,{useContext} from 'react';
import {UserContext} from '../user'

function Home() {

    const { isTrue, setIsTrue } = useContext(UserContext);
    return <h2>Home {JSON.stringify(isTrue)}</h2>;
}

export default Home;