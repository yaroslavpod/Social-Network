import classes from "./ProfileInfo.module.css"
import Preloader from "../../common/Preloader/Preloader";
import profilePhoto from "../../../assets/image/profile_photo.png"
const ProfileInfo = (props) => {
    if(!props.profile){
        return <Preloader/>
    }
    return (
        <div className={classes.content}>
            <img className={classes.img_back_profile} src="http://i.imgur.com/um8pJ5M.png" alt=""/>
            <div className={classes.av_descr}>
                <img
                    src= {props.profile.photos.small?props.profile.photos.small:profilePhoto}
                    alt=""/>
                avatar +descr
            </div>
        </div>
    );
}

export default ProfileInfo;