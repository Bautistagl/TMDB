import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Grid2 from "@mui/material/Unstable_Grid2"; // Grid version 2
import { Button, CardActionArea, CardActions } from "@mui/material";
import axios from "axios";

const ListadoFavs = ({ favs }) => {
  let foto = "https://image.tmdb.org/t/p/w500";

  const handleFav = (a) => {
    axios.delete("api/users/borrar", { data: { id: a.id } });
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
