import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { removeArticle } from '../reducers/userArticlesSlice'
import { setShowArticle } from '../reducers/showArticleSlice'
import { setArticle } from '../reducers/articleSlice'
import { setAlert } from '../reducers/alertSlice'

import imagePlaceholder from '../../assets/news-article-placeholder.png'
import linkedInIcon from '../../assets/linkedin.jpeg'
import facebookIcon from '../../assets/facebook.jpeg'
import redditIcon from '../../assets/reddit.jpeg'
import twitterIcon from '../../assets/twitter.jpeg'
import bloggerIcon from '../../assets/blogger.jpeg'
import googleIcon from '../../assets/google.jpeg'
import evernoteIcon from '../../assets/evernote.jpeg'
import CommentContainer from '../comments/CommentContainer'

function ArchiveArticle() {
    const [archived, setArchived] = useState(false)

    const dispatch = useDispatch()
    const article = useSelector(state => state.article.entity)
    const user = useSelector(state => state.currentUser.set)

    const pubdate = article.published_date
    const date = pubdate.indexOf('T')
    const newDate = pubdate.slice(0, date)

    const fbShareLink = `https://www.facebook.com/sharer.php?u=${article.url}`
    const linkedInLink = `https://www.linkedin.com/sharing/share-offsite/?url=${article.url}`
    const redditLink = `https://reddit.com/submit?url=${article.url}&title=${article.title}`
    const twitterLink = `https://twitter.com/intent/tweet?url=${article.url}&text=${article.title}`
    const bloggerLink = `https://www.blogger.com/blog-this.g?u=${article.url}&n=${article.title}&t=${article.abstract}`
    const googleLink = `https://www.google.com/bookmarks/mark?op=edit&bkmk=${article.url}&title=${article.title}&annotation=${article.abstract}`
    const evernoteLink = `https://www.evernote.com/clip.action?url=${article.url}&title=${article.title}`



    function handleClick() {
        dispatch(setArticle({}))
        dispatch(setShowArticle(false))
    }

    function removeArchiveArticle() {
        fetch(`/archive_articles/${article.id}`, { method: "DELETE" })
            .then(res => {
                if (res.ok) {
                    dispatch(removeArticle(article))
                    dispatch(setShowArticle(false))
                    dispatch(setAlert(""))
                    setTimeout(function () { dispatch(setAlert("hidden")) }, 5000)
                }
            })
    }

    return (
        <div className='flex flex-col items-center'>
            <div className='flex flex-col items-center border-b  w-3/4  pt-20'>
                <div className='flex flex-row pb-7'>
                    <div className='w-1/5'>
                        <img src={facebookIcon} width="28px" height="28px" className='hover:cursor-pointer hover:opacity-70 my-1' onClick={() => window.open(fbShareLink, 'targetWindow', 'width=500, height=500')} />
                        <img src={linkedInIcon} width="28px" height="28px" className='hover:cursor-pointer hover:opacity-70 my-1' onClick={() => window.open(linkedInLink, 'targetWindow', 'width=500, height=500')} />
                        <img src={twitterIcon} width="28px" height="28px" className='hover:cursor-pointer hover:opacity-70 my-1' onClick={() => window.open(twitterLink, 'targetWindow', 'width=500, height=500')} />
                        <img src={redditIcon} width="28px" height="28px" className='hover:cursor-pointer hover:opacity-70 my-1' onClick={() => window.open(redditLink, 'targetWindow', 'width=500, height=500')} />
                        <img src={googleIcon} width="28px" height="28px" className='hover:cursor-pointer hover:opacity-70 my-1' onClick={() => window.open(googleLink, 'targetWindow', 'width=500, height=500')} />
                        <img src={bloggerIcon} width="28px" height="28px" className='hover:cursor-pointer hover:opacity-70 my-1' onClick={() => window.open(bloggerLink, 'targetWindow', 'width=500, height=500')} />
                        <img src={evernoteIcon} width="28px" height="28px" className='hover:cursor-pointer hover:opacity-70 my-1' onClick={() => window.open(evernoteLink, 'targetWindow', 'width=500, height=500')} />
                    </div>
                    <div className='pr-10 flex items-center'>
                        <div>
                            <a href={article.url} target="_blank" rel="noreferrer">
                                <div>
                                    <h1 className='text-4xl italic font-semibold text-center hover:text-slate-600 hover:underline'>{article.title}</h1>
                                    <ul className='text-slate-600 text-sm'>
                                        <li className='pt-3 font-semibold'>{article.author}</li>
                                        <li className='pb-7'>{article.published_date}</li>
                                    </ul>
                                </div>
                            </a>
                            <div>
                                <p className='text-slate-600 text-xl'>{article.abstract}</p>
                            </div>
                            <div className='pt-10'>
                                <button onClick={handleClick} type="button" className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xs px-3 py-2 text-center mr-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-600 dark:focus:ring-blue-800">Back to Archive</button>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col'>
                        <div className='flex justify-end items-center pb-1'>
                            <h3 className='text-sm text-slate-600'>Remove from Archives</h3>
                            <svg className="w-6 h-6 text-red-600 hover:cursor-pointer" onClick={removeArchiveArticle} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd"></path></svg>
                        </div>
                        <img src={article.image ? article.image : imagePlaceholder} alt="front page article" />
                    </div>
                </div>
            </div>
            <CommentContainer url={article.url} />
        </div>
    )
}

export default ArchiveArticle