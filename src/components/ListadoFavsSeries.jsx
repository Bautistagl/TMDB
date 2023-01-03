import React from "react";

import axios from "axios";

import { client } from "../supabase/client";

const ListadoFavsSeries = ({ favs }) => {
  let foto = "https://image.tmdb.org/t/p/w500";
  const user = JSON.parse(localStorage.getItem("usuario"));
  const url = "series/";
  const handleBorrar = (a) => {
    const { error, data } = client
      .from("series1")
      .delete()
      .eq("id", a.id)
      .then((info) => {
        alert("se borro");
      });

    if (error) throw error;
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
                <img
                
                  src={foto.concat(fav.foto)}
                  alt="Foto no disponible"
                  className="fotos"
                />
              </td>
              <h1 className="titulo">{fav.titulo}</h1>
            </tr>
              ))
            : ""}
        </tbody>
      </table>
    </div>
  );
};

export default ListadoFavsSeries;
