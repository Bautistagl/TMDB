import React, { useState } from "react";
import axios from "axios";

import { useNavigate, useParams } from "react-router-dom";
import ListadoSeries from "./ListadoSeries";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

const BusquedaSeries = (peliculas) => {
  const params = useParams();
  const navigate = useNavigate();
  const [titulo, setTitulo] = useState("");
  const [pelicula, SetPelicula] = useState([]);

  const handleLogOut = () => {
    axios.post("https://tmdb-back3.onrender.com/api/users/logout", {
      withCredentials: true,
      credentials: "include",
    });
    navigate("/");
  };

  const handleTitulo = (e) => {
    setTitulo(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .get(
        `https://api.themoviedb.org/3/search/tv?api_key=ea66feba16438f64ce278c1470d6d9b2&query=${titulo}&page=${params.id}`
      )
      .then((res) => SetPelicula(res.data));
  };
  const HandleNext = (e) => {
    axios
      .get(
        `https://api.themoviedb.org/3/search/tv?api_key=ea66feba16438f64ce278c1470d6d9b2&query=${titulo}&page=${
          parseInt(pelicula.page) + 1
        }`
      )
      .then((res) => SetPelicula(res.data));
  };
  const HandlePrevious = (e) => {
    axios
      .get(
        `https://api.themoviedb.org/3/search/tv?api_key=ea66feba16438f64ce278c1470d6d9b2&query=${titulo}&page=${
          parseInt(pelicula.page) - 1
        }`
      )
      .then((res) => SetPelicula(res.data));
  };

  return (
    <div className="background">
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
          <div className="navbar2">
            <ul>
              <a className="link1" href="#">
                <li
                  onClick={() => {
                    HandlePrevious();
                  }}
                >
                  Anterior
                  <span />
                  <span />
                  <span />
                  <span />
                </li>
              </a>
            </ul>
          </div>
          <div className="navbar2">
            <ul>
              <a className="link1" href="#">
                <li
                  onClick={() => {
                    HandleNext();
                  }}
                >
                  Siguiente
                  <span />
                  <span />
                  <span />
                  <span />
                </li>
              </a>
            </ul>
          </div>
          <div className="navbar2">
            <ul>
              <a className="link1" href="#">
                <li
                  onClick={() => {
                    navigate("/Usuario");
                  }}
                >
                  Inicio
                  <span />
                  <span />
                  <span />
                  <span />
                </li>
              </a>
            </ul>
          </div>
          <div className="navbar2">
            <ul>
              <a className="link1" href="#">
                <li
                  onClick={() => {
                    handleLogOut();
                  }}
                >
                  Cerrar Sesion
                  <span />
                  <span />
                  <span />
                  <span />
                </li>
              </a>
            </ul>
          </div>
        </ButtonGroup>
      </Navbar>

      <ListadoSeries peliculas={pelicula} />
    </div>
  );
};
export default BusquedaSeries;
