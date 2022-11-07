import React from 'react'
import { useSelector } from 'react-redux'
import SearchArticles from './SearchArticles'

function SearchContainer() {
    const results = useSelector(state => state.newsSearch.entities)
    const query = useSelector(state => state.searchQuery.entity)
    console.log(results)

    const searchArticle = results.map(article => <SearchArticles key={article._id} article={article} />)

    return (
        <div className='flex flex-col items-center'>
            <div className='w-1/2 pt-7'>
                <h1 className='text-sm text-slate-600 pb-1'>Showing {results.length} results for:</h1>
                <h1 className='text-3xl text-black font-bold'>{query}</h1>
            </div>
            <div className='flex justify-center'>
                <div className='flex flex-col w-1/2'>
                    {searchArticle}
                    <h1>hi</h1>
                </div>
            </div>
        </div>
    )
}

export default SearchContainer