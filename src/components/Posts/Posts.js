import React, { useEffect, useState } from 'react';
import PostsCard from './PostsCard';
import { FaArrowAltCircleUp } from "react-icons/fa";

const Posts = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(data => setPosts(data))
    }, [])
    return (
        <div>
            <div className='md:grid grid-cols-3 gap-6 py-6'>
                {
                    posts.map(item => <PostsCard key={item.id} postsData={item} />)
                }
            </div>
            <div className='back-btn'>
                <a className='text-white back-link' href='#' ><FaArrowAltCircleUp className='icon' /></a>
            </div>
        </div>
    );
};

export default Posts;