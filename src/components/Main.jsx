import React from "react";
import { Route, Routes } from "react-router-dom";
import App from "./App";


import Secret from "./Secret";


import PaginaInicio from "./PaginaInicio";
import Login from "./Login";

import BusquedaSeries from "./BusquedaSeries";
import Busqueda from "./Busqueda";

import PelisFavs from "./PelisFavs";
import SeriesFavs from "./SeriesFavs";

function Main() {
  return (
    <div className="background">
      <Routes>
        <Route path="/buscarSeries" element={<BusquedaSeries />} />
        <Route path="/login" element={<Login />} />
       
        <Route path="/movies/:page" element={<App />} />  
        <Route exact path="/Usuario" element={<Secret />} />
        <Route path="/buscarPelis/" element={<Busqueda />} />
        <Route path="/" element={<PaginaInicio />} />
        <Route path="/pelisFavs" element={<PelisFavs />} />
        <Route path="/seriesFavs" element={<SeriesFavs />} />
      </Routes>

      <form> </form>
    </div>
  );
}

export default Main;
