import React from 'react';

function CounterCars(props){

    console.log('counter cars')

    

    return(
        <h1 onClick={props.addCars}>Add a car to counter</h1>
    )
}

// export default React.memo(CounterCars);
export default CounterCars;