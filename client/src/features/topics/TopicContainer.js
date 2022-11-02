import React from 'react'
import { useSelector } from 'react-redux';
import MainArticle from './MainArticle';
import TopicArticles from './TopicArticles';

function TopicContainer() {
    const articles = useSelector(state => state.newsTopic.entities)
    const mainArt = articles[0]
    const topicArts = articles.slice(1)

    console.log(mainArt)

    const topicArticles = topicArts.map(a => <TopicArticles key={a.title} article={a} />)

  return (
    <div className='flex flex-col items-center p-10'>
      <div className='w-11/12'>
      <div>
      {/* <a href={mainArt.url} target="_blank"> */}
        <MainArticle article={mainArt}/>
        {/* </a> */} 
      </div>
      <div className='flex flex-wrap'>
        {topicArticles}
      </div>
      </div>
    </div>
  )
}

export default TopicContainer