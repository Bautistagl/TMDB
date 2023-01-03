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
      <h1 className="titulos">Tus peliculas favoritas</h1>
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

export default ListadoFavs;
