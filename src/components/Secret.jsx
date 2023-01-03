import React, {  useState } from "react";

import { useNavigate } from "react-router-dom";


import "bootstrap/dist/css/bootstrap.min.css";



const Secret = () => {
  const navigate = useNavigate();

  const [favsSeries, SetFavsSeries] = useState([]);
 

  const handleLogOut = () => {
    localStorage.removeItem("usuario");
    navigate("/");
  };

  return (
    <> 
    
    <div >
      <div className="contenedor3">
        <button className="button"
          onClick={() => {
            navigate("/BuscarPelis");
          }}
        >
         Buscar Pelis
        </button>
        <button className="button"
          onClick={() => {
            navigate("/buscarSeries");
          }}
        >
          Buscar series
        </button>
        <button className="button"
          onClick={() => {
            // buscarPeliFav();
            navigate("/pelisFavs");
          }}
        >
          Peliculas favs
        </button>
        <button className="button"
          onClick={() => {
            // buscarSerieFav();
            navigate("/seriesFavs");
          }}
        >    Series Favs
        </button>
        <button className="button"
          onClick={() => {
            handleLogOut();
          }}
        >
          Cerrar sesion
        </button>
      </div>
    </div>
    </>
  );
};
export default Secret;
