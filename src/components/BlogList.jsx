import React from 'react'
import { Link } from "react-router-dom";
import posts from "../data/posts.js";

const BlogList = () => {
  return (
    <div>
        <ul>
            {posts.map((post) => (
                <li key={post.slug}>
                        <Link to={`blog/${post.slug}`}><h1>{post.title}</h1></Link>
                    <p>{post.excerpt}</p>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default BlogList