import React from 'react';

function Scene({sce}) {
    return (
        <div>
            <li>{sce.text}</li>
            <li>{sce.h}</li>
            <li>{sce.img}</li>
        </div>

    );
}

export default Scene;