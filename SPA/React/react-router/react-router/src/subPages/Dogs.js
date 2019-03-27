import React from 'react';

const Dogs = ({ match }) => {
    
    return (
        <div>
            <img src='https://thenypost.files.wordpress.com/2018/10/102318-dogs-color-determine-disesases-life.jpg?quality=90&strip=all&w=618&h=410&crop=1'></img>
             <hr/>
            Dog name is {match.params.id}
            <hr/>
        </div>
    )
}

export default Dogs