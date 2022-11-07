import React from 'react'
import imagePlaceholder from '../../assets/news-article-placeholder.png'

function SearchArticle({ article }) {

    const pubdate = article.pub_date
    const date = pubdate.indexOf('T')
    const newDate = pubdate.slice(0, date)

    const readTime = Math.round(article.word_count / 200)

    return (
        <div className='flex flex-row justify-between items-center px-10 py-10 border-b hover:cursor-pointer'>
            <div className='flex flex-col pr-24'>
                <h4 className='text-md pt-5'>{article.section_name}</h4>
                <h1 className='text-xl italic font-semi-bold hover:underline'>{article.headline.main}</h1>
                <p>{article.abstract}</p>
                <h5 className='text-sm pt-2'>{article.byline.original}</h5>
                <h5 className='text-slate-600 text-xs'>published: {newDate}</h5>
                <h5 className='text-slate-600 text-xs'>{readTime} min read</h5>
            </div>
            <div>
                <img src={article.multimedia ? `https://static01.nyt.com/${article.multimedia[2].url}` : imagePlaceholder} alt="results article" />
            </div>
        </div>
    )
}

export default SearchArticle