import axios from "axios";
import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { MdFavorite } from "react-icons/md";

import Navbar from "react-bootstrap/Navbar";
const Listado = ({ peliculas }) => {
  const pelicula = peliculas.results;

  let foto = "https://image.tmdb.org/t/p/w500";
  const handleFav = (a) => {
    axios.post("api/users/favoritos", {
      idPelicula: a.id,
      fotoPelicula: a.poster_path,
      tituloPelicula: a.title,
    });
  };
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

        <tbody className="contenedor">
          {pelicula
            ? pelicula.map((a) => (
                <>
                  <tr key={a.id}>
                    <div className="d-flex justify-content-around">
                      <Card style={{ width: "15em" }}>
                        {a.poster_path ? (
                          <Card.Img
                            style={{ height: "250px" }}
                            variant="top"
                            src={foto.concat(a.poster_path)}
                          />
                        ) : (
                          <Card.Img
                            style={{ height: "250px" }}
                            variant="top"
                            src="https://static.vecteezy.com/system/resources/previews/005/337/799/non_2x/icon-image-not-found-free-vector.jpg"
                          />
                        )}

                        <Card.Body className="backListado">
                          <Card.Title>{a.title}</Card.Title>
                          <Card.Text>{a.overview.slice(0, 100)}...</Card.Text>
                          <Button href={a.id} variant="outline-light">
                            Ver mas detalles
                          </Button>
                          <Button
                            variant="outline-light"
                            onClick={() => {
                              handleFav(a);
                            }}
                          >
                            <MdFavorite />
                          </Button>
                        </Card.Body>
                      </Card>
                    </div>
                  </tr>
                </>
              ))
            : ""}
        </tbody>
      </table>
    </div>
  );
};

export default Listado;
