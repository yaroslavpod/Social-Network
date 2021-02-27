import classes from "./Posts.module.css"
import Post from "./Post/Post";

const Posts = () => {
    let postsData = [
        {id:1, message: "hello",likesCount:"34"},
        {id:2, message: "My name is Hotteoi",likesCount:"11"},
        {id:3, message: "Jo",likesCount:"20"}
    ];
    let postPosts = postsData.map((el)=>{
       return <Post id={el.id} message={el.message} likesCound={el.likesCount} />
    });
    return (
        <div className={classes.posts}>
           <h3>My post</h3>
            <form method="get">
                <div>
                    <textarea cols="30" rows="5"></textarea>
                </div>
                <div>
                    <button>Отправить</button>
                </div>
            </form>
            <div>
                New Post
                {postPosts}
            </div>
        </div>
    );
}

export default Posts;