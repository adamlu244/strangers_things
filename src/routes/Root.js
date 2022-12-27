import { Outlet, Link } from "react-router-dom";
import Logout from "../components/Logout";
import { useState } from "react";

export default function Root() {

  const [token, setToken] = useState(localStorage.getItem("token"));

  return (
    <div>

      <header>

        <nav>

          <Link className="links" to="posts">Posts</Link>
          {token ? <Link className="links" to="profile">Profile</Link> : ""}
          {!token ? <Link className="links" to="login">Login</Link> : ""}
          {!token ? <Link className="links" to="register">Register</Link> : ""}
          {token ? <Logout setToken={setToken} /> : ""}
        </nav>


      </header>

      <main>

        <Outlet context={[token, setToken]} />
      </main>

      <footer className="footer" >Copyright 2022</footer>

    </div>
  );
}