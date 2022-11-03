import React from 'react'
import { Dropdown } from 'flowbite-react'
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchTopic } from '../reducers/newsTopicSlice'
import { titleClicked } from '../reducers/topicTitleSlice'
import { setShowArticle } from '../reducers/showArticleSlice'
import SearchBar from './SearchBar'

function NavBar() {
    const history = useHistory()
    const dispatch = useDispatch()

    function handleClick(e) {
        const topic = e.target.textContent.toLowerCase()
        dispatch(fetchTopic(topic))
        dispatch(titleClicked(topic.toUpperCase()))
        dispatch(setShowArticle(false))
        history.push('/topic')
    }

    function handleHome() {
        history.push("./")
    }

    return (
        <div className='flex justify-center'>
            <div className='flex flex-col items-center py-3 border-b-4 border-double border-black w-11/12'>
                <div className='flex flex-row justify-between items-center w-full pb-2'>
                    <div>
                        <SearchBar />
                    </div>
                    <div>
                        <h1 className='text-3xl font-bold hover:cursor-pointer' onClick={() => history.push('/')}>ReNew</h1>
                    </div>
                    <div>
                        <Dropdown label="Login">
                            <Dropdown.Item>
                                Dashboard
                            </Dropdown.Item>
                            <Dropdown.Item>
                                Settings
                            </Dropdown.Item>
                            <Dropdown.Item>
                                Earnings
                            </Dropdown.Item>
                            <Dropdown.Item>
                                Sign out
                            </Dropdown.Item>
                        </Dropdown>
                    </div>
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