import React from "react";

import Button from "react-bootstrap/Button";
import axios from "axios";
import { MdDelete } from "react-icons/md";

const ListadoFavs = ({ favs }) => {
  let foto = "https://image.tmdb.org/t/p/w500";

  const handleFav = (a) => {
    axios.delete("api/users/borrar", { data: { id: a.id } });
  };
  return (
    <div className="background">
      <table>
        <thead>
          {favs ? <h2 className="tituloFavs">Peliculas Favoritas</h2> : ""}
          <tr>
            <td></td>
          </tr>
        </thead>
        <tbody className="contenedor">
          {favs
            ? favs.map((fav) => (
                <tr key={fav.id}>
                  <td>
                    <h5>{fav.tituloPelicula}</h5>

                    <img
                      className="poster"
                      src={foto.concat(fav.fotoPelicula)}
                      alt="foto"
                    />
                    <Button href={fav.idPelicula} variant="outline-light">
                      Ver mas detalles
                    </Button>
                    <Button
                      variant="danger"
                      onClick={() => {
                        handleFav(fav);
                      }}
                    >
                      <MdDelete />
                    </Button>
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
