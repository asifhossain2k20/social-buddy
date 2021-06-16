import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const DisplayPost = () => {
    const {btnId}= useParams()

    const [post,setPost]=useState({});
    useEffect(()=>{
        const url=`https://jsonplaceholder.typicode.com/posts/${btnId}`
        fetch(url)
        .then(res =>res.json())
        .then(data =>setPost(data))
    },[])
    const [comments,setComments]=useState({});
    useEffect(()=>{
        const url=`https://jsonplaceholder.typicode.com/comments?postId=${btnId}`
        fetch(url)
        .then(res =>res.json())
        .then(data =>setComments(data))
    },[])

    
    return (
        <div>
            <h2>{post.id}</h2>
            <h3>{post.title}</h3>
            <h4>{post.body}</h4>
            <h1>Total Comments : {comments.length}</h1>
        </div>
    );
};

export default DisplayPost;