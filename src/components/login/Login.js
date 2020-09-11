import React, { useState } from "react";
import "./login.css";
import { Link } from "@material-ui/core";
import { auth } from "../../firebase/firebase";
import { useHistory } from "react-router-dom";
import logo from "./unnamed.png";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const signin = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => history.push("/"))
      .catch((error) => alert(error.message));
  };
  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        if (auth) {
          history.push("/");
        }
      })
      .catch((error) => alert(error.message));
  };
  return (
    <div className="login">
      <Link to="/">
        <img className="login_logo" src={logo} alt="logo" />
      </Link>
      <div className="login_container">
        <h1>Sign In</h1>
        <form>
          <h5>E-Mail</h5>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" onClick={signin} className="login_signin">
            Sign In
          </button>
        </form>
        <p>
          By continuing, you agree to Amazon's Conditions of Use and Privacy
          Notice.
        </p>
        <button onClick={register} className="login_signup">
          Sign Up
        </button>
      </div>
    </div>
  );
}

export default Login;
