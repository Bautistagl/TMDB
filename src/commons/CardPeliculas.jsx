import * as React from "react";
import axios from "axios";

const CardBusqueda = ({ fav }) => {
  let foto = "https://image.tmdb.org/t/p/w500";
  const handleFav = (a) => {
    axios.post("api/users/favoritos", {
      idd: a.id,
      foto: a.poster_path,
      titulo: a.title,
      fecha: a.release_date,

      adult: a.adult,
      valoracion: a.vote_average,
      resumen: a.overview,
    });
  };
  return (
    <div>
      <tr key={fav.id}>
        <td>
          <figure class="card1 card--dark1">
            <div class="card__image-container">
              <img
                src={foto.concat(fav.poster_path)}
                alt="Espeon"
                class="card__image"
              />
            </div>

            <figcaption class="card__caption">
              {console.log(fav)}
              <h1 class="card__name">{fav.title}</h1>

              <table class="card__stats">
                <tbody>
                  <tr>
                    <th>Fecha de estreno</th>
                    <td>{fav.release_date}</td>
                  </tr>
                  <tr>
                    <th>Valoracion</th>
                    <td>{fav.vote_average}</td>
                  </tr>
                </tbody>
              </table>

              <div class="card__abilities">
                <h5>Resumen</h5>
                <br />
              </div>
              <span class="card__label">{fav.overview.slice(0, 100)}...</span>
              <a href="#">
                <img
                  onClick={() => {
                    handleFav(fav);
                  }}
                  src="/star (1).png"
                  className="like"
                />
              </a>
            </figcaption>
          </figure>
        </td>
      </tr>
    </div>
  );
};

export default CardBusqueda;
