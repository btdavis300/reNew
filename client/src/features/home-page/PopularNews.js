import React from 'react'

function PopularNews({ popularArt }) {
    return (
        <a href={popularArt.url} target="_blank">
        <div className='border-b p-2 hover:text-slate-600'>
            <h1 className='text-xl italic'>{popularArt.title}</h1>
            <p className='text-slate-600'>{popularArt.abstract}</p>
        </div>
        </a>
    )
}

export default PopularNews