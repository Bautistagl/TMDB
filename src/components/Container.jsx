import React from "react";
import CardPeli from "./CardInicio";

const Container = ({ peliculas }) => {
  let foto = "https://image.tmdb.org/t/p/w500";
  return (
    <div className="todo">
      <h2 align="center" className="titulos">
        Top 10 peliculas de la semana
      </h2>
      <table className="tabla" align="center">
        <tbody className="contenedor">
          {peliculas
            ? peliculas.slice(0, 10).map((fav) => <CardPeli fav={fav} />)
            : ""}
        </tbody>
      </table>
    </div>
  );
};

export default Container;
