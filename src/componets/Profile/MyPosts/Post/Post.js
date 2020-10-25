import React from 'react';
import s from './Post.module.css';

const Post = (props) => {

    return (
            <div className={s.item}>
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSK6GXBnIOPgZWZwSmA7uDdsldyoroOxrBZog&usqp=CAU" alt=""/>
                <div>
                    {props.post}
                    <span>{props.likesCount}</span>
                </div>

            </div>
    );
}

export default Post;