import React, { useEffect, useState } from 'react'

import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import jwt_decode from 'jwt-decode'

import { fetchTopic } from '../reducers/newsTopicSlice'
import { titleClicked } from '../reducers/topicTitleSlice'
import { setShowArticle } from '../reducers/showArticleSlice'
import { setShowSignUp } from '../reducers/signupFormSlice'

import SearchBar from './SearchBar'
import Signup from '../login/Signup'
import Login from '../login/Login'

function NavBar() {
    const [user, setUser] = useState({})


    function handleCallbackResponse(response) {
        console.log("Encoded JWT ID token: " + response.credential);
        const currentUser = jwt_decode(response.credential);
        console.log(currentUser)
        setUser(currentUser)
        document.getElementById("signInDiv").hidden = true;
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

    function onSignUp() {
        dispatch(setShowSignUp(true))
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
                    <div>
                        {user &&
                            <div>
                                <img src={user.picture} alt='' />
                                <h3>{user.name}</h3>
                            </div>
                        }
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