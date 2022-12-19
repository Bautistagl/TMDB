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
import { isLoggedIn } from "../features redux/userSlice";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import PelisFavs from "./PelisFavs";
import SeriesFavs from "./SeriesFavs";

function Main() {
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  useEffect(() => {
    {
      user.id == null ? dispatch(isLoggedIn()) : console.log(user, "NADAAAAA");
    }
  }, []);
  return (
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
        <Route path="/pelisFavs" element={<PelisFavs />} />
        <Route path="/seriesFavs" element={<SeriesFavs />} />
      </Routes>

      <form> </form>
    </div>
  );
}

export default Main;
