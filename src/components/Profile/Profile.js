import classes from "./Profile.module.css"
import Posts from "./Posts/Posts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";


const Profile = () => {
    return (
        <div className={classes.content}>
            <ProfileInfo/>
            <Posts/>
        </div>
    );
}

export default Profile;