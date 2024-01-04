import React from 'react'
import "../style/blog.scss"
import {blogPosts} from "../data/data"
import { Link } from 'react-router-dom'
const Blog = () => {
  return (
    <div>
    <h2 className='blog'>BLOĞUMA HOŞGELDİNİZ.</h2>
    <ul className='haber'>
      {
        blogPosts.map(haber=>
          <li key={haber.id}><Link to={String(haber.id)}>{haber.header}</Link></li>
          )
      }
    </ul>
    </div>
  )
}

export default Blog