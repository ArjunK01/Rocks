import React, { useContext, useState } from "react";
import "../Styles/Login.css";
import { UserContext } from "../Context/UserContext";
import axios from "axios";

const Login = () => {
  const { login } = useContext(UserContext);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="login">
      <div className="label">Name</div>
      <input
        placeholder="ex. arjunk01"
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <div className="label">Password</div>
      <input
        placeholder="Password"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <div className="btn" onClick={() => login(name, password)}>
        Log In
      </div>
    </div>
  );
};

export default Login;
