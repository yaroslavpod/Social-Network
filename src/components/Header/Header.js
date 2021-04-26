import classes from "./Header.module.css"
import {NavLink} from "react-router-dom";
const Header =(props)=> {
    return (
        <header className={classes.header}>
            <div className={classes.left_img}>
                <img src="https://w7.pngwing.com/pngs/437/512/png-transparent-check-mark-computer-icons-right-or-wrong-miscellaneous-angle-text.png" alt=""/>
            </div>
            <div className={classes.login}>
                {props.isAuth ? props.login :
                <NavLink to="/login" >Login</NavLink>}
            </div>
        </header>
    );
}

export default Header;