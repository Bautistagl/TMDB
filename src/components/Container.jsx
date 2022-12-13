import React from "react";

const Container = ({ peliculas }) => {
  let foto = "https://image.tmdb.org/t/p/w500";
  return (
    <div>
      <h2 className="titulo">Trending Movies</h2>
      <table>
        <thead>
          <tr className="container">
            <td></td>
          </tr>
        </thead>
        <tbody className="contenedor">
          {peliculas
            ? peliculas.map((pelicula) => (
                <tr className="container" key={pelicula.id}>
                  <td>
                    <h5>{pelicula.title}</h5>

                    <img
                      className="poster"
                      src={foto.concat(pelicula.poster_path)}
                      alt="foto"
                    />
                  </td>
                </tr>
              ))
            : ""}
        </tbody>
      </table>
    </div>
  );
};

export default Container;
