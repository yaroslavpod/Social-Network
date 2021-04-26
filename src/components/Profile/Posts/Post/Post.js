import classes from "./Post.module.css"

const Post = (props) => {

    return (
        <div className={classes.item}>
            <img src="https://w1.pngwing.com/pngs/793/504/png-transparent-avatar-icon-ninja-samurai-icon-design-red-smile-circle.png" alt=""/>
            {props.message}
            <div><span>Likes </span>{props.likesCount}</div>
        </div>
    );
}

export default Post;