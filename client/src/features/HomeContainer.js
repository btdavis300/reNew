import React, { useEffect } from 'react'
import HomeArticles from './HomeArticles';
import { fetchNews } from '../features/reducers/newsSlice';
import { fetchPopular } from './reducers/popularNewsSlice';
import { useDispatch, useSelector } from 'react-redux';
import PopularNews from './PopularNews';

function HomeContainer() {
    const dispatch = useDispatch()
    const articles = useSelector(state => state.newsArticles.entities)
    const popularArt = useSelector(state => state.popularNews.entities)
    // const latestArticles = articles.slice(1)

    console.log(popularArt)

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
        <div>
            {articles && homeArticles}
            {popularArt && popularArticles}
        </div>
    )
}

export default HomeContainer