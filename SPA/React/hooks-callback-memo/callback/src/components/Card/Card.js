import React, { useState, useCallback } from 'react';

//components
import CounterCars from './CounterCars';
import CounterTracks from './CounterTracks';
import Counter from './Counter';
import CounterHeader from './CounterHeader'


//css
import './Card.css'


//this "trick" helps create as many components as you wish
let counters = new Array(1).fill('1');

function Card() {
   

    console.log('-------- card -------')

    const [cars, setCars] = useState(0);
    const [tracks, setTracks] = useState(0);

    const addCars = () => {
        console.log('add a car')
        setCars(cars + 1)
    }

    const addTracks = () => {
        console.log('add a track')
        setTracks(tracks + 1)
    }

    // const addCars = useCallback(() => {
    //     console.log('add a car')
    //     setCars(cars + 1)
    // },[cars])

    // const addTracks = useCallback(() => {
    //     console.log('add a track')
    //     setTracks(tracks + 1)
    // },[tracks])

    return (
        <div>
            <CounterHeader />
            {counters.map((elm, index) => {
                return (
                    <div className='card' key={index}>
                        <CounterCars addCars={addCars} />
                        <Counter text='Car' count={cars} />
                        <CounterTracks addTracks={addTracks} />
                        <Counter text='Track' count={tracks} />
                    </div>

                )
            })}
        </div>

    )
}

export default React.memo(Card);