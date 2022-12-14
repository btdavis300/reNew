import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { fetchSearch } from '../reducers/newsSearchSlice'
import { setSearchQuery } from '../reducers/searchQuerySlice'

function SearchBar() {
    const [query, setQuery] = useState("")
    const dispatch = useDispatch()
    const history = useHistory()

    function handleSubmit(e) {
        const form = document.getElementById("search-bar");
        e.preventDefault();
        dispatch(fetchSearch(query))
        dispatch(setSearchQuery(query))
        history.push('./results')
        form.reset();
    }

    return (
        <form onSubmit={handleSubmit} id="search-bar">
            <label htmlFor="default-search" className="mb-2 text-xs font-medium text-gray-900 sr-only dark:text-gray-300">Search</label>
            <div className="relative">
                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                    <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                </div>
                <input onChange={(e) => setQuery(e.target.value)} type="search" id="default-search" className="block p-2 pl-10 w-full text-xs text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-slate-500 focus:border-slate-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-slate-500 dark:focus:border-slate-500" placeholder="Search" required />
                <button type="submit" className="text-black absolute right-1 bottom-1 bg-slate-300 hover:bg-slate-400 focus:ring-4 focus:outline-none focus:ring-slate-300 font-medium rounded-lg text-xs px-4 py-1 dark:bg-slate-600 dark:hover:bg-slate-700 dark:focus:ring-slate-800">Go</button>
            </div>
        </form>
    )
}

export default SearchBar