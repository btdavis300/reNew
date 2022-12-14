import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { savedArticle } from '../reducers/userArticlesSlice'

import imagePlaceholder from '../../assets/news-article-placeholder.png'
import linkedInIcon from '../../assets/linkedin.jpeg'
import facebookIcon from '../../assets/facebook.jpeg'
import redditIcon from '../../assets/reddit.jpeg'
import twitterIcon from '../../assets/twitter.jpeg'
import bloggerIcon from '../../assets/blogger.jpeg'
import googleIcon from '../../assets/google.jpeg'
import evernoteIcon from '../../assets/evernote.jpeg'

import CommentContainer from '../comments/CommentContainer'
import SignInAlert from '../misc/SignInAlert'

function Article() {
    const [archived, setArchived] = useState(false)
    const [showAlert, setShowAlert] = useState(false)

    const dispatch = useDispatch()
    const article = useSelector(state => state.article.entity)
    const user = useSelector(state => state.currentUser.set)

    const pubdate = article.published_date
    const date = pubdate.indexOf('T')
    const newDate = pubdate.slice(0, date)

    const alertMessage = "You must be signed in to save an article."

    const fbShareLink = `https://www.facebook.com/sharer.php?u=${article.url}`
    const linkedInLink = `https://www.linkedin.com/sharing/share-offsite/?url=${article.url}`
    const redditLink = `https://reddit.com/submit?url=${article.url}&title=${article.title}`
    const twitterLink = `https://twitter.com/intent/tweet?url=${article.url}&text=${article.title}&hashtags=${article.per_facet[0]}`
    const bloggerLink = `https://www.blogger.com/blog-this.g?u=${article.url}&n=${article.title}&t=${article.abstract}`
    const googleLink = `https://www.google.com/bookmarks/mark?op=edit&bkmk=${article.url}&title=${article.title}&annotation=${article.abstract}&labels=${article.per_facet[0]}`
    const evernoteLink = `https://www.evernote.com/clip.action?url=${article.url}&title=${article.title}`


    function handleArticle() {
        if (Object.keys(user).length === 0) {
            setShowAlert(true)
        } else {
            const archivedArticle = {
                user_id: user.id,
                title: article.title,
                author: article.byline,
                published_date: newDate,
                abstract: article.abstract,
                url: article.url,
                image: article.multimedia[0].url
            }
            fetch('/archive_articles', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(archivedArticle),
            })
                .then(r => r.json())
                .then(data => console.log(data))
            setArchived(true)
            dispatch(savedArticle(archivedArticle))
        }
    }

    function unSaveArticle() {
        //add delete request somehow without using article id?
        setArchived(false)
    }

    return (
        <>
            <SignInAlert showAlert={showAlert} setShowAlert={setShowAlert} alertMessage={alertMessage} />
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
                        <div className='flex flex-col'>
                            {!archived ?
                                <div className='flex justify-end items-center pb-1'>
                                    <h3 className='text-sm text-slate-600'>Save to Archives</h3>
                                    <svg className="w-6 h-6 text-red-600 hover:cursor-pointer" onClick={handleArticle} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                                </div>
                                :

                                <div className='flex justify-end items-center pb-1'>
                                    <h3 className='text-sm text-slate-600'>Saved!</h3>
                                    <svg className="w-6 h-6 text-red-600 hover:cursor-pointer" onClick={unSaveArticle} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd"></path></svg>
                                </div>
                            }
                            <img src={article.multimedia ? article.multimedia[0].url : imagePlaceholder} alt="front page article" />
                        </div>
                    </div>
                </div>
                <CommentContainer url={article.url} />
            </div>
        </>
    )
}

export default Article