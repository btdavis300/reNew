import React from 'react'
import { useDispatch } from 'react-redux'
import { setArticle } from '../reducers/articleSlice'
import imagePlaceholder from '../../assets/news-article-placeholder.png'

function TopicArticles({ article }) {
  const dispatch = useDispatch()
 
  function handleClick(){
    dispatch(setArticle(article))
  }

  return (
    <div onClick={handleClick} className='w-1/3 px-5 py-10 border-y hover:cursor-pointer hover:text-slate-600 hover:underline'>
        <div>
        <img src={article.multimedia ? article.multimedia[1].url : imagePlaceholder}  alt="front page article" />
        </div>
        <div className='flex flex-col'>
            <h1 className='text-xl italic font-semi-bold pt-5'>{article.title}</h1>
            <p className='text-slate-600 pt-2'>{article.abstract}</p>
            <h5 className='text-slate-600 text-xs pt-1'>{article.byline}</h5>
        </div>
    </div>
    
  )
}

export default TopicArticles