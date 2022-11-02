import React from 'react'
import { useHistory}  from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { fetchTopic } from './reducers/newsTopicSlice';
import { titleClicked } from './reducers/topicTitleSlice';

function NavBar() {
    const history = useHistory()
    const dispatch = useDispatch()

    function handleClick(e){
        const topic = e.target.textContent.toLowerCase()
        dispatch(fetchTopic(topic))
        dispatch(titleClicked(topic.toUpperCase()))
        history.push("./newssection")
    }

    function handleHome(){
        history.push("./")
    }

    return (
        <div className='flex justify-center'>
        <div className='flex flex-col items-center py-3 border-b-4 border-double border-black w-11/12'>
            <div>
                <h1 className='text-3xl font-bold hover:cursor-pointer' onClick={() => history.push('/')}>ReNew</h1>
            </div>
            <div>
                <ul className='flex flex-row'>
                    <li className='p-1 hover:text-slate-600 hover:cursor-pointer hover:bg-slate-100 rounded' onClick={handleHome}>Home</li>
                    <li className='p-1 hover:text-slate-600 hover:cursor-pointer hover:bg-slate-100 rounded' onClick={handleClick}>Arts</li>
                    <li className='p-1 hover:text-slate-600 hover:cursor-pointer hover:bg-slate-100 rounded' onClick={handleClick}>Books</li>
                    <li className='p-1 hover:text-slate-600 hover:cursor-pointer hover:bg-slate-100 rounded' onClick={handleClick}>Business</li>
                    <li className='p-1 hover:text-slate-600 hover:cursor-pointer hover:bg-slate-100 rounded' onClick={handleClick}>Fashion</li>
                    <li className='p-1 hover:text-slate-600 hover:cursor-pointer hover:bg-slate-100 rounded' onClick={handleClick}>Food</li>
                    <li className='p-1 hover:text-slate-600 hover:cursor-pointer hover:bg-slate-100 rounded' onClick={handleClick}>Health</li>
                    <li className='p-1 hover:text-slate-600 hover:cursor-pointer hover:bg-slate-100 rounded' onClick={handleClick}>Home</li>
                    <li className='p-1 hover:text-slate-600 hover:cursor-pointer hover:bg-slate-100 rounded' onClick={handleClick}>Insider</li>
                    <li className='p-1 hover:text-slate-600 hover:cursor-pointer hover:bg-slate-100 rounded' onClick={handleClick}>Movies</li>
                    <li className='p-1 hover:text-slate-600 hover:cursor-pointer hover:bg-slate-100 rounded' onClick={handleClick}>Opinion</li>
                    <li className='p-1 hover:text-slate-600 hover:cursor-pointer hover:bg-slate-100 rounded' onClick={handleClick}>Politics</li>
                    {/* <li className='p-1 hover:text-slate-600 hover:cursor-pointer hover:bg-slate-100 rounded' onClick={handleClick}>Real Estate</li> */}
                    <li className='p-1 hover:text-slate-600 hover:cursor-pointer hover:bg-slate-100 rounded' onClick={handleClick}>Science</li>
                    <li className='p-1 hover:text-slate-600 hover:cursor-pointer hover:bg-slate-100 rounded' onClick={handleClick}>Sports</li>
                    <li className='p-1 hover:text-slate-600 hover:cursor-pointer hover:bg-slate-100 rounded' onClick={handleClick}>Technology</li>
                    <li className='p-1 hover:text-slate-600 hover:cursor-pointer hover:bg-slate-100 rounded' onClick={handleClick}>Theater</li>
                    <li className='p-1 hover:text-slate-600 hover:cursor-pointer hover:bg-slate-100 rounded' onClick={handleClick}>Travel</li>
                    <li className='p-1 hover:text-slate-600 hover:cursor-pointer hover:bg-slate-100 rounded' onClick={handleClick}>US</li>
                    <li className='p-1 hover:text-slate-600 hover:cursor-pointer hover:bg-slate-100 rounded' onClick={handleClick}>World</li>
                </ul>
            </div>
        </div>
        </div>
    )
}

export default NavBar