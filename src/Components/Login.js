import React, { useContext } from "react";
import "../Styles/Login.css";
import { UserContext } from "../Context/UserContext";

const Login = () => {
  const { login } = useContext(UserContext);
  return (
    <div className="login">
      <div className="label">Username</div>
      <input placeholder="ex. arjunk01" />
      <div className="label">Password</div>
      <input placeholder="Password" />
      <div className="btn" onClick={login}>
        Log In
      </div>
    </div>
  );
};

export default Login;
