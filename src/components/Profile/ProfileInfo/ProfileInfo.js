import classes from "./ProfileInfo.module.css"
import profilePhoto from "../../../assets/image/profile_photo.png"
import ProfileStatus from './ProfileStatus.js'
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import * as React from 'react';
const ProfileInfo = (props) => {
    return (
        <div className={classes.content}>
            <div className={classes.av_descr}>
                <img
                    src= {props.profile.photos.small?props.profile.photos.small:profilePhoto}
                    alt=""/>
                    <div className={classes.fullName}>
                        {props.profile.fullName}
                    </div>

                    <ProfileStatusWithHooks status={props.status} updateUserStatus={props.updateUserStatus} getUserStatus={props.getUserStatus}/>
                avatar +descr
            </div>
        </div>
    );
}

export default ProfileInfo;