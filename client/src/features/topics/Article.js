import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import imagePlaceholder from '../../assets/news-article-placeholder.png'

function Article() {
    const article = useSelector(state => state.article.entity)

    return (
        <div className='flex justify-center'>
            <div className='flex flex-row w-3/4'>
                <div className='flex justify-center px-10'>
                    <div className='flex flex-col items-center'>
                        <div className='pt-10 text-center'>
                            <h1 className='text-5xl italic font-semibold'>{article.title}</h1>
                            <h5 className='pb-7 pt-3 text-lg italic'>{article.byline}</h5>
                        </div>
                        <div className='w-2/3 flex flex-col items-center'>
                            <img src={article.multimedia ? article.multimedia[1].url : imagePlaceholder} alt="front page article" />
                            <p className='pt-7 text-slate-600 text-xl'>{article.abstract}</p>
                        </div>
                    </div>
                </div>
                <div className='pt-10'>
                    <form>
                        <div class="mb-6">
                            <label for="large-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Write Comment</label>
                            <textarea type="text" id="large-input" rows="7" cols="100" class="block p-4 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                        </div>
                        <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Post</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Article