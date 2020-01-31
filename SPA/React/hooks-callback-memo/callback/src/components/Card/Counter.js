import React from 'react';

function Counter(props){

    console.log(`counter of ${props.text}s`)
    return(
        <h3>{props.text}s number is: {props.count}</h3>
    )
}

export default React.memo(Counter);
// export default Counter;