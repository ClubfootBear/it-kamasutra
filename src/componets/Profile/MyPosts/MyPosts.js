import React from 'react';
import s from './MyPosts.module.css';
//Component import
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";

const MyPostsForm = (props) => {
    return (
            <div>
                <form onSubmit={props.handleSubmit}>
                    <div>
                        <Field component={"textarea"} name={"newPostText"} value={props.newPostText} />
                    </div>
                    <div>
                        <button>Add new Post</button>
                    </div>
                </form>
            </div>
    );
}

const MyPostReduxForm = reduxForm({
    form: 'PostForm'
})(MyPostsForm)


const MyPosts = (props) => {
    let messageItems = props.posts.map( p => <Post post={p.message} likesCount={p.likesCount}/>)

    const onAddNewPost = (dataForm) => {
        props.addNewPost(dataForm.newPostText)
    }

    return (<div className={s.postsBlock}>
            <h3>
                My posts
            </h3>
            <MyPostReduxForm
                onSubmit={onAddNewPost}
                newPostText={props.newPostText}/>
            <div>
                <div className={s.posts}>
                    {messageItems}
                </div>
            </div>
        </div>);
}

export default MyPosts;