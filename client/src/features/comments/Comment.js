import React from 'react'

function Comment({ comment }) {
    return (
        <li className='pt-1'>
            <div className='flex flex-row items-center'>
                <h3 className='text-xl font-semibold text-slate-400'>{comment.user}</h3>
                <h6 className='pl-1 text-xs'>{comment.posted}</h6>
            </div>
            <p>"{comment.content}"</p>
        </li>
    )
}

export default Comment