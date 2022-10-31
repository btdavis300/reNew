import React from 'react'

function PopularNews({ popularArt }) {
    return (
        <div>
            <h1>{popularArt.title}</h1>
            <p>{popularArt.abstract}</p>
        </div>
    )
}

export default PopularNews