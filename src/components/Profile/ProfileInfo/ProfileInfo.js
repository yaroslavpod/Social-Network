import classes from "./ProfileInfo.module.css"
import profilePhoto from "../../../assets/image/profile_photo.png"
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import * as React from 'react';
import ProfileStatus from "./ProfileStatus";

const ProfileInfo = ({profile,getUserStatus,updateUserStatus,status,...props}) => {
    return (
        <div className={classes.content}>
            <div className={classes.av_descr}>
                <img
                    src= {profile.photos.small?profile.photos.small:profilePhoto}
                    alt=""/>
                    <div className={classes.fullName}>
                        {profile.fullName}
                    </div>
                    <ProfileStatusWithHooks status={status} updateUserStatus={updateUserStatus} getUserStatus={getUserStatus} c{...props}/>
                avatar +descr
            </div>
        </div>
    );
}

export default ProfileInfo;