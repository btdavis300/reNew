import React from 'react'
import { useHistory}  from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { fetchTopic } from './reducers/newsTopicSlice';

function NavBar() {
    const history = useHistory()
    const dispatch = useDispatch()

    function handleClick(e){
        const topic = e.target.textContent.toLowerCase()
        dispatch(fetchTopic(topic))
    }

    return (
        <div className='flex justify-center'>
        <div className='flex flex-col items-center pt-3  border-b border-black w-11/12'>
            <div>
                <h1 className='text-3xl font-bold hover:cursor-pointer' onClick={() => history.push('/')}>ReNew</h1>
            </div>
            <div>
                <ul className='flex flex-row'>
                    <li className='p-1 hover:text-slate-600 hover:cursor-pointer'>Home</li>
                    <li className='p-1 hover:text-slate-600 hover:cursor-pointer' onClick={handleClick}>Arts</li>
                    <li className='p-1 hover:text-slate-600 hover:cursor-pointer' onClick={handleClick}>Books</li>
                    <li className='p-1 hover:text-slate-600 hover:cursor-pointer' onClick={handleClick}>Business</li>
                    <li className='p-1 hover:text-slate-600 hover:cursor-pointer' onClick={handleClick}>Fashion</li>
                    <li className='p-1 hover:text-slate-600 hover:cursor-pointer' onClick={handleClick}>Food</li>
                    <li className='p-1 hover:text-slate-600 hover:cursor-pointer' onClick={handleClick}>Health</li>
                    <li className='p-1 hover:text-slate-600 hover:cursor-pointer' onClick={handleClick}>Home</li>
                    <li className='p-1 hover:text-slate-600 hover:cursor-pointer' onClick={handleClick}>Insider</li>
                    <li className='p-1 hover:text-slate-600 hover:cursor-pointer' onClick={handleClick}>Movies</li>
                    <li className='p-1 hover:text-slate-600 hover:cursor-pointer' onClick={handleClick}>Opinion</li>
                    <li className='p-1 hover:text-slate-600 hover:cursor-pointer' onClick={handleClick}>Politics</li>
                    {/* <li className='p-1 hover:text-slate-600 hover:cursor-pointer' onClick={handleClick}>Real Estate</li> */}
                    <li className='p-1 hover:text-slate-600 hover:cursor-pointer' onClick={handleClick}>Science</li>
                    <li className='p-1 hover:text-slate-600 hover:cursor-pointer' onClick={handleClick}>Sports</li>
                    <li className='p-1 hover:text-slate-600 hover:cursor-pointer' onClick={handleClick}>Technology</li>
                    <li className='p-1 hover:text-slate-600 hover:cursor-pointer' onClick={handleClick}>Theater</li>
                    <li className='p-1 hover:text-slate-600 hover:cursor-pointer' onClick={handleClick}>Travel</li>
                    <li className='p-1 hover:text-slate-600 hover:cursor-pointer' onClick={handleClick}>US</li>
                    <li className='p-1 hover:text-slate-600 hover:cursor-pointer' onClick={handleClick}>World</li>
                </ul>
            </div>
        </div>
        </div>
    )
}

export default NavBar