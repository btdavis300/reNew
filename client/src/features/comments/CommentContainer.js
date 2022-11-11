import React, { useEffect } from 'react'

import { fetchComments } from '../reducers/articleCommentsSlice'
import { useSelector, useDispatch } from 'react-redux'

import CommentForm from './CommentForm'
import Comment from './Comment'

function CommentContainer({ url }) {
    const dispatch = useDispatch()
    const comments = useSelector(state => state.articleComments.entities)

    useEffect(() => {
        dispatch(fetchComments(url))
    }, [])

    const commentListItems = comments.map(comment => <Comment key={comment.id} comment={comment} />)

    return (
        <div className='flex justify-center pt-7'>
            <div className='w-1/2 flex flex-col'>
                <div>
                    <CommentForm />
                </div>
                <div className='pt-7'>
                    <ul>
                        {commentListItems}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default CommentContainer