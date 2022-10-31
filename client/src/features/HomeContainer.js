import React, { useEffect } from 'react'
import HomeArticles from './HomeArticles';
import { fetchNews } from '../features/reducers/newsSlice';
import { fetchFirst } from '../features/reducers/firstArticleSlice';
import { fetchFirstImage } from '../features/reducers/firstImageSlice';
import { useDispatch, useSelector } from 'react-redux';
import HomeCenterArticle from './HomeCenterArticle';

function HomeContainer() {
    const dispatch = useDispatch()
    const articles = useSelector(state => state.newsArticles.entities)
    const latestArticles = articles.slice(1)

    const homeArticles = latestArticles.map(a => {
        return <HomeArticles key={a.title} article={a} />
    })


    useEffect(() => {
        dispatchSlices();
    }, [])

    function dispatchSlices() {
        const slices = [fetchNews(), fetchFirst(), fetchFirstImage()]

        Promise.all(slices.map(slice => dispatch(slice)))
    }


    return (
        <div>
            <HomeCenterArticle />
            {homeArticles}
        </div>
    )
}

export default HomeContainer