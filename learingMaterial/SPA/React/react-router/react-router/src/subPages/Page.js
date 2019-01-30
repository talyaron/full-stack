import React from 'react';

const Page = ({ match }) => {
    
    return (
        <div>
            Page Number {match.params.id}
        </div>
    )
}

export default Page