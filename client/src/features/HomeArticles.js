import React from 'react'

function HomeArticles({ article }) {

    return (
        <div>
            <h1>{article.title}</h1>
            <img src={article.multimedia[0].url} width="600" height="400" alt="front page article" />
            <p>{article.abstract}</p>
        </div>
    )
}

export default HomeArticles