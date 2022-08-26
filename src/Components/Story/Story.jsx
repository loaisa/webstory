import React from 'react';

function Story({story}) {
    debugger
    return (
        <div>
            <h1>{story.title}</h1>
            <img src={story.img} alt=""/>
            <p>{story.body}</p>
            <p>{story.genre}</p>
        </div>
    );
}

export default Story;