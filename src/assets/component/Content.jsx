import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { blogPosts } from '../data/data'
import "../style/content.scss"

const Content = () => {
    const params=useParams()//path de ki yazanı getirir
    const blogPath=params.blogID
  return (
    <div className='content'>
        <img src={blogPosts[blogPath-1].img}alt="foto" />
        <h3>{blogPosts[blogPath-1].header}</h3>
        <p>
        {blogPosts[blogPath-1].text}
            </p>
            <div className="link">
    <Link to={"/sonay/blog"}>Geri dön</Link>
    </div></div>
  )
}

export default Content