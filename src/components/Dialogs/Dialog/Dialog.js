import {NavLink} from "react-router-dom";
import classes from "./Dialog.module.css"
import * as React from 'react';

const Dialog = (props) => {
    let path = "/dialogs/"+props.id;
    return (
        <div className={classes.dialog_name}>
            <img src={props.src} alt=""/>
            <NavLink to={path}>
                {props.name}
            </NavLink>
        </div>
    );
}

export default Dialog;