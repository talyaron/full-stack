import React from 'react';

function CounterHeader(props){

    console.log(`Header was renderd`)
    return(
        <div className='header'>Thy Counters</div>
    )
}

// export default React.memo(Counter);
export default CounterHeader;