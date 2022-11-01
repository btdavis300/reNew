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
            <div className='flex flex-row w-3/4'>
                <div className='px-2'>
                    {homeArticles}
                </div>
                <div className='px-2'>
                    {popularArticles}
                </div>
            </div>
        </div>
    )
}

export default HomeContainer