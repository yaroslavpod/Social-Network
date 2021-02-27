import classes from "./Header.module.css"
const Header =()=> {
    return (
        <header className={classes.header}>
            <div className={classes.left_img}>
                <img src="https://w7.pngwing.com/pngs/437/512/png-transparent-check-mark-computer-icons-right-or-wrong-miscellaneous-angle-text.png" alt=""/>
            </div>
        </header>
    );
}

export default Header;