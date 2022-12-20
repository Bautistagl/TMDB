import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import ListadoFavs from "./ListadoFavs";
import { useSelector } from "react-redux";
import Navbar from "react-bootstrap/Navbar";

import "bootstrap/dist/css/bootstrap.min.css";
import ListadoFavsSeries from "./ListadoFavsSeries";

const Secret = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);

  const [favsSeries, SetFavsSeries] = useState([]);

  const handleLogOut = () => {
    axios.post("https://tmdb-back3.onrender.com/api/users/logout", {
      withCredentials: true,
      credentials: "include",
    });
    navigate("/");
  };

  if (user.email) {
    return (
      <div className="background">
        <body>
          <Navbar bg="dark" variant="dark">
            <Container>
              <Navbar.Brand>
                {" "}
                Bienvenido {user.name} {user.lastname}!
              </Navbar.Brand>
            </Container>
          </Navbar>
        </body>
        <div className="inicio">
          <ul>
            <a className="link1" href="#">
              <li
                onClick={() => {
                  navigate("/BuscarPelis");
                }}
              >
                Buscar Pelis
                <span />
                <span />
                <span />
                <span />
              </li>
            </a>
            <a className="link1" href="#">
              <li
                onClick={() => {
                  navigate("/buscarSeries");
                }}
              >
                Buscar series
                <span />
                <span />
                <span />
                <span />
              </li>
            </a>
            <a className="link1" href="#">
              <li
                onClick={() => {
                  // buscarPeliFav();
                  navigate("/pelisFavs");
                }}
              >
                Peliculas favs
                <span />
                <span />
                <span />
                <span />
              </li>
            </a>
            <a className="link1" href="#">
              <li
                onClick={() => {
                  // buscarSerieFav();
                  navigate("/seriesFavs");
                }}
              >
                Series Favs
                <span />
                <span />
                <span />
                <span />
              </li>
            </a>
            <a className="link1" href="#">
              <li
                onClick={() => {
                  handleLogOut();
                }}
              >
                Cerrar sesion
                <span />
                <span />
                <span />
                <span />
              </li>
            </a>
          </ul>
        </div>
      </div>
    );
  }

  return (
    <>
      <p>404 Not Found</p>
    </>
  );
};
export default Secret;
