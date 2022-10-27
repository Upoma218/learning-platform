import React from 'react';

const Headline = ({info}) => {
    const {name} = info;
    return (
        <div>
            <h1>{name}</h1>
        </div>
    );
};

export default Headline;