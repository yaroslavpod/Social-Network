import {addPost} from "../../../redux/profile-reducer";
import Posts from "./Posts";
import {connect} from "react-redux";

const mapStateToProps = (state) =>{
    return {
       postsData:state.profilePage.postsData,
       newPostElement: state.profilePage.newPostElement
    }
}

const PostsContainer = connect(mapStateToProps,{
    addPost
})(Posts);

export default PostsContainer;