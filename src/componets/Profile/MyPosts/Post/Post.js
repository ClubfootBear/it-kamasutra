import React from 'react';
import s from './Post.module.css';

const Post = (props) => {

    debugger;
    return (
            <div className={s.item}>
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSK6GXBnIOPgZWZwSmA7uDdsldyoroOxrBZog&usqp=CAU" alt=""/>
                <div>
                    {props.message}
                </div>
                <span>LikeMe</span>
            </div>
    );
}

export default Post;