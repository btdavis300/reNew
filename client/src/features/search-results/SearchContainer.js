import React from 'react'
import { useSelector } from 'react-redux'
import SearchArticle from './SearchArticle'

function SearchContainer() {
    const results = useSelector(state => state.newsSearch.entities)
    console.log(results)

    const searchArticle = results.map(article => <SearchArticle key={article._id} article={article} />)

    return (
        <div>
            {searchArticle}
        </div>
    )
}

export default SearchContainer