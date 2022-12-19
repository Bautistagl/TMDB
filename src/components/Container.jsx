import React from "react";
import CardPeli from "./CardInicio";

const Container = ({ peliculas }) => {
  let foto = "https://image.tmdb.org/t/p/w500";
  return (
    <div>
      <h2 className="titulo">Top 20 peliculas de la semana</h2>
      <table>
        <thead></thead>
        <tbody className="contenedor">
          {peliculas
            ? peliculas.map((fav) => (
                <CardPeli fav={fav} />
                // <tr key={pelicula.id}>
                //   <td>
                //     <figure class="card card--water">
                //       <div class="card__image-container">
                //         <img
                //           src={foto.concat(pelicula.poster_path)}
                //           alt="Espeon"
                //           class="card__image"
                //         />
                //       </div>

                //       <figcaption class="card__caption">
                //         <h1 class="card__name">{pelicula.title}</h1>
                //       </figcaption>
                //     </figure>
                //   </td>
                // </tr>
              ))
            : ""}
        </tbody>
      </table>
    </div>
  );
};

export default Container;
