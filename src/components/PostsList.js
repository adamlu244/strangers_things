import DeletePost from "../components/DeletePost";
import SendMessage from "./SendMessage";

const PostsList = ({postsList, setPostsList}) => {

  // console.log(postsList.postsList)
  return <div>

    {
      postsList.length > 0 ?
        postsList.map(post => {
          // console.log(post.messages);
          return (
          <li key={post._id} className="removeBullet">
            <h2>{post.title}</h2>
            <h3>User: {post.author.username}</h3>
            <h3>Location: {post.location}</h3>
            <h3>Price: {post.price}</h3>
            <div className="description">"{post.description}"</div>
            {post.isAuthor && <DeletePost post={post} postsList={postsList} setPostsList={setPostsList} />}
            {!post.isAuthor && <SendMessage post={post} />}
          </li>
          )
        }) : null
    }
    
  </div>
}

export default PostsList;