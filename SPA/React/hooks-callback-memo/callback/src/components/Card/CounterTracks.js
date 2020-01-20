import React from 'react';

function CounterTracks(props){
    
    console.log('counter tracks')
    

    return(
        <h1 onClick={props.addTracks}>Add a track to counter</h1>
    )
}

// export default React.memo(CounterTracks);
export default CounterTracks;