import React,{useContext} from 'react';
import {UserContext} from '../user'

function Home() {

    const {trust } = useContext(UserContext);
    const { isTrue} = trust;

    return <h2>Home {JSON.stringify(isTrue)}</h2>;
}

export default Home;