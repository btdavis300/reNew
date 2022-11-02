import React from 'react'
import imagePlaceholder from '../../assets/news-article-placeholder.png'

function TopicArticles({ article }) {
  return (
    <div className='w-1/3 p-5'>
        <div>
        <img src={article.multimedia ? article.multimedia[1].url : imagePlaceholder}  alt="front page article" />
        </div>
        <div>
            <h1>{article.title}</h1>
            <p>{article.abstract}</p>
            <h5>{article.byline}</h5>
        </div>
    </div>
  )
}

export default TopicArticles