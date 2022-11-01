import React from 'react'
import imagePlaceholder from '../assets/news-article-placeholder.png'

function HomeArticles({ article }) {

    return (
        <div>
            <h1>{article.title}</h1>
            <img src={article.multimedia ? article.multimedia[0].url : imagePlaceholder} width="600" height="400" alt="front page article" />
            <p>{article.abstract}</p>
        </div>
    )
}

export default HomeArticles