import React, { useState } from "react";
import axios from "axios";
import Listado from "./Listado";
import { useNavigate, useParams } from "react-router-dom";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Container from "react-bootstrap/Container";

import Navbar from "react-bootstrap/Navbar";
import ListadoFavs from "./ListadoFavs";

const Busqueda = (peliculas) => {
  const params = useParams();
  const navigate = useNavigate();
  const [titulo, setTitulo] = useState("");
  const [pelicula, SetPelicula] = useState([]);
  // const [usuario, SetUsuario] = useState({});

  const handleTitulo = (e) => {
    setTitulo(e.target.value);
  };
  const handleLogOut = () => {
    axios.post("api/users/logout");
    navigate("/");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=ea66feba16438f64ce278c1470d6d9b2&query=${titulo}&page=${params.id}`
      )
      .then((res) => SetPelicula(res.data));
  };
  const HandleNext = (e) => {
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=ea66feba16438f64ce278c1470d6d9b2&query=${titulo}&page=${
          parseInt(pelicula.page) + 1
        }`
      )
      .then((res) => SetPelicula(res.data));
  };
  const HandlePrevious = (e) => {
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=ea66feba16438f64ce278c1470d6d9b2&query=${titulo}&page=${
          parseInt(pelicula.page) - 1
        }`
      )
      .then((res) => SetPelicula(res.data));
  };

  return (
    <>
      <div className="background">
        <body>
          <Navbar bg="dark" variant="dark">
            <Container>
              <Navbar.Brand> Buscar Peliculas</Navbar.Brand>
              <form onSubmit={handleSubmit}>
                <label>Pelicula: </label>
                <input value={titulo} onChange={handleTitulo}></input>

                <button type="submit">Submit</button>
              </form>
            </Container>
            <ButtonGroup size="sm" aria-label="Basic example">
              <Button
                variant="dark"
                onClick={() => {
                  HandlePrevious();
                }}
              >
                ANTERIOR
              </Button>
              <Button
                variant="dark"
                onClick={() => {
                  HandleNext();
                }}
              >
                SIGUIENTE
              </Button>
              <Button
                variant="dark"
                onClick={() => {
                  navigate("/Usuario");
                }}
              >
                Volver a mi pagina
              </Button>
              <Button
                variant="dark"
                size="sm"
                onClick={() => {
                  handleLogOut();
                }}
              >
                {" "}
                LOGOUT
              </Button>
            </ButtonGroup>
          </Navbar>

          <Listado peliculas={pelicula} />
        </body>
      </div>
    </>
  );
};
export default Busqueda;
