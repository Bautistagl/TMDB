import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import ListadoFavs from "./ListadoFavs";

import Navbar from "react-bootstrap/Navbar";

import "bootstrap/dist/css/bootstrap.min.css";
import ListadoFavsSeries from "./ListadoFavsSeries";

const Secret = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({});
  const [favs, SetFavs] = useState([]);
  const [favsSeries, SetFavsSeries] = useState([]);

  const handleLogOut = () => {
    axios.post("api/users/logout");
    navigate("/");
  };
  const buscarSerieFav = () => {
    if (favsSeries) {
      SetFavsSeries();
      SetFavs();
    } else {
      axios
        .get(`/api/users/favoritosSeries/${user.id}`)

        .then((info) => SetFavsSeries(info.data));
      SetFavs();
      alert("Aparecen abajo");
    }
  };

  const buscarPeliFav = () => {
    if (favs) {
      SetFavs();
      SetFavsSeries();
    } else {
      axios
        .get(`/api/users/favoritos/${user.id}`)

        .then((info) => SetFavs(info.data));
      SetFavsSeries();
    }
  };
  useEffect(() => {
    axios
      .get("/api/users/PaginaUsuarios")
      .then((res) => res.data)
      .then((user) => {
        setUser(user);
      });
  }, []);

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
            <Button
              size="sm"
              variant="outline-light"
              onClick={() => {
                navigate("/buscarSeries");
              }}
            >
              SERIES
            </Button>
            <Button
              size="sm"
              variant="outline-light"
              onClick={() => {
                navigate("/BuscarPelis");
              }}
            >
              PELICULAS
            </Button>
            <Button
              size="sm"
              variant="outline-light"
              onClick={() => {
                handleLogOut();
              }}
            >
              {" "}
              LOGOUT
            </Button>
            <Button
              size="sm"
              variant="outline-light"
              onClick={() => {
                buscarPeliFav();
              }}
            >
              PELIS FAVORITAS{" "}
            </Button>
            <Button
              size="sm"
              variant="outline-light"
              onClick={() => {
                buscarSerieFav();
              }}
            >
              SERIES FAVORITAS{" "}
            </Button>
          </Navbar>
          <ListadoFavs favs={favs} />

          <ListadoFavsSeries favsSeries={favsSeries} />
        </body>
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
