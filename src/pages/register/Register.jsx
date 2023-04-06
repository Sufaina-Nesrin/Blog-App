import React from "react";
import "./Register.css";
import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="register">
      <span className="registerTitle">SIGN UP</span>
      <form action="" className="registerForm">
        <label>Username</label>
        <input
          className="registerInput"
          type="texy"
          placeholder="Enter Your Name... "></input>
        <label>Email</label>
        <input
          className="registerInput"
          type="email"
          placeholder="Enter your Email..."></input>
        <label>Password</label>
        <input
          className="registerInput"
          type="password"
          placeholder="Enter your password..."></input>
        <button className="registerButton">Sign up</button>
      </form>
     <Link to='/login'> <button className="registerLogin">Login</button></Link>
    </div>
  );
}

export default Register;
