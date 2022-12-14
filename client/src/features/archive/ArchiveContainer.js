import React from 'react'

import { useSelector, useDispatch } from 'react-redux'

import { setAlert } from '../reducers/alertSlice'

import ArchiveArticles from './ArchiveArticles'

function ArchiveContainer() {

    const articles = useSelector(state => state.userArticles.entities)
    const user = useSelector(state => state.currentUser.set)
    const alert = useSelector(state => state.alert.set)

    const dispatch = useDispatch()

    const archivedArticles = articles.map(article => <ArchiveArticles key={article.id} article={article} />)

    function handleAlert() {
        dispatch(setAlert("hidden"))
    }

    return (
        <div className='flex flex-col items-center'>
            <div className={alert}>
                <div id="alert-3" class="fixed top-0 flex p-4 mb-4 bg-red-100 rounded-lg dark:bg-red-200" role="alert">
                    <svg aria-hidden="true" class="flex-shrink-0 w-5 h-5 text-red-700 dark:text-red-800" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
                    <span class="sr-only">Info</span>
                    <div class="ml-3 text-sm font-medium text-red-700 dark:text-red-800">
                        Removed Article
                    </div>
                    <button onClick={handleAlert} type="button" class="ml-auto -mx-1.5 -my-1.5 bg-red-100 text-red-500 rounded-lg focus:ring-2 focus:ring-red-400 p-1.5 hover:bg-red-200 inline-flex h-8 w-8 dark:bg-red-200 dark:text-red-600 dark:hover:bg-red-300" data-dismiss-target="#alert-3" aria-label="Close">
                        <span class="sr-only">Close</span>
                        <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    </button>
                </div>
            </div>
            <div className='w-5/6 pt-7'>
                <h1 className='text-3xl text-black font-bold'>Saved Articles</h1>
                <h1 className='text-md italic text-slate-600 pb-1'>from most recent:</h1>
            </div>
            <div className='flex justify-center'>
                <div className='flex flex-col w-5/6'>
                    {archivedArticles}
                </div>
            </div>
        </div>
    )
}

export default ArchiveContainer