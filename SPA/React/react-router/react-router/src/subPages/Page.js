import React from 'react';

const Page = ({ match }) => {
    
    return (
        <div>
             <hr/>
            Page Number {match.params.id}
            <hr/>
        </div>
    )
}

export default Page