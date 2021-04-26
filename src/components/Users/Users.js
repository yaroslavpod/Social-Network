import classes from "./Users.module.css";
import userPhoto from "../../assets/image/img.png";
import * as React from "react";
import {NavLink} from "react-router-dom";
import {usersAPI} from "../../api/api";
import {followThunkCreator} from "../../redux/users-reducer";


const Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    pagesCount = pagesCount >= 30 ? 10 : pagesCount;
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return <div className={classes.wrapper}>
        <div className={classes.pageNumbers}>
            {pages.map(p => {
                return <span className={props.currentPage === p ? classes.active : ""}
                             onClick={(e) => {
                                 props.onPageModed(p)

                             }}>{p}</span>

            })}
        </div>
        {
            props.usersData.map((el) =>
                <div key={el.id} className={classes.usersSearch}>
                    <div className={classes.avatarStyle}>
                        <div>
                            <NavLink to={"/profile/" + el.id}>
                                <img src={el.photos.small != null ? el.photos.small : userPhoto} alt=""
                                     className={classes.avatar}/>
                            </NavLink>
                        </div>
                        <div className={classes.buttons}>
                            {el.followed
                                ? <button disabled={props.followWaiting.some(id => id === el.id)} onClick={() => {
                                    props.unfollowThunkCreator(el.id)
                                }}>Unfollow</button>
                                : <button disabled={props.followWaiting.some(id => id === el.id)} onClick={() => {
                                    props.followThunkCreator(el.id)
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
                </div>)
        }
    </div>
}

export default Users;
