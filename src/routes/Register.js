import { useState, useEffect } from "react";
import { registerUser } from "../utils/API";
import { useOutletContext, useNavigate } from "react-router-dom"

const Register = () => {
  
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [token, setToken] = useOutletContext();

  const navigate = useNavigate();

  useEffect(() => {
    if(token) {
      navigate("/posts");
    }
  }, [token, navigate])

  async function submitRegistration(event) {

    event.preventDefault();
    
    if (!username) {
      setErrorMessage("Username required.");
    } else if (password.length < 8) {
      setErrorMessage("Password is too short, must be a minimum of 8 characters.");
    } else if (password !== confirmPassword) {
      setErrorMessage("Passwords must match.");
    } else {
      setErrorMessage("");
      const user = {
        user: {
          username,
          password
        }
      }
      const response = await registerUser(user);
      if (response.error) {
        setErrorMessage(response.error.message);
      } else {
        localStorage.setItem("token", response.data.token);
        setToken(response.data.token);
      }
    }
  }

  return (

    <div className="register">

      <h1>Register</h1>

      <form onSubmit={submitRegistration} className="registerForm">

        <label>Enter a Username: </label>
        <input 
          className="bottomInput"
          type="text" 
          value={username} 
          onChange={(event) => setUsername(event.target.value)}>
        </input>

        <label>Enter a Password: </label>
        <input 
          className="bottomInput"
          type="password" 
          value={password} 
          onChange={(event) => setPassword(event.target.value)}>
        </input>

        <label>Confirm Password: </label>
        <input 
          className="bottomInput"
          type="password" 
          value={confirmPassword} 
          onChange={(event) => setConfirmPassword(event.target.value)}>
        </input>

        <button type="submit">Register</button>

        <p className="errorMsg">{errorMessage}</p>

      </form>

    </div>

  )
};

export default Register;