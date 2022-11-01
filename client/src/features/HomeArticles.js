import React from 'react'
import imagePlaceholder from '../assets/news-article-placeholder.png'

function HomeArticles({ article }) {

    return (
        <div className='flex flex-row p-2 border-b border-black'>
            <div className='pr-2'>
            <h1 className='text-2xl italic font-semi-bold'>{article.title}</h1>
            <p>{article.abstract}</p>
            </div>
            <img src={article.multimedia ? article.multimedia[1].url : imagePlaceholder} width="300px" alt="front page article" />
        </div>
    )
}

export default HomeArticles