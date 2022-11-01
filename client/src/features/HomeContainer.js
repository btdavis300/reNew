import React, { useEffect, useState } from 'react'
import HomeArticles from './HomeArticles';
import { fetchNews } from '../features/reducers/newsSlice';
import { fetchPopular } from './reducers/popularNewsSlice';
import { useDispatch, useSelector } from 'react-redux';
import PopularNews from './PopularNews';

function HomeContainer() {
    const [imageList, setImageList] = useState([])
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
                    {homeArticles}
                </div>
                <div className='px-2 w-1/3 m-5'>
                    {popularArticles}
                </div>
            </div>
        </div>
    )
}

export default HomeContainer