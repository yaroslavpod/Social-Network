import classes from "./Profile.module.css"
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import PostsContainer from "./Posts/PostsContainer";


    const Profile = (props) => {
        return (
            <div className={classes.content}>
                <ProfileInfo profile={props.profile}/>
                <PostsContainer/>
            </div>
        );
    }

export default Profile;