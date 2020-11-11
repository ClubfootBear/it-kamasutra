import React from 'react';
import s from './MyPosts.module.css';
//Component import
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {TextArea} from "../../FormsControl/Formscontrol";


const maxLength10 = maxLengthCreator(3)


const MyPostsForm = (props) => {
    // validate={[required, maxLength10]} value={props.newPostText} validate={[maxLength10]}
    return (
            <div>
                <form onSubmit={props.handleSubmit}>
                    <div>
                        <Field
                            component={TextArea}
                            name={"newPostText"}
                            placeholder={'Post Message'}
                            validate={[maxLength10, required]}
                        />
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
                // newPostText={props.newPostText}
            />
            <div>
                <div className={s.posts}>
                    {messageItems}
                </div>
            </div>
        </div>);
}

export default MyPosts;