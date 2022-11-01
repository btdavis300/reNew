import React from 'react'

function PopularNews({ popularArt }) {
    return (
        <div className='border-b p-2'>
            <h1 className='text-xl italic'>{popularArt.title}</h1>
            <p>{popularArt.abstract}</p>
        </div>
    )
}

export default PopularNews