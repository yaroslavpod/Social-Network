import classes from "./Header.module.css"
import {NavLink} from "react-router-dom";
import React from 'react'
const Header =(props)=> {

    return <header className={classes.header}>
            <div className={classes.left_img}>
                <img src="https://w7.pngwing.com/pngs/437/512/png-transparent-check-mark-computer-icons-right-or-wrong-miscellaneous-angle-text.png" alt=""/>
            </div>
            <div className={classes.login}>
                {props.isAuth
                    ? <div className={classes.loginName}>{props.login} <button onClick={props.logout} >Logout</button></div>
                    : <NavLink to={"/login"} >Login</NavLink>
                }
            </div>
        </header>

}

export default Header;