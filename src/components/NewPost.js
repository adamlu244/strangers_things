import { useOutletContext } from "react-router-dom";
import { createPosts } from "../utils/API";
import { useState } from "react";

const NewPost = ({postsList, setPostsList}) => {

  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [token] = useOutletContext();

  async function submitNewPost(event) {

    event.preventDefault();

    if (!title && !location && !price && !description) {
      setErrorMessage("All fields must filled out to make a new post.")
    } else if(token) {
      setErrorMessage("");
      const postForm = {
        post: {
          title,
          location,
          price,
          description
        }
      }
    
      setTitle("");
      setLocation("");  
      setPrice("");
      setDescription("");

      const response = await createPosts(postForm, token);

      if(response.error) {
        setErrorMessage("All fields must filled out to make a new post.");
      } else {
        setPostsList([...postsList, response.data.post])
        // console.log(response);
      }
    }
  }

  // console.log(token, "this is a token");
  return (
    <div>

      <h2>New Post</h2>

      <p className="errorMsg">{errorMessage}</p>

      <form onSubmit={submitNewPost}>

        <label>Title: </label>
        <input
          type="text"
          value={title}
          className="input"
          onChange={(event) => setTitle(event.target.value)}>
        </input>

        <label>Location: </label>
        <input
          type="text"
          value={location}
          className="input"
          onChange={(event) => setLocation(event.target.value)}>
        </input>

        <label>Price: </label>
        <input
          type="text"
          value={price}
          className="input"
          onChange={(event) => setPrice(event.target.value)}>
        </input>

        <label>Description: </label>
        <input
          type="text"
          value={description}
          className="input biggerInput"
          onChange={(event) => setDescription(event.target.value)}>
        </input>

        <button type="submit">Submit Post</button>

      </form>

    </div>
  )
}

export default NewPost;