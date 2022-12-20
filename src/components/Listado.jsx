import React from "react";

import Navbar from "react-bootstrap/Navbar";

import CardBusqueda from "../commons/CardPeliculas";
const Listado = ({ peliculas }) => {
  const pelicula = peliculas.results;

  let foto = "https://image.tmdb.org/t/p/w500";

  return (
    <div className="background">
      <table>
        <thead>
          {" "}
          {pelicula ? (
            <Navbar>
              <Navbar.Brand>
                {" "}
                Pagina {peliculas.page} de {peliculas.total_pages}{" "}
              </Navbar.Brand>
            </Navbar>
          ) : (
            ""
          )}
        </thead>

        <tbody className="contenedor1">
          {pelicula
            ? pelicula.map((fav) => (
                <>
                  <CardBusqueda fav={fav} />
                </>
              ))
            : ""}
        </tbody>
      </table>
    </div>
  );
};

export default Listado;
