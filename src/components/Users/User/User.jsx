import classes from "./User.module.css";
import * as React from "react";
import {NavLink} from "react-router-dom";
import userPhoto from "../../../assets/image/img.png";

const User = ({user, followWaiting, unfollowThunkCreator, followThunkCreator, ...props}) => {
    let el = user;
    return <div className={classes.usersSearch}>
        <div className={classes.avatarStyle}>
            <div>
                <NavLink to={"/profile/" + el.id}>
                    <img src={el.photos.small != null ? el.photos.small : userPhoto} alt=""
                         className={classes.avatar}/>
                </NavLink>
            </div>
            <div className={classes.buttons}>
                {el.followed
                    ? <button disabled={followWaiting.some(id => id === el.id)} onClick={() => {
                        unfollowThunkCreator(el.id)
                    }}>Unfollow</button>
                    : <button disabled={followWaiting.some(id => id === el.id)} onClick={() => {
                        followThunkCreator(el.id)
                    }}>Follow</button>}

            </div>
        </div>
        <div className={classes.userInfo}>
            <div className={classes.info}>
                <div className={classes.infoName}>
                    {el.name}
                </div>
                <div>
                    {el.status}
                </div>
            </div>
            <div className={classes.city}>
                <div>
                    {"el.location.city"},
                </div>
                <div>
                    {"el.location.country"}
                </div>
            </div>
        </div>
    </div>
}

export default User;
