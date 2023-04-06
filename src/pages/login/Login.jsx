import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="login">
      <span className="loginTitle">LOGIN</span>
      <form action="" className="loginForm">
        <label>Email</label>
        <input
          className="loginInput"
          type="email"
          placeholder="Enter your Email..."></input>
        <label>Password</label>
        <input
          className="loginInput"
          type="password"
          placeholder="Enter your password..."></input>
        <button className="loginButton">Login</button>
      </form>
      <Link to="/signup"> <button className="loginRegister">Register</button></Link>
    </div>
  );
}

export default Login;
