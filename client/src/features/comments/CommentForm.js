import React, { useState, useEffect } from 'react'

import { useSelector, useDispatch } from "react-redux"
import { addedComment } from '../reducers/articleCommentsSlice'

import SignInAlert from '../misc/SignInAlert'

function CommentForm({ url }) {
    const [showAlert, setShowAlert] = useState(false)
    const [hidden, setHidden] = useState("")
    const [formComment, setformComment] = useState("")

    const alertMessage = "You must be signed in to write a comment."

    const user = useSelector(state => state.currentUser.set)
    const comments = useSelector(state => state.articleComments.entities)
    const dispatch = useDispatch()

    useEffect(() => {
        if (Object.keys(user).length === 0) {
            setHidden("hidden")
        }
    }, [])

    function handleClick() {
        if (Object.keys(user).length === 0) {
            setShowAlert(true)
        }
    }

    function handleSubmit(e) {
        e.preventDefault()
        const form = document.getElementById("comment_form")
        const d = new Date();
        const date = `${d.getHours()}:${d.getMinutes()} AM ${d.getFullYear()}-${d.getDate()}-${d.getMonth()}`
        const newComment = {
            user_id: user.id,
            article_url: url,
            content: formComment,
            user: user.username,
            posted: date
        }
        fetch('/comments', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newComment)
        })
        dispatch(addedComment(newComment))
        form.reset()
    }

    return (
        <>
            <SignInAlert showAlert={showAlert} setShowAlert={setShowAlert} alertMessage={alertMessage} />
            <form onClick={handleClick} onSubmit={handleSubmit} id="comment_form">
                <div className="mb-6 w-11/12">
                    <label htmlFor="large-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Write Comment</label>
                    <textarea type="text" onChange={(e) => setformComment(e.target.value)} id="large-input" rows="3" cols="100" className="block p-4 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                </div>
                <div className={hidden}>
                    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Post</button>
                </div>
            </form>
        </>
    )
}

export default CommentForm