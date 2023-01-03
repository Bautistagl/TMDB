import React, { useState } from "react";

import { useNavigate } from "react-router-dom";
import { client } from "../supabase/client";

// const { generateToken, validateToken } = require("../config/token");

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [email1, setEmail1] = useState("");
  const [password1, setPassword1] = useState("");
  const [name1, setName1] = useState("");
 

  // const [usuario, SetUsuario] = useState({});

  const handleEmail1 = (e) => {
    setEmail1(e.target.value);
  };
  const handlePassword1 = (e) => {
    setPassword1(e.target.value);
  };
  const handleName = (e) => {
    setName1(e.target.value);
  };


  const handleRegistro = async (e) => {
    e.preventDefault();
    const respuesta = await client.from("personas").insert({
      email: email1,
      contra: password1,
      nombre: name1,
    });
     
    }

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
      client
        .from("personas")
        .select()
        .eq("email", email)
        .then((info) => {
         
          if (info.data.length===0) {
            return alert("Usuario o contraseña incorrecta");
          }
          if(info.data.length!==0){

            window.localStorage.setItem("usuario", JSON.stringify(info.data[0]));
            navigate("/Usuario");
          }
        });

    } catch ({ response }) {
      alert("Ingreso mal la contraseña o email, pruebe de nuevo");
      console.log((response.status, response.statusText));
    }
  };

  return (
    <div>
 <div> 
        <div className="main">  	
          <input type="checkbox" id="chk" aria-hidden="true" />
          <div className="signup">
            <form  onSubmit={handleRegistro}>
              <label className="label" htmlFor="chk" aria-hidden="true">Registrarse</label>
              <input  value={name1}
                onChange={handleName}  type="text" className="input" placeholder="Usuario" required />
              <input  value={email1}
                onChange={handleEmail1} type="email" className="input" placeholder="Email" required />
              <input  value={password1}
                onChange={handlePassword1} type="password"className="input" placeholder="Contraseña" required />
              <button className="button">Registrarse</button>
            </form>
          </div>
          <div className="login">
            <form onSubmit={handleLogin}>
              <label className="label" htmlFor="chk" aria-hidden="true">Iniciar Sesión</label>
              <input value={email}
                onChange={handleEmail} type="email"className="input" placeholder="Email" required />
              <input  value={password}
                onChange={handlePassword} type="password" className="input" placeholder="Contraseña" required />
              <button className="button">Entrar</button>
            </form>
          </div>
        </div>
      </div>
   
    </div>
  );
};
export default Login;
