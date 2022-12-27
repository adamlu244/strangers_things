import { deletePosts, fetchMe } from "../utils/API";
import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";

const DeletePost = ({post, postsList, setPostsList}) => {

  // console.log(post, "this is post");
  // console.log(postsList, "This is post list");

  const [token] = useOutletContext();
  const [userData, setUserData] = useState(fetchMe(token));

  useEffect(() => {
    try {
      fetchMe(token).then((results) => {
        // console.log(results, "this is results");
        setUserData(results.data);
      })
      // console.log(userData, "this user data");
      // console.log(userData._id, "user id");
    } catch(err) {
      console.error(err);
    }
  }, [token]); 

  async function handleDeletePost() {

    // console.log(token, "this token");
    // console.log(userData, "user data from handleDeletePost");
    // console.log(userData._id, "user id from handleDeletePost");
    // console.log(postId, "this is post id");
    // console.log(userData._id, "this is user id");
    // console.log(post.isAuthor, " this is author");

      if(post.isAuthor) {

        const response = await deletePosts(post._id, token);
        
        // Need to have postsList and setPostsList state passed into this component
        // Create a variable filteredPostsList that uses filter method to remove this 
        // post from the postsList based off the id.
        // Then setPostsList to filteredPostsList
        // console.log(postsList);

        const filteredPostsList = postsList.filter(unfilteredPost => {
          if(unfilteredPost._id !== post._id) {
            return true;
          }
          return false;
        })
        setPostsList(filteredPostsList); 
        // console.log(response, "This is response");

      } 
  }

  // console.log(post);

  return (
    <div>

      <button 
        className="delete"
        onClick={(event) => {
          event.preventDefault();
          handleDeletePost()
        }}
      >
        Delete Post
      </button>

    </div>
  )
}

export default DeletePost;