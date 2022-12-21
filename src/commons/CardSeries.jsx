import * as React from "react";
import { client } from "../supabase/client";
import { useSelector } from "react-redux";

const CardSerie = ({ fav }) => {
  let foto = "https://image.tmdb.org/t/p/w500";
  const user = JSON.parse(localStorage.getItem("usuario"));
  const handleFav = async (a) => {
    try {
      const { data, error } = await client.from("series1").insert({
        foto: a.poster_path,
        titulo: a.name,
        fecha: a.release_date,
        idUsuario: user.id,

        valoracion: a.vote_average,
        resumen: a.overview,
      });
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      <tr key={fav.id}>
        <td>
          <figure class="card1 card--dark1">
            <div class="card__image-container">
              <img
                src={foto.concat(fav.poster_path)}
                alt="Sin-Foto"
                class="card__image"
              />
            </div>

            <figcaption class="card__caption">
              <h1 class="card__name">{fav.name}</h1>

              <table class="card__stats">
                <tbody>
                  <tr>
                    <th>Fecha de estreno</th>
                    <td>{fav.first_air_date}</td>
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
              <span class="card__label">{fav.overview.slice(0, 250)}...</span>
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

export default CardSerie;
