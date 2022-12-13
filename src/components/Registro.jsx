import React, { useState } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
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
    if (lastname && email && password && name) {
      axios.post(`/api/users`, {
        email: email,
        password: password,
        name: name,
        lastname: lastname,
      });
      navigate("/");
    } else {
      alert("Rellene todos los campos porfavor");
    }
  };

  return (
    <div className="background" style={{ height: "670px" }}>
      <h2>Registro</h2>

      <form onSubmit={handleRegistro}>
        <input value={email} onChange={handleEmail} placeholder="Email"></input>
        <br />
        <input
          type="password"
          value={password}
          onChange={handlePassword}
          placeholder="Password"
        ></input>
        <br />
        <input value={name} onChange={handleName} placeholder="Name"></input>
        <br />
        <input
          value={lastname}
          onChange={handleLastname}
          placeholder="Lastname"
        ></input>
        <br />

        <Button variant="dark" type="submit">
          Registrarse
        </Button>
      </form>
      <br />
    </div>
  );
};
export default Registro;
