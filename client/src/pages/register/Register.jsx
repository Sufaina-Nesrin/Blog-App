import React, { useState } from "react";
import "./Register.css";
import { Link } from "react-router-dom";
import axios from "axios";

function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErr(false);
    await axios
      .post("/auth/signup", {
        username,
        email,
        password,
      })
      .then((res) => {
        console.log(res);
        res.data && window.location.replace("/login");
      })
      .catch((err) => {
        setErr(true);
      });
  };
  return (
    <div className="register">
      <span className="registerTitle">SIGN UP</span>
      <form action="" className="registerForm" onSubmit={handleSubmit}>
        <label>Username</label>
        <input
          className="registerInput"
          type="texy"
          placeholder="Enter Your Name... "
          onChange={(e) => setUsername(e.target.value)}></input>
        <label>Email</label>
        <input
          className="registerInput"
          type="email"
          placeholder="Enter your Email..."
          onChange={(e) => setEmail(e.target.value)}></input>
        <label>Password</label>
        <input
          className="registerInput"
          type="password"
          placeholder="Enter your password..."
          onChange={(e) => setPassword(e.target.value)}></input>
        <button type="submit" className="registerButton">
          Sign up
        </button>
        {err && (
          <span
            className="err"
            style={{
              marginTop: "20px",
              color: "red",
              backgroundColor: "pink",
              padding: "5px",
              borderRadius: "5px",
            }}>
            Something went wrong
          </span>
        )}
      </form>
      <Link to="/login">
        {" "}
        <button className="registerLogin">Login</button>
      </Link>
    </div>
  );
}

export default Register;
