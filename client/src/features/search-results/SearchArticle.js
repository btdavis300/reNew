import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setShowArticle } from '../reducers/showArticleSlice'
import { setArticle } from '../reducers/articleSlice'
import imagePlaceholder from '../../assets/news-article-placeholder.png'

function SearchArticle() {
    const dispatch = useDispatch()
    const article = useSelector(state => state.article.entity)

    const pubdate = article.pub_date
    const date = pubdate.indexOf('T')
    const newDate = pubdate.slice(0, date)

    const readTime = Math.round(article.word_count / 200)

    function handleClick() {
        dispatch(setArticle([]))
        dispatch(setShowArticle(false))

    }

    return (
        <div>
            <div className='flex justify-center pt-10'>
                <div className='flex flex-row items-center w-3/4 border-b pb-7'>
                    <div>
                        <div className='pb-10'>
                            <button onClick={handleClick} type="button" className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-600 dark:focus:ring-blue-800">Back to Results</button>
                        </div>
                        <div className='w-2/3'>
                            <a href={article.web_url} target="_blank" rel="noreferrer">
                                <div>
                                    <h1 className='text-4xl italic font-semibold text-center hover:text-slate-600 hover:underline hover:cursor-pointer'>{article.headline.main}</h1>
                                    <ul className='text-slate-600 text-sm'>
                                        <li className='pt-3 font-semibold'>{article.byline.original}</li>
                                        <li>published: {newDate}</li>
                                        <li className='text-slate-600 text-xs pb-7'>{readTime} min read</li>
                                    </ul>
                                </div>
                            </a>
                            <div>
                                <p className='text-slate-600 text-xl'>{article.abstract}</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <img src={article.multimedia ? `https://static01.nyt.com/${article.multimedia[0].url}` : imagePlaceholder} alt="front page article" />
                    </div>
                </div>
            </div>
            <div className='flex justify-center pt-7'>
                <div className='w-1/2 flex flex-col'>
                    <div>
                        <form>
                            <div className="mb-6">
                                <label htmlFor="large-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Write Comment</label>
                                <textarea type="text" id="large-input" rows="3" cols="100" className="block p-4 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                            </div>
                            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Post</button>
                        </form>
                    </div>
                    <div className='pt-7'>
                        <ul>
                            <li>Comment 1</li>
                            <li>Comment 2</li>
                            <li>Comment 3</li>
                            <li>Comment 4</li>
                            <li>Comment 5</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchArticle