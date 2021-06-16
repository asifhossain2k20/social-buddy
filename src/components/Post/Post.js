import React from 'react';
import { useHistory } from 'react-router-dom';

const Post = (props) => {
    const {id,title, body} = props.post;
    const history = useHistory();
    const btnClick=(btnId)=>{
        const url=`post/${btnId}`
        history.push(url);

    }
    return (
        <div>
            <h2><strong>ID : {id}</strong> {title}</h2>
            <p>{body}</p>
            <button onClick={()=>btnClick(id)}>Click me For More INFO</button>
        </div>
    );
};

export default Post;