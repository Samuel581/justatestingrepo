import CardPost from "./CardPost";

const PostContainer = ({posts}) => {
    const [postsList, setPostsList] = useState([]);

    return (
        <div className="post-container">
            {posts.map(post => (
                <CardPost key={post.id} post={post}/>
            ))}
        </div>
    )
}