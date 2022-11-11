import React from 'react'

function Footer() {
    return (
        <footer className="p-4 bg-white rounded-lg shadow md:px-6 md:py-8 dark:bg-gray-900">
            <div className="sm:flex sm:items-center sm:justify-between">
                <a href="https://flowbite.com/" className="flex items-center mb-4 sm:mb-0">
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">ReNew</span>
                </a>
                <ul className="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
                    <li>
                        <a href="https://btdavis300.github.io/" className="mr-4 hover:underline md:mr-6 ">Portfolio</a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/brennantdavis/" target="_blank" class="mr-4 hover:underline md:mr-6">LinkedIn</a>
                    </li>
                    <li>
                        <a href="https://github.com/btdavis300" target="_blank" class="mr-4 hover:underline md:mr-6 ">Github</a>
                    </li>
                    <li>
                        <a href="mailto: brennantd@gmail.com" class="hover:underline">Contact</a>
                    </li>
                </ul>
            </div>
            <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
            <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400"><a href="https://github.com/btdavis300/reNew" className="hover:underline">Github repo Click Here</a>
            </span>
        </footer>
    )
}

export default Footer