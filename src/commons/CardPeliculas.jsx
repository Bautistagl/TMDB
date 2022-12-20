import * as React from "react";
import axios from "axios";
import { client } from "../supabase/client";
import { useState } from "react";
import { useSelector } from "react-redux";

const CardBusqueda = ({ fav }) => {
  const user = useSelector((state) => state.user);
  let foto = "https://image.tmdb.org/t/p/w500";
  const [usuario, setUsuario] = useState({});
  const handleFav = async (a) => {
    try {
      const { data, error } = await client.from("peliculas").insert({
        foto: a.poster_path,
        titulo: a.title,
        fecha: a.release_date,
        valoracion: a.vote_average,
        resumen: a.overview,
        idUsuario: user.id,
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
                alt="Espeon"
                class="card__image"
              />
            </div>

            <figcaption class="card__caption">
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
