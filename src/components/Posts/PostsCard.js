import React from 'react';
import { useHistory } from 'react-router';

const PostsCard = ({ postsData }) => {
    const { id, title,  } = postsData;

    const history = useHistory()
    const detailsHandler = () => {
        history.push(`/posts/${id}`)
    }
    return (
        <section className='shadow-lg p-10 text-center card my-6 rounded-xl'>
            <p>Id: {id}</p>
            <h2 className='text-xl'><span className='font-semibold'>Title:</span> {title}</h2>
            <button onClick={detailsHandler} className='btn mt-6'>Details</button>
        </section>
    );
};

export default PostsCard;