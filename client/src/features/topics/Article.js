import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import imagePlaceholder from '../../assets/news-article-placeholder.png'

function Article() {
    const article = useSelector(state => state.article.entity)

    const pubdate = article.published_date
    const date = pubdate.indexOf('T')
    const newDate = pubdate.slice(0, date)



    return (
        <div>
            <div className='flex justify-center pt-20'>
                <div className='flex flex-row items-center w-3/4 border-b pb-7'>
                    <div className='px-10'>
                        <div>
                            <a href={article.url} target="_blank" rel="noreferrer">
                                <div>
                                    <h1 className='text-4xl italic font-semibold text-center hover:text-slate-600 hover:underline'>{article.title}</h1>
                                    <ul className='text-slate-600 text-sm'>
                                        <li className='pt-3 font-semibold'>{article.byline}</li>
                                        <li className='pb-7'>{newDate}</li>
                                    </ul>
                                </div>
                            </a>
                            <div>
                                <p className='text-slate-600 text-xl'>{article.abstract}</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <img src={article.multimedia ? article.multimedia[0].url : imagePlaceholder} alt="front page article" />
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

export default Article