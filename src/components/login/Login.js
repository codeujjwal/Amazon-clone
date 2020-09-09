import React from "react";
import "./login.css";
import { Link } from "@material-ui/core";


function Login() {
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
        <h3>Sign In</h3>
        <form></form>
      </div>
    </div>
  );
}

export default Login;
