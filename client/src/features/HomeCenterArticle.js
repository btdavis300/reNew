import React, { useState } from 'react'
import { useSelector } from 'react-redux'

function HomeCenterArticle() {
    const firstArticle = useSelector(state => state.firstArticle.homePageArticle)
    const firstImage = useSelector(state => state.firstImage.image)



    return (
        <>
            <div>
                <h1>{firstArticle.title}</h1>
                <img src={firstImage.url} alt="front page article" />
                <p>{firstArticle.abstract}</p>
            </div>
        </>
    )
}

export default HomeCenterArticle