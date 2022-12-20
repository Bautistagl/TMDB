import React from "react";

import axios from "axios";
import { MdDelete } from "react-icons/md";

const ListadoFavsSeries = ({ favs }) => {
  let foto = "https://image.tmdb.org/t/p/w500";
  const url = "series/";
  const handleFav = (a) => {
    axios.delete(
      "https://tmdb-back3.onrender.com/api/users/borrar/favs",
      { withCredentials: true, credentials: "include" },
      { data: { id: a.id } }
    );
  };
  return (
    <div className="background">
      <h1>Tus series favoritas</h1>
      <table>
        <tbody className="contenedor">
          {favs
            ? favs.map((fav) => (
                <tr key={fav.id}>
                  <td>
                    <figure class="card card--dark">
                      <div class="card__image-container">
                        <img
                          src={foto.concat(fav.foto)}
                          alt="Espeon"
                          class="card__image"
                        />
                      </div>

                      <figcaption class="card__caption">
                        <h1 class="card__name">{fav.titulo}</h1>
                      </figcaption>
                    </figure>
                  </td>
                </tr>
              ))
            : ""}
        </tbody>
      </table>
    </div>
  );
};

export default ListadoFavsSeries;
