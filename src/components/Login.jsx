import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // const [usuario, SetUsuario] = useState({});

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`/api/users/login`, {
        email: email,
        password: password,
      });
      navigate("/Usuario");
    } catch ({ response }) {
      alert("Ingreso mal la contraseña o email, pruebe de nuevo");
      console.log((response.status, response.statusText));
    }
  };

  return (
    <div className="background">
      <h2>Login</h2>

      <form onSubmit={handleLogin}>
        <input value={email} onChange={handleEmail} placeholder="Email"></input>
        <br />
        <input
          value={password}
          onChange={handlePassword}
          placeholder="Password"
        ></input>
        <br />

        <button type="submit">Login</button>
      </form>
      <br />
    </div>
  );
};
export default Login;
