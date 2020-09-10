import React, { useState } from "react";
import "./login.css";
import { Link } from "@material-ui/core";
<<<<<<< HEAD
import { auth } from "../../firebase/firebase";
import { useHistory } from "react-router-dom";
=======

>>>>>>> 7149dbaa3cf62f43b916d198d1e2dff452b4edfa

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
        <img
          className="login_logo"
          src="https://lh3.googleusercontent.com/proxy/YMbSs8n62N7vKSvbXUAsTB7Uha6NiWC-VWNtUPxVoa6CkVzjM4nW2Qc97ayrJbJO3FGZ_Wbrdehp5L-QfQrZBQ-LBa2K5C7tNQ-B2OFmrA69KF8"
          alt="logo"
        />
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
