import React from 'react'
import imagePlaceholder from '../../assets/news-article-placeholder.png'

function TopicArticles({ article }) {
  return (
    <div className='w-1/3 px-5 py-10 border-y'>
        <div>
        <img src={article.multimedia ? article.multimedia[1].url : imagePlaceholder}  alt="front page article" />
        </div>
        <div className='flex flex-col hover:text-slate-600'>
            <h1 className='text-xl italic font-semi-bold hover:underline pt-5'>{article.title}</h1>
            <p className='text-slate-600 pt-2'>{article.abstract}</p>
            <h5 className='text-slate-600 text-xs pt-1'>{article.byline}</h5>
        </div>
    </div>
  )
}

export default TopicArticles