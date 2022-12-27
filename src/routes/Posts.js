import { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import PostsList from "../components/PostsList";
import NewPost from "../components/NewPost";
import { fetchPostsList } from "../utils/API";

const Posts = () => {
  const [postsList, setPostsList] = useState([]);
  const [token] = useOutletContext();

  // console.log(postsList, "this is from POST");
  // console.log(token, "this is token");
  
  useEffect(() => {
    try {
      fetchPostsList(token).then((results) => {
        setPostsList(results.data.posts);
        // console.log(results.data.posts);
      })
    } catch(err) {
      console.error(err);
    }
  }, []);

  return (  

    <div>

      <h1>All Posts</h1>

      {token ? <NewPost setPostsList={setPostsList} postsList={postsList} /> : null}

      <ul>
        <PostsList postsList={postsList} setPostsList={setPostsList} />
      </ul>

    </div>

  )
  
};

export default Posts;