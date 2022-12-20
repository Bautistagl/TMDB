import React from "react";

import Navbar from "react-bootstrap/Navbar";

import CardSerie from "../commons/CardSeries";

const ListadoSeries = ({ peliculas }) => {
  const pelicula = peliculas.results;
  const url = "series/";

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
                  <CardSerie fav={fav} />
                </>
              ))
            : ""}
        </tbody>
      </table>
    </div>
  );
};

export default ListadoSeries;
