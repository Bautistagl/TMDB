import React, { useState } from "react";
import axios from "axios";

import { useNavigate } from "react-router";

const Registro = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");

  // const [usuario, SetUsuario] = useState({});

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleLastname = (e) => {
    setLastname(e.target.value);
  };

  const handleRegistro = (e) => {
    e.preventDefault();
    if (lastname && email) {
      axios.post(
        `https://tmdb-back3.onrender.com/api/users`,
        { withCredentials: true, credentials: "include" },
        {
          email: email,
          password: password,
          name: name,
          lastname: lastname,
        }
      );
      navigate("/");
    } else {
      alert("Rellene todos los campos porfavor");
    }
  };

  return (
    <div className="container">
      <div className="screen">
        <div className="screen__content">
          <form onSubmit={handleRegistro} className="login">
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
                placeholder="Password"
              />
            </div>
            <div className="login__field">
              <i className="login__icon fas fa-lock" />
              <input
                value={name}
                onChange={handleName}
                className="login__input"
                placeholder="Nombre"
              />
            </div>
            <div className="login__field">
              <i className="login__icon fas fa-lock" />
              <input
                value={lastname}
                onChange={handleLastname}
                className="login__input"
                placeholder="Apellido"
              />
            </div>
            <button type="submit" className="button login__submit">
              <span className="button__text">Registrarse</span>
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
export default Registro;
