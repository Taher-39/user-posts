import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import commentImg from '../../Imgs/comments.jpg';
import detailsImg from '../../Imgs/details.png';

const PostDetails = () => {
    const { id } = useParams()
    const [postDetail, setPostDetail] = useState({})
    const [postComments, setPostComments] = useState([])
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(res => res.json())
            .then(data => setPostDetail(data))
    }, [id])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then(res => res.json())
            .then(data => setPostComments(data))
    }, [])

    const userPostComments = postComments.filter(item => item.postId === postDetail.userId);
    return ( 
        <div className='details'>
            <h1 className='text-center text-2xl font-semibold py-6'>Post Detail</h1>
            <div className='px-10'>
                <div className="max-w-lg mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-4xl">
                    <div className="md:flex">
                        <div className="md:flex-shrink-0">
                            <img className="h-48 w-full object-cover md:h-full md:w-48" src={detailsImg} alt="CommentImg" />
                        </div>
                        <div className="p-8">
                            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Post-Id: {postDetail.userId}</div>
                            <p className="mt-1 text-lg leading-tight font-medium text-black">Name: {postDetail.title}</p>
                            <p className="mt-2 text-gray-500 border-left">{postDetail.body}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='post-comment p-6'>
                <h1 className='text-center text-2xl font-semibold pt-6'>Post Comments</h1>
                <div>
                    {
                        userPostComments.map(item => <div key={item.id} className='my-6'>
                            <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
                                <div className="md:flex">
                                    <div className="md:flex-shrink-0">
                                        <img className="h-48 w-full object-cover md:h-full md:w-48" src={commentImg} alt="CommentImg" />
                                    </div>
                                    <div className="p-8">
                                        <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Post-Id: {item.postId}</div>
                                        <p className="mt-1 text-lg leading-tight font-medium text-black hover:underline">Name: {item.name}</p>
                                        <p className="mt-1 text-lg leading-tight font-medium text-black">Email: {item.email}</p>
                                        <p className="mt-2 text-gray-500 border-left">{item.body}</p>
                                    </div>
                                </div>
                            </div>
                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default PostDetails;