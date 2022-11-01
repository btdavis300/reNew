import React from 'react'
import { useHistory}  from 'react-router-dom'

function NavBar() {
    const history = useHistory()

    return (
        <div className='flex justify-center'>
        <div className='flex flex-col items-center pt-3  border-b border-black w-11/12'>
            <div>
                <h1 className='text-3xl font-bold hover:cursor-pointer' onClick={() => history.push('/')}>ReNew</h1>
            </div>
            <div>
                <ul className='flex flex-row'>
                    <li className='p-1 hover:text-slate-600 hover:cursor-pointer'>Home</li>
                    <li className='p-1 hover:text-slate-600 hover:cursor-pointer'>Arts</li>
                    <li className='p-1 hover:text-slate-600 hover:cursor-pointer'>Books</li>
                    <li className='p-1 hover:text-slate-600 hover:cursor-pointer'>Business</li>
                    <li className='p-1 hover:text-slate-600 hover:cursor-pointer'>Fashion</li>
                    <li className='p-1 hover:text-slate-600 hover:cursor-pointer'>Food</li>
                    <li className='p-1 hover:text-slate-600 hover:cursor-pointer'>Health</li>
                    <li className='p-1 hover:text-slate-600 hover:cursor-pointer'>Home</li>
                    <li className='p-1 hover:text-slate-600 hover:cursor-pointer'>Insider</li>
                    <li className='p-1 hover:text-slate-600 hover:cursor-pointer'>Movies</li>
                    <li className='p-1 hover:text-slate-600 hover:cursor-pointer'>Opinion</li>
                    <li className='p-1 hover:text-slate-600 hover:cursor-pointer'>Politics</li>
                    <li className='p-1 hover:text-slate-600 hover:cursor-pointer'>Real Estate</li>
                    <li className='p-1 hover:text-slate-600 hover:cursor-pointer'>Science</li>
                    <li className='p-1 hover:text-slate-600 hover:cursor-pointer'>Sports</li>
                    <li className='p-1 hover:text-slate-600 hover:cursor-pointer'>Technology</li>
                    <li className='p-1 hover:text-slate-600 hover:cursor-pointer'>Theater</li>
                    <li className='p-1 hover:text-slate-600 hover:cursor-pointer'>Travel</li>
                    <li className='p-1 hover:text-slate-600 hover:cursor-pointer'>US</li>
                    <li className='p-1 hover:text-slate-600 hover:cursor-pointer'>World</li>
                </ul>
            </div>
        </div>
        </div>
    )
}

export default NavBar