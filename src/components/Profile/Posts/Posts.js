import classes from "./Posts.module.css"
import Post from "./Post/Post";
import React from "react";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, requiredField} from "../../../helpers/validators/validators";
import {Textarea} from "../../common/FormComponents/FormComponents";


const Posts = (props) => {
    let postElements = props.postsData.map((el) => {
        return <Post id={el.id} message={el.message} key={el.id} likesCount={el.likesCount}/>
    });

    let addPostWall=(values)=>{
        props.addPost(values.newPostMessage);
    }

    return (
        <div className={classes.posts}>
            <h3>My post</h3>
            <AddNewPostForm onSubmit={addPostWall}/>
            <div>
                New Post
                {postElements}
            </div>
        </div>
    );
}
const maxLength20 = maxLengthCreator(20);
let AddNewPostForm =(props) =>{
    return <form className={classes.form} onSubmit={props.handleSubmit}>
        <div>
            <Field validate={[requiredField,maxLength20]} cols="30" rows="5" component={Textarea} name="newPostMessage" placeholder="Enter your post here"/>
        </div>
        <div>
            <button>
                Отправить
            </button>
        </div>
    </form>
}
AddNewPostForm = reduxForm({form:"AddPostForm"})(AddNewPostForm)

export default Posts;