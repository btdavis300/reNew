import React from 'react'
import imagePlaceholder from '../../assets/news-article-placeholder.png'

function HomeArticles({ article }) {

    return (
        <a href={article.url} target="_blank">
        <div className='flex flex-row p-2 border-b border-black'>
            <div className='pr-2 hover:text-slate-600'>
            <h1 className='text-2xl italic font-semi-bold'>{article.title}</h1>
            <p className='text-slate-600'>{article.abstract}</p>
            </div>
            <img src={article.multimedia ? article.multimedia[1].url : imagePlaceholder} className='w-6/12' alt="front page article" />
        </div>
        </a>
    )
}

export default HomeArticles