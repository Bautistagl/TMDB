import React from "react";

import axios from "axios";
import { MdDelete } from "react-icons/md";
import { client } from "../supabase/client";

const ListadoFavsSeries = ({ favs }) => {
  let foto = "https://image.tmdb.org/t/p/w500";
  const user = JSON.parse(localStorage.getItem("usuario"));
  const url = "series/";
  const handleBorrar = (a) => {
    const { error, data } = client.from("series1").delete().eq("id", a.id);
    if (error) throw error;
    console.log(data);
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
                      <button
                        onClick={() => {
                          handleBorrar(fav);
                        }}
                      >
                        {" "}
                        borrar{" "}
                      </button>

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
