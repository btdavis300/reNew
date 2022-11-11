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

    const commentListItems = comments.map(comment => <Comment key={comment.article_url} comment={comment} />)

    return (
        <div className='flex justify-center py-7 mb-7 border-b'>
            <div className='w-3/4 flex flex-row'>
                <div>
                    <CommentForm url={url} />
                </div>
                <div className='pt-7 w-3/4 block overflow-y-auto h-96'>
                    <h6 className='text-sm text-slate-400'>Displaying: {comments.length} comments:</h6>
                    <ul>
                        {commentListItems}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default CommentContainer