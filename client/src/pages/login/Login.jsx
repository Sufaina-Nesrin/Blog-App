import React, { useContext, useEffect, useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import axios from "axios";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { dispatch, isFetching } = useContext(Context);
  const handleClick = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });

    await axios
      .post("/auth/login", {
        email,
        password,
      })
      .then((res) => {
        dispatch({ type: "LOGIN_SUCCESS", playload: res.data });
      })
      .catch((err) => {
        dispatch({ type: "LOGIN_FAILURE" });
      });
  };
  console.log(isFetching);

  return (
    <div className="login">
      <span className="loginTitle">LOGIN</span>
      <form action="" className="loginForm" onSubmit={handleClick}>
        {/* aysha,1234567 */}
        <label>Email</label>
        <input
          className="loginInput"
          type="email"
          placeholder="Enter your email..."
          required
          autoFocus={true}
          onChange={(e) => setEmail(e.target.value)}></input>
        <label>Password</label>
        <input
          className="loginInput"
          type="password"
          placeholder="Enter your password..."
          minLength={6}
          required
          onChange={(e) => setPassword(e.target.value)}></input>
        <button className="loginButton" type="submit" disabled={isFetching}>
          Login
        </button>
      </form>
      <Link to="/signup">
        {" "}
        <button className="loginRegister">Register</button>
      </Link>
    </div>
  );
}

export default Login;
