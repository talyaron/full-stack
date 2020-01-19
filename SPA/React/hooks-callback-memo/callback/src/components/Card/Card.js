import React, { useState, useCallback } from 'react';

//components
import CounterCars from './CounterCars';
import CounterTracks from './CounterTracks';
import Counter from './Counter';


//css
import './Card.css'

let counters = new Array(300).fill('1');

function Card() {
console.log(counters.length)

    console.log('-------- card -------')

    const [cars, setCars] = useState(0);
    const [tracks, setTracks] = useState(0);

    // const addCars = () => {
    //     console.log('add a car')
    //     setCars(cars + 1)
    // }

    // const addTracks = () => {
    //     console.log('add a track')
    //     setTracks(tracks + 1)
    // }

    const addCars = useCallback(() => {
        console.log('add a car')
        setCars(cars + 1)
    },[cars])

    const addTracks = useCallback(() => {
        console.log('add a track')
        setTracks(tracks + 1)
    },[tracks])

    return (

        counters.map((elm, index) => {
            return (
                <div className='card' key={index}>
                    <CounterCars addCars={addCars} cars={cars} />
                    <Counter text='Car' count={cars} />
                    <CounterTracks addTracks={addTracks} tracks={tracks} />
                    <Counter text='Track' count={tracks} />
                </div>
            )
        })

    )
}

export default React.memo(Card);