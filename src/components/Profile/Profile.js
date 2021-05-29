import classes from "./Profile.module.css"
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import PostsContainer from "./Posts/PostsContainer";
import Preloader from "../common/Preloader/Preloader";
import React from 'react'

const Profile = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div className={classes.content}>
            <ProfileInfo profile={props.profile} {...props}/>
            <PostsContainer/>
        </div>
    );
}


export default Profile;