import React from 'react'

function Comment({ comment }) {
    const pubdate = comment.created_at
    const date = pubdate.indexOf('T')
    const newDate = pubdate.slice(0, date)

    return (
        <li className='pt-1'>
            <div className='flex flex-row items-center'>
                <h3 className='text-xl font-semibold text-slate-400'>{comment.user}</h3>
                <h6 className='pl-1 text-xs'>{newDate}</h6>
            </div>
            <p>"{comment.content}"</p>
        </li>
    )
}

export default Comment