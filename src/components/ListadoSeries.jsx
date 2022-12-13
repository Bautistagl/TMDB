import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import axios from "axios";
import Navbar from "react-bootstrap/Navbar";

const ListadoSeries = ({ peliculas }) => {
  const pelicula = peliculas.results;
  const url = "series/";

  let foto = "https://image.tmdb.org/t/p/w500";
  const handleFav = (a) => {
    console.log(a);
    axios.post("api/users/favoritosSeries", {
      idSerie: a.id,
      fotoSerie: a.poster_path,
      tituloSerie: a.name,
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
                          <Card.Title>{a.name}</Card.Title>
                          <Card.Text>{a.overview.slice(0, 100)}...</Card.Text>
                          <Button href={url + a.id} variant="outline-light">
                            Ver mas detalles
                          </Button>
                        </Card.Body>
                      </Card>
                      <button
                        onClick={() => {
                          handleFav(a);
                        }}
                      >
                        FAV
                      </button>
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

export default ListadoSeries;
