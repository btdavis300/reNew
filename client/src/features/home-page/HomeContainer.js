import React, { useEffect } from 'react'
import HomeArticles from './HomeArticles';
import { fetchNews } from '../reducers/newsSlice';
import { fetchPopular } from '../reducers/popularNewsSlice';
import { useDispatch, useSelector } from 'react-redux';
import PopularNews from './PopularNews';

function HomeContainer() {
    const dispatch = useDispatch()
    const articles = useSelector(state => state.newsArticles.entities)
    const popularArt = useSelector(state => state.popularNews.entities)
    // const latestArticles = articles.slice(1)

    const homeArticles = articles.map(a => <HomeArticles key={a.title} article={a} />)

    const popularArticles = popularArt.map(a => <PopularNews key={a.title} popularArt={a} />)

    useEffect(() => {
        dispatchSlices();
    }, [])

    function dispatchSlices() {
        const slices = [fetchNews(), fetchPopular()]

        Promise.all(slices.map(slice => dispatch(slice)))
    }

    return (
        <div className="flex justify-center">
            <div className='flex flex-1 px-32'>
                <div className='px-10 m-5 w-4/5 border-r'>
                    <h1 className='italic text-lg text-red-500'>Latest News</h1>
                    {homeArticles}
                </div>
                <div className='px-2 w-1/3 m-5'>
                    <h1 className='italic text-lg text-red-500'>Popular News</h1>
                    {popularArticles}
                </div>
            </div>
        </div>
    )
}

export default HomeContainer