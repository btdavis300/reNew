import React from 'react'

import { useSelector } from 'react-redux'

import ArchiveArticles from './ArchiveArticles'

function ArchiveContainer() {
    const articles = useSelector(state => state.userArticles.entities)
    const user = useSelector(state => state.currentUser.set)


    const archivedArticles = articles.map(article => <ArchiveArticles key={article.id} article={article} />)

    return (
        <div className='flex flex-col items-center'>
            <div className='w-3/4 pt-7'>
                <h1 className='text-md italic text-slate-600 pb-1'>{user.username}'s</h1>
                <h1 className='text-3xl text-black font-bold'>Saved Articles</h1>
            </div>
            <div className='flex justify-center'>
                <div className='flex flex-col w-2/3'>
                    {archivedArticles}
                </div>
            </div>
        </div>
    )
}

export default ArchiveContainer