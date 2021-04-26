import React from "react";
import {addPost, onPostChange} from "../../../redux/profile-reducer";
import Posts from "./Posts";
import {connect, ReactReduxContext} from "react-redux";



/*const PostsContainer = (props) => {

    return <ReactReduxContext.Consumer>
    {   store => {
        let dispatch = store.dispatch();
        let state = store.getState();
        let addPost = () => {
            dispatch(addPostActionCreator());

        }
        let onPostChange = (e) => {
            dispatch(updateOnPostChangeActionCreator(e));
        }
       return <Posts addPost={addPost} onPostChange={onPostChange} postsData={state.profilePage.postsData} newPostElement={state.profilePage.newPostElement}/>
    }
    }
    </ReactReduxContext.Consumer>;
}*/

const mapStateToProps = (state) =>{
    return {
       postsData:state.profilePage.postsData,
       newPostElement: state.profilePage.newPostElement
    }

}
const mapDispatchToProps = (dispatch) =>{
    return
}

const PostsContainer = connect(mapStateToProps,{
    addPost,
    onPostChange
})(Posts);

export default PostsContainer;