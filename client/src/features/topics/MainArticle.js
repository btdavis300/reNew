import React from 'react'
import { useDispatch } from 'react-redux'
import { setArticle } from '../reducers/articleSlice'
import { setShowArticle } from '../reducers/showArticleSlice'
import imagePlaceholder from '../../assets/news-article-placeholder.png'

function MainArticle({ article }) {
  const dispatch = useDispatch();

  function handleClick() {
    dispatch(setArticle(article))
    dispatch(setShowArticle(true))
  }

  return (
    <div className='flex flex-row justify-evenly w-full py-10'>
      <div className='w-5/12 flex items-center' onClick={handleClick}>
        <div className='flex flex-col hover:text-slate-600'>
          <h1 className='text-4xl italic font-semibold hover:underline'>{article.title}</h1>
          <h5 className='pb-3 text-sm italic'>{article.byline}</h5>
          <p className='text-slate-600 text-xl'>{article.abstract}</p>
        </div>
      </div>
      <div className='w-5/12' onClick={handleClick}>
        <img src={article.multimedia ? article.multimedia[0].url : imagePlaceholder} alt="front page article" />
      </div>
    </div>
  )
}

export default MainArticle