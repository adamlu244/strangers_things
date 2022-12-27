import { sendMessages } from "../utils/API";
import { useState } from "react";
import { useOutletContext } from "react-router-dom";


const SendMessage = (props) => {

    const [yourMessage, setYourMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [successMessage, setSuccessMessage] = useState("");
    const [token] = useOutletContext();

    async function submitMessage(event) {

      event.preventDefault();

      if (yourMessage.length <= 0) {
        setErrorMessage("Your message must contain text to send.")
      } else {
        setErrorMessage("");
        setSuccessMessage("Your message has been sent!")
        const message = {
          message: {
            content: yourMessage
          }
        }
        const response = await sendMessages(message, props.post._id, token);
        setYourMessage("");
      }
    }

    return (

      token ? 
      (<form onSubmit={submitMessage}>

        <label>Enter Message Content: </label>
        <input
          className="input biggerInput"
          type="text"
          value={yourMessage}
          onChange={(event) => setYourMessage(event.target.value)}>
        </input>

        <button type="submit">Send Message</button>

        <p className="error" >{errorMessage}</p>
        <p className="successMsg" >{successMessage}</p>

      </form>) : null

    )
}

export default SendMessage;