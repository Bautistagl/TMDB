import * as React from "react";
import { client } from "../supabase/client";

const ListadoFavs = ({ favs }) => {
  let foto = "https://image.tmdb.org/t/p/w500";
  const user = JSON.parse(localStorage.getItem("usuario"));
  const handleBorrar = (a) => {
    const { error, data } = client
      .from("peliculas")
      .delete()
      .eq("id", a.id)
      .then((info) => {
        alert("se borro");
      });

    if (error) throw error;
  };
  return (
    <div className="background">
      <h1>Tus peliculas favoritas</h1>
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
                        <button
                          onClick={() => {
                            handleBorrar(fav);
                          }}
                        >
                          {" "}
                          borrar
                        </button>
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

export default ListadoFavs;
