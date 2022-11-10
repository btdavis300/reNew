import React from 'react'
import { setArticle } from '../reducers/articleSlice'
import { setShowArticle } from '../reducers/showArticleSlice'
import imagePlaceholder from '../../assets/news-article-placeholder.png'
import { useDispatch } from 'react-redux'

function ArchiveArticles({ article }) {
    const dispatch = useDispatch()


    function handleClick() {
        dispatch(setArticle(article))
        dispatch(setShowArticle(true))
    }

    return (
        <div onClick={handleClick} className='flex flex-row justify-between items-center px-10 py-10 border-b hover:cursor-pointer'>
            <div className='flex flex-col pr-24 w-3/4'>
                <h1 className='text-xl italic font-semi-bold hover:underline'>{article.title}</h1>
                <p>{article.abstract}</p>
                <h5 className='text-sm pt-2'>{article.author}</h5>
                <h5 className='text-slate-600 text-xs'>published: {article.published_date}</h5>
            </div>
            <div>
                <img src={article.image ? article.image : imagePlaceholder} alt="results article" />
            </div>
        </div>
    )
}

export default ArchiveArticles