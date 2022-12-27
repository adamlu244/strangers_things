import { useEffect, useState } from "react";
import { fetchMe } from "../utils/API";

const SeeMessages = ({token}) => {

  const [messages, setMessages] = useState([]);

  useEffect(() => {
    try {
      fetchMe(token).then((results) => {
        setMessages(results.data.messages)
        // console.log(results.data, "this is results");
      })
    } catch(err) {
      console.error(err);
    }
  }, []);

  return (

    <ul className="removeBullet">
      {
        messages.map(message => {
          return (
            (<li className="messages" key={message._id}>
              <h2>From: {message.fromUser.username}</h2>
              <h3>Original Post: {message.post.title}</h3>
              <h3>Message: {message.content}</h3>
            </li>)
          )
        })
      }
    </ul>

  )

}

export default SeeMessages;