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
    <div className="container">
      <div className="screen">
        <div className="screen__content">
          <form onSubmit={handleLogin} className="login">
            <div className="login__field">
              <i className="login__icon fas fa-user" />
              <input
                value={email}
                onChange={handleEmail}
                type="text"
                className="login__input"
                placeholder=" Email"
              />
            </div>
            <div className="login__field">
              <i className="login__icon fas fa-lock" />
              <input
                value={password}
                onChange={handlePassword}
                type="password"
                className="login__input"
                placeholder="Contraseña"
              />
            </div>
            <button type="submit" className="button login__submit">
              <span className="button__text">Iniciar sesión</span>
              <i className="button__icon fas fa-chevron-right" />
            </button>
          </form>
        </div>
        <div className="screen__background">
          <span className="screen__background__shape screen__background__shape4" />
          <span className="screen__background__shape screen__background__shape3" />
          <span className="screen__background__shape screen__background__shape2" />
          <span className="screen__background__shape screen__background__shape1" />
        </div>
      </div>
    </div>
  );
};
export default Login;
