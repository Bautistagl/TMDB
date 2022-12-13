import React from "react";
import { Route, Routes } from "react-router-dom";
import App from "./App";

import OneMovie from "./OneMovie";
import Secret from "./Secret";
import OneSerie from "./OneSerie";

import PaginaInicio from "./PaginaInicio";
import Login from "./Login";
import Registro from "./Registro";
import BusquedaSeries from "./BusquedaSeries";
import Busqueda from "./Busqueda";
const Main = () => (
  <div className="background">
    <Routes>
      <Route path="/buscarSeries" element={<BusquedaSeries />} />
      <Route path="/login" element={<Login />} />
      <Route path="/registro" element={<Registro />} />
      <Route path="/movies/:page" element={<App />} />
      <Route path="/buscarPelis/:id" element={<OneMovie />} />
      <Route path="/:id" element={<OneMovie />} />
      <Route path="/buscarSeries/series/:id" element={<OneSerie />} />
      <Route path="/series/:id" element={<OneSerie />} />
      <Route exact path="/Usuario" element={<Secret />} />
      <Route path="/buscarPelis/" element={<Busqueda />} />
      <Route path="/" element={<PaginaInicio />} />
    </Routes>

    <form> </form>
  </div>
);

export default Main;
