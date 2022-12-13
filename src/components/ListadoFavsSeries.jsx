import React from "react";

import Button from "react-bootstrap/Button";
import axios from "axios";
import { MdDelete } from "react-icons/md";

const ListadoFavsSeries = ({ favsSeries }) => {
  let foto = "https://image.tmdb.org/t/p/w500";
  const url = "series/";
  const handleFav = (a) => {
    axios.delete("api/users/borrar/favs", { data: { id: a.id } });
  };
  return (
    <div className="background">
      <table>
        <thead>
          {favsSeries ? <h2 className="tituloFavs">Series Favoritas</h2> : ""}
          <tr>
            <td></td>
          </tr>
        </thead>
        <tbody className="contenedor">
          {favsSeries
            ? favsSeries.map((fav) => (
                <tr key={fav.id}>
                  <td>
                    <h5>{fav.tituloSerie}</h5>

                    <img
                      className="poster"
                      src={foto.concat(fav.fotoSerie)}
                      alt="foto"
                    />
                    <Button href={url + fav.idSerie} variant="outline-light">
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

export default ListadoFavsSeries;
