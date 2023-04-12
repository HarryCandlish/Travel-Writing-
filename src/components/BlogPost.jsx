import React, {useState, useEffect} from 'react'
import { marked } from 'marked'
import { useParams } from 'react-router-dom'

const BlogPost = () => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('../data/posts')
            const data = await response.json()
            setPosts(data.posts)
        }
        fetchData()
    }, [])

    return (
        <div>
        <h1>Post</h1>
        <ul>
          {posts.map(post => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      </div>
    )
}

export default BlogPost