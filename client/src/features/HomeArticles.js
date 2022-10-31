import React from 'react'

function HomeArticles({ article }) {

    return (
        <div>
            <h1>{article.title}</h1>
            <img src={article.multimedia[0].url} alt="front page article" />
            <p>{article.abstract}</p>
        </div>
    )
}

export default HomeArticles