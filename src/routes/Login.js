import { useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import { loginUser } from "../utils/API";

const Login = () => {

  const navigate = useNavigate();
  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [token, setToken] = useOutletContext();

  async function submitLogin(event) {

    event.preventDefault();

    if (!loginUsername && !loginPassword) {
      setErrorMessage("Invalid Username or Password, try again or register!");
    } else {
      setErrorMessage("");
      const user = {
        user: {
          username: loginUsername,
          password: loginPassword
        }
      }
      const response = await loginUser(user);
      if (response.error) {
        setErrorMessage(response.error.message);
      } else {
        setToken(response.data.token);
        localStorage.setItem("token", response.data.token);
        navigate("/posts");
      }
    }
  }

  return (

    <div className="login">

      <h1>Login</h1>

      <form onSubmit={submitLogin} className="loginForm">

        <label>Username: </label>
        <input 
          className="bottomInput"
          type="text" 
          value={loginUsername} 
          onChange={(event) => setLoginUsername(event.target.value)}>
        </input>

        <label>Password: </label>
        <input 
          className="bottomInput"
          type="password" 
          value={loginPassword} 
          onChange={(event) => setLoginPassword(event.target.value)}>
        </input>

        <button type="submit">Login</button>
        <p className="errorMsg">{errorMessage}</p>

      </form>

    </div>

  )
};

export default Login;