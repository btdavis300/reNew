import React, { useEffect, useState } from 'react'

import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import jwt_decode from 'jwt-decode'

import { Dropdown } from 'flowbite-react'

import { fetchTopic } from '../reducers/newsTopicSlice'
import { titleClicked } from '../reducers/topicTitleSlice'
import { setShowArticle } from '../reducers/showArticleSlice'
import { setShowSignUp } from '../reducers/signupFormSlice'

import SearchBar from './SearchBar'
import Signup from '../login/Signup'
import Login from '../login/Login'

function NavBar() {
    const [user, setUser] = useState({})
    const [dropdown, setDropdown] = useState("hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700")
    const [showDrop, setShowDrop] = useState(false)

    const google = window.google;
    const history = useHistory()
    const dispatch = useDispatch()

    const dropDownIcon = <img src={user.picture} className="p-1 w-10 h-10 rounded-lg hover:cursor-pointer active:opacity-90 active:ring-gray-400" alt='' />


    function handleCallbackResponse(response) {
        console.log("Encoded JWT ID token: " + response.credential);
        const currentUser = jwt_decode(response.credential);
        console.log(currentUser)
        setUser(currentUser)
        document.getElementById("signInDiv").hidden = true;
        document.getElementById("profileDropdown").style.display = "block";
    }

    useEffect(() => {
        google.accounts.id.initialize({
            client_id: "826420932833-kroeb4i3fvl91qrf8c8di9ocbl4bmhgj.apps.googleusercontent.com",
            callback: handleCallbackResponse
        });

        google.accounts.id.renderButton(
            document.getElementById("signInDiv"),
            { theme: "outline", size: "large" }
        )
    }, [])


    function handleDropdown() {
        setShowDrop(!showDrop)
        if (!showDrop) {
            setDropdown("z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 absolute")
        } else {
            setDropdown("hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700")
        }
    }

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

    function handleSignOut() {
        setUser({})
        document.getElementById("signInDiv").hidden = false;
        document.getElementById("profileDropdown").style.display = "none";
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
                    <div id="signInDiv">
                    </div>
                    {user &&
                        <div id="profileDropdown" style={{ display: "none" }}>
                            <button id="dropdownDefault" onClick={handleDropdown} className="text-black bg-slate-300 hover:bg-slate-400 focus:ring-4 focus:outline-none focus:ring-slate-300 font-medium rounded-lg text-sm px-4 py-1 text-center inline-flex items-center dark:bg-slate-600 dark:hover:bg-slate-700 dark:focus:ring-slate-800" type="button">{dropDownIcon} {user.name} <svg className="ml-2 w-4 h-4 text-black" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg></button>

                            <div id="dropdown" className={dropdown}>
                                <ul className="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefault">
                                    <li>
                                        <a href="#" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                                    </li>
                                    <li>
                                        <a href="#" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
                                    </li>
                                    <li>
                                        <a href="#" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
                                    </li>
                                    <li>
                                        <a href="#" onClick={handleSignOut} className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    }
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
            <div>
                <Signup />
                {/* <Login /> */}
            </div>
        </div>
    )
}

export default NavBar