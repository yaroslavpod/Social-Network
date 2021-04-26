import classes from "./Posts.module.css"
import Post from "./Post/Post";
import React from "react";
import {addPostActionCreator, updateOnPostChangeActionCreator} from "../../../redux/profile-reducer";


const Posts = (props) => {
    let postElements = props.postsData.map((el) => {
        return <Post id={el.id} message={el.message} key={el.id} likesCount={el.likesCount}/>
    });
    let onAddPost = (e) => {
        props.addPost();
        //props.dispatch(addPostActionCreator());
        e.preventDefault();
    }
    let onChange = (e) => {
        let text = e.target.value;
        props.onPostChange(text);
        //props.dispatch(updateOnPostChangeActionCreator(text));
    }

    return (
        <div className={classes.posts}>
            <h3>My post</h3>
            <form className={classes.form}>
                <div>
                    <textarea onChange={onChange} cols="30" rows="5" value={props.newPostElement}/>
                </div>
                <div>
                    <button onClick={onAddPost}>
                        Отправить
                    </button>
                </div>
            </form>
            <div>
                New Post
                {postElements}
            </div>
        </div>
    );
}

export default Posts;